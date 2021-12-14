import { Document } from "mongoose";

export interface Icategory extends Document {
  name: string;
}

export interface InewCategory {
  name: string;
}

export interface IupdateCategory {
  id: string;
  name: string;
}

export interface IdeleteCategory {
  id: string;
}
