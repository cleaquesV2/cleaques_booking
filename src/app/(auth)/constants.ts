//this is for future edits where we might want to change the paths in one place

export const AuthPath = {
  login: "login",
  signup: "signup",
  forgot_password: "forgot-password",
  create_password: "create-password",
  reset_password: "reset-password",
  two_factor: "two-factor",
  email: "auth-email",
  sso: "sso",
  sso_callback: "sso/callback",
};

export const AUTH_CLIENT_ROUTE = {
  LOGIN: "/" + AuthPath.login,
  FORGOT_PASSWORD: "/" + AuthPath.forgot_password,
  TWO_FACTOR_AUTH: "/" + AuthPath.two_factor,
  EMAIL_AUTH: "/" + AuthPath.email,
  SIGNUP: "/" + AuthPath.signup,
  CREATE_PASSWORD: "/" + AuthPath.create_password,
  RESET_PASSWORD: "/" + AuthPath.reset_password,
  SSO: "/" + AuthPath.sso,
  SSO_CALLBACK: "/" + AuthPath.sso_callback,
  CREATOR_SIGNUP: "/signup/creator",
  PERSONAL_SIGNUP: "/signup/personal",
};
