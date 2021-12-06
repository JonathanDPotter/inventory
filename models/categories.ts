import mongoose, { Schema } from "mongoose";
import Icategory from "../interfaces/category";

const CategorySchema: Schema = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

CategorySchema.virtual("url").get(function (this: Icategory) {
  return "/api/skus/" + this._id;
});

export default mongoose.model<Icategory>("Category", CategorySchema);
