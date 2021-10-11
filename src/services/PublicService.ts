import { GuestService } from "./GuestService";

class PublicAPIService extends GuestService {
  public async getPosts() {
    return this.get("posts/?limit=30");
  }
}

export const PublicService = new PublicAPIService();
