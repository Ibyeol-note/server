import { Injectable } from '@nestjs/common';

@Injectable()
export class Auth {
    authLoginMethodPost(
        loginMehtod: &#39;NAVER&#39; | &#39;KAKAO&#39; | &#39;GOOGLE&#39; | &#39;APPLE&#39;
    ): Promise<SuccessLogin> {
        // Business Logics
        return {
            // Return Data
        };
    }

}
