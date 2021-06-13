import { Base } from "./base.model";

export interface Blog extends Base {
  title: string;
  description: string;
  viewCount: number;
  categoryId: number;
}

export type GetBlogsResponseModel = Blog[];

export interface BlogRequestModel {
  title: string;
  description: string;
  viewCount: number;
  categoryId: number;
}