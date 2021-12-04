import mongoose, { Schema } from "mongoose";
import BookInterface from "../interfaces/book";

const BookSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    extraInformation: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<BookInterface>("Book", BookSchema);
