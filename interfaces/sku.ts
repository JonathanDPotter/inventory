import { Document } from "mongoose";
import Icategory from "./category";

export default interface Isku extends Document {
  category: Icategory;
  brand: string;
  name: string;
  description: string;
  price: number;
  onHand: number;
  url?: string;
}
