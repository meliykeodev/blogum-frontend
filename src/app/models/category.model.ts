import { Base } from "./base.model";

export interface CategoryModel extends Base {
  name: string;
}

export interface CategoryRequestModel {
  name: string;
}