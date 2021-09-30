export interface IUserAuth {
  username: string;
  password: string;
  email: string;
}

export interface IUserLoginAuth {
  password: string;
  email: string;
}

export interface IActivationPayload {
  uid: string;
  token: string;
}
