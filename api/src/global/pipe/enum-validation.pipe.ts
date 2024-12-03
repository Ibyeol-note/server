import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { GlobalException } from '../exceptions/global-exceptions';

export class EnumValidationPipe implements PipeTransform {
  constructor(private readonly enumType: object) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const isEnumValid = Object.values(this.enumType).includes(value);
    if (!isEnumValid) {
      throw GlobalException.INVALID_ENUM_VALUE;
    }
    return value;
  }
}
