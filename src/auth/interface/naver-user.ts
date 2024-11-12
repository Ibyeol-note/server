export interface NaverUser {
  resultcode: string;
  message: string;
  response: {
    id: string;
    email: string;
    name: string;
    nickname?: string;
    profile_image?: string;
  };
}
