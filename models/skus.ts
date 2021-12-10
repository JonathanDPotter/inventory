import mongoose, { Schema } from "mongoose";
import Isku from "../interfaces/sku";

const SkuSchema: Schema = new Schema(
  {
    category: { type: Schema.Types.ObjectId, ref: "category", required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    onHand: { type: Number, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<Isku>("Sku", SkuSchema);
