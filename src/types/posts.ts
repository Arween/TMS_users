export interface IPost {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
}

export interface IPostsRequest {
  count: number;
  next: null | string;
  previous: null | string;
  results: IPost[];
}
