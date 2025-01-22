export interface UserCommonProperties {
  id: string | number; // NaverUser는 string, KakaoUser는 number
  nickname?: string; // optional 속성, 둘 다 닉네임을 가질 수 있음
  name?: string; // NaverUser의 name (KakaoUser에는 없음)
  email?: string; // 이메일 정보 (optional)
  gender?: string; // 성별 정보 (NaverUser: F/M/U, KakaoUser: 성별 문자열)
  age?: string; // 나이 정보 (optional, NaverUser의 age와 KakaoUser의 age_range)
  birthday?: string; // 생일 정보 (MM-DD 형식 등)
  profile_image?: string; // NaverUser에서만 제공되지만, 통합 가능
}
