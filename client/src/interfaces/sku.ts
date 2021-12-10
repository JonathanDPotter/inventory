import { Document } from "mongoose";
import Icategory from "./category";

export default interface Isku extends Document {
  category: Icategory;
  name: string;
  description: string;
  price: number;
  onHand: number;
  image: string;
}
