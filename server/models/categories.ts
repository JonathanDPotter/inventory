import mongoose, { Schema } from "mongoose";
import Icategory from "../interfaces/category";

const CategorySchema: Schema = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<Icategory>("Category", CategorySchema);
