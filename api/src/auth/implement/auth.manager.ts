// import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';

// @Injectable()
// export class AuthManager {
//   constructor(private readonly jwtService: JwtService) {}

//   generateAccessToken(user: User): string {
//     const payload = {
//       id: user.id,
//       email: user.email,
//     };

//     return this.generateToken(
//       payload,
//       process.env.JWT_ACCESS_SECRET,
//       process.env.JWT_ACCESS_EXPIRES,
//     );
//   }

//   async generateRefreshToken(
//     user: User,
//     deviceInfo: DeviceInfo,
//   ): Promise<string> {
//     const payload = {
//       id: user.id,
//       email: user.email,
//       deviceInfo,
//     };

//     const token = this.generateToken(
//       payload,
//       process.env.JWT_ACCESS_SECRET,
//       process.env.JWT_REFRESH_EXPIRES,
//     );

//     return token;
//   }

//   private generateToken = (payload: any, secret: string, expiresIn: string) => {
//     return this.jwtService.sign(payload, { secret, expiresIn });
//   };
// }
