import MediaData from "./MediaData";

export default interface ContentData {
  docs: Doc[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: any;
  page: number;
  pagingCounter: number;
  prevPage: any;
  totalDocs: number;
  totalPages: number;
  errors?: { message: string }[];
}

export interface Doc {
  id: number;
  title: string;
  headerImage: MediaData;
  content: Content[];
  updatedAt: string;
  createdAt: string;
  slug: string;
}

export interface Content {
  children: Children[];
  type?: string;
  value: any;
  relationTo?: string;
}

export interface Children {
  text: string;
}
