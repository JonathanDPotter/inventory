import { Document } from "mongoose";

export default interface BookInterface extends Document {
  title: string;
  author: string;
  extraInformation: string;
}
