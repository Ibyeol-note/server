export class NaverUser {
  resultcode: string;
  message: string;
  response: {
    id: string;
    nickname?: string;
    name: string;
    email: string;
    gender: string; // F(여성), M(남성), U(확인불가)
    age: string; // 연령대
    birthday: string; // MM-DD 형식
    birthYear: string; // 출생연도
    mobile: string; // 휴대번호
    profile_image?: string;
  };

  constructor(data: {
    resultcode: string;
    message: string;
    response: {
      id: string;
      nickname?: string;
      name: string;
      email: string;
      gender: string;
      age: string;
      birthday: string;
      birthYear: string;
      mobile: string;
      profile_image?: string;
    };
  }) {
    this.resultcode = data.resultcode;
    this.message = data.message;

    const isVerifedName = data.response.name.includes('id');
    this.response = {
      ...data.response,
      name: isVerifedName ? null : data.response.name,
    };
  }
}
