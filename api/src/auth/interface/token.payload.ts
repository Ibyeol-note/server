export class TokenPayload<T> {
  iss: string;
  jti: string;
  payload: T;
  iat?: number;
  exp?: number;
}

export class UserAccessTokenPayload {
  userId: number;

  email: string;

  name: string;
}

export class UserRefreshTokenPayload {
  userId: number;

  email: string;
}
