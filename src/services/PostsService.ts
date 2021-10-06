import { BaseService } from "./BaseService";

class PostsAPIService extends BaseService {
  public async getPosts() {
    return this.get("");
  }

  public async getMyPosts() {
    return this.get("my_posts/");
  }
}

export const PostsService = new PostsAPIService();
