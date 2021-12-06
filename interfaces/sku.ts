import { Document } from "mongoose";

export default interface Isku extends Document {
  brand: string;
  name: string;
  price: number;
  description: string;
  onHand: number;
  inStock: boolean;
}
