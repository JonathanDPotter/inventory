import mongoose, { Schema } from "mongoose";
import Isku from "../interfaces/sku";

const SkuSchema: Schema = new Schema(
  {
    brand: { type: String },
    name: { type: String },
    price: { type: Number },
    description: { type: String },
    onHand: { type: Number },
    inStock: { type: Boolean },
  },
  { timestamps: true }
);

export default mongoose.model<Isku>("Sku", SkuSchema);
