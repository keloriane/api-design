import {Product} from "./Product";

enum UPDATE_STATUS {
  DRAFT = "DRAFT",
  IN_PROGRESS = "IN_PROGRESS",
  PUBLISHED = "PUBLISHED",
  DEPRECATED = "DEPRECATED",
}

export interface Update {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  body: string;
  content: string;
  status: UPDATE_STATUS;
  version?: string | null;
  asset?: string | null;
  productId: string;
  product: Product;
  points: UpdatePoints[];
}

export interface UpdatePoints {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string;
  updateId: string;
  update: Update;
}