import MediaData from "./MediaData";

export default interface ContentData {
  docs: Doc[] | ProjectDoc[];
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
  category: string;
  projectUrl: string;
  order: number;
  year: string;
  _status: "published" | "draft";
}

export interface ProjectDoc extends Doc {
  slider: Slider[];
  description: string;
  year: string;
  duration: string;
  contribution: string;
  client: string;
}

export interface Slider {
  _order: number;
  id: string;
  title: string;
  caption: string;
  image: MediaData;
}

export interface Content {
  children: Content[];
  type?: string;
  value: any;
  relationTo?: string;
  text?: string;
  code?: boolean;
  italic?: boolean;
  bold?: boolean;
  url?: string;
}

export interface Children {
  text: string;
}
