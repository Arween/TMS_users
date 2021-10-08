import { GuestService } from "./GuestService";

import { IUserAuth, IUserLoginAuth, IActivationPayload } from "../types/user";

class AuthAPIService extends GuestService {
  public async registration(profile: IUserAuth) {
    return this.post("users/", profile);
  }

  public async activateUser(activationPayload: IActivationPayload) {
    return this.post("users/activation/", activationPayload);
  }

  public async login(profile: IUserLoginAuth) {
    return this.post("jwt/create/", profile);
  }

  public async refreshToken(refreshToken: string) {
    const data = new FormData();

    data.append("refresh", refreshToken);

    return this.post("jwt/refresh/", data);
  }
}

export const AuthService = new AuthAPIService();
