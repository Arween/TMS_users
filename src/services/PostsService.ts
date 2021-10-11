import { ImageType } from "react-images-uploading";
import { BaseService, projectAxios } from "./BaseService";

class PostsAPIService extends BaseService {
  public async getMyPosts() {
    return this.get("my_posts/");
  }

  public async sendPost(image: ImageType) {
    const { headers } = await this.getHeaders();
    if (this.credentials?.URL) {
      const { URL } = this.credentials;

      const formData = new FormData();
      formData.append("image", image.file as Blob);
      formData.append("text", "Text");
      formData.append("title", "Title");
      formData.append("lesson_num", "50");

      return await projectAxios.post(
        `${URL}/blog/posts/`,
        // {
        //   image: data_url,
        //   text: "Text",
        //   lesson_num: 50,
        //   title: "Title",
        // },
        formData,

        // [
        //   {
        //     name: "file",
        //     filename: `${filename}_${email}`,
        //     type: mime,
        //     data: NativeModules.RNFetchBlob.wrap(path),
        //   },
        //   { name: "image_type", data: "USER_AVATAR" },
        // ],
        {
          headers: { ...headers, "Content-Type": "multipart/form-data" },
        }
      );
      // return this.post("", data);
    }
  }
}

export const PostsService = new PostsAPIService();
