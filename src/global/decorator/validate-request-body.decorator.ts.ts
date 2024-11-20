import {
  createParamDecorator,
  ExecutionContext,
  BadRequestException,
} from '@nestjs/common';
import * as typia from 'typia';

function createValidationDecorator<T>(
  source: 'body' | 'query' | 'params',
  schema: T,
): ParameterDecorator {
  return (
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number,
  ) => {
    const existingMetadata =
      Reflect.getMetadata('custom:validation', target, propertyKey) || [];
    existingMetadata.push({ source, schema, parameterIndex });
    Reflect.defineMetadata(
      'custom:validation',
      existingMetadata,
      target,
      propertyKey,
    );
  };
}

export function ValidateParameters(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const ctx: ExecutionContext = args[2]; // NestJS ExecutionContext
    const request = ctx.switchToHttp().getRequest();

    const metadata =
      Reflect.getMetadata('custom:validation', target, propertyKey) || [];
    for (const { source, schema, parameterIndex } of metadata) {
      let value;

      switch (source) {
        case 'body':
          value = request.body;
          break;
        case 'query':
          value = request.query;
          break;
        case 'params':
          value = request.params;
          break;
      }

      // Typia 검증 실행
      try {
        typia.assert(schema)(value);
        args[parameterIndex] = value; // 검증된 값을 파라미터로 전달
      } catch (error) {
        throw new BadRequestException(`Validation Error: ${error.message}`);
      }
    }

    return originalMethod.apply(this, args);
  };
}

export function ValidateBody<T>(schema: T): ParameterDecorator {
  return createValidationDecorator('body', schema);
}

export function ValidateQuery<T>(schema: T): ParameterDecorator {
  return createValidationDecorator('query', schema);
}

export function ValidateParam<T>(schema: T): ParameterDecorator {
  return createValidationDecorator('params', schema);
}
