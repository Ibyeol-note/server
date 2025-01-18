import { Injectable } from '@nestjs/common';

@Injectable()
export class Auth {
    authLoginMethodPost(
        loginMethod: &#39;NAVER&#39; | &#39;KAKAO&#39; | &#39;GOOGLE&#39; | &#39;APPLE&#39;
        authLoginMethodPostRequest: AuthLoginMethodPostRequest
    ): Promise<SuccessLoginResponse> {
        // Business Logics
        return {
            // Return Data
        };
    }

    authMeGet(
    ): Promise<UserIdResponse> {
        // Business Logics
        return {
            // Return Data
        };
    }

}
