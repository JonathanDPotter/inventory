import { Document } from "mongoose";

export interface Isku extends Document {
  category: string;
  name: string;
  description: string;
  price: number;
  onHand: number;
  image: string;
}

export interface InewSku {
  category: string;
  name: string;
  description: string;
  price: number;
  onHand: number;
  image: string;
}

export interface IupdateSku {
  category: string;
  name: string;
  description: string;
  price: number;
  onHand: number;
  image: string;
}

export interface IdeleteSku {
  id: string;
}
