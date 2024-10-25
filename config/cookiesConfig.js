const accessTokenOption = {
  httpOnly: true,
  secure: true,
  sameSite: "None", // 개발환경에서만 적용
  maxAge: 1000 * 60 * 60, //1시간
  domain: "localhost",
};

const refreshTokenOption = {
  httpOnly: true,
  secure: true,
  sameSite: "None", // 개발환경에서만 적용
  maxAge: 1000 * 60 * 60 * 24, //1일,
  domain: "localhost",
};

export default {
  accessTokenOption,
  refreshTokenOption,
};
