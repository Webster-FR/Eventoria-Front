import type {IComment} from "~/types/comment.types";
import type {IUser} from "~/types/user.types";

export type PageType = "personal" | "group" | "restaurant" | "bar" | "theater" | "cinema" | "association" | "other";

export interface IPage {
  ulid: string;
  type: PageType;
  mainCategory?: any;
  hidden: boolean;
  place?: string;
  createdAt: Date;
  updatedAt: Date;

  publicData: IPagePublicData;
  comments: IComment[];
  owner: IUser;
}

export interface IPagePublicData {
  name: string;
  avatar?: string;
  banner?: string;
  bio?: string;
  website?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
}
