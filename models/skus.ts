import mongoose, { Schema } from "mongoose";
import Isku from "../interfaces/sku";

const SkuSchema: Schema = new Schema(
  {
    category: { type: Schema.Types.ObjectId, ref: "category", required: true },
    brand: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    onHand: { type: Number, required: true },
  },
  { timestamps: true }
);

SkuSchema.virtual("url").get(function (this: Isku) {
  return "/api/skus/" + this._id;
});

export default mongoose.model<Isku>("Sku", SkuSchema);
