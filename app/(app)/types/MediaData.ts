export default interface MediaData {
  id: number;
  alt: any;
  updatedAt: string;
  createdAt: string;
  url: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  sizes: Sizes;
  errors: { message: string };
}

export interface Sizes {
  thumbnail: Thumbnail;
  card: Card;
  tablet: Tablet;
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
  mimeType: string;
  filesize: number;
  filename: string;
}

export interface Card {
  url: string;
  width: number;
  height: number;
  mimeType: string;
  filesize: number;
  filename: string;
}

export interface Tablet {
  url: string;
  width: number;
  height: number;
  mimeType: string;
  filesize: number;
  filename: string;
}
