import { ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  const mockAuthService = {
    socialLogin: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService,
        },
      ],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  it('의존성 주입', () => {
    expect(authService).toBeDefined();
    expect(authController).toBeDefined();
  });

  describe('소셜로그인', () => {
    it('성공 테스트', async () => {
      // Arrange
      const loginMethod = LoginMethod.NAVER;
      const dto: socialLoginDto = {
        accessToken: 'someAccessToken',
      };

      mockAuthService.socialLogin.mockResolvedValue({
        userId: 1,
        token: 'jwtToken',
      });

      // Act
      const result = await authController.socialLogin(loginMethod, dto);

      // Assert
      expect(mockAuthService.socialLogin).toHaveBeenCalledWith(
        loginMethod,
        dto,
      );
      expect(result).toEqual({ userId: 1, token: 'jwtToken' });
    });

    it('loginMethod 잘못 기입됐을 떄 에러 반환', async () => {
      // Arrange
      const loginMethod = 'FACEBOOK' as LoginMethod;
      const dto: socialLoginDto = {
        accessToken: 'someAccessToken',
      };

      // Act
      const validationPipe = new EnumValidationPipe(LoginMethod);

      // Assert
      try {
        await validationPipe.transform(loginMethod, {
          type: 'param',
          data: 'loginMethod',
        });
      } catch (error) {
        expect(error).toBe(GlobalException.INVALID_ENUM_VALUE);
      }
    });
  });
});
