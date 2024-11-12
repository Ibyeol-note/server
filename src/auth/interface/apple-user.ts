export interface AppleUser {
  sub: string; // User ID
  email: string;
  email_verified: boolean;
  name?: {
    firstName: string;
    lastName: string;
  };
}
