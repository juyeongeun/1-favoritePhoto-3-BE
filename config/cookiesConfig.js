const accessTokenOption = {
  httpOnly: true,
  secure: true,
  sameSite: "None", // 개발환경에서만 적용
  maxAge: 1000 * 60 * 60, //1시간
  // domain: "localhost",
};

const refreshTokenOption = {
  httpOnly: true,
  secure: true,
  sameSite: "None", // 개발환경에서만 적용
  maxAge: 1000 * 60 * 60 * 24, //1일,
  // domain: "localhost",
};

const clearAccessTokenOption = {
  httpOnly: true,
  secure: true,
  sameSite: "None", // 개발환경에서만 적용
  maxAge: 0, //1시간
};

const clearRefreshTokenOption = {
  httpOnly: true,
  secure: true,
  sameSite: "None", // 개발환경에서만 적용
  maxAge: 0, //1일,
};

export default {
  accessTokenOption,
  refreshTokenOption,
  clearAccessTokenOption,
  clearRefreshTokenOption,
};
