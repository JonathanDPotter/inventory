import React, { FC } from "react";
import { useParams } from "react-router-dom";
// types
import Icategory from "../../interfaces/category";
import Isku from "../../interfaces/sku";
// styles
import "./ItemPage.scss";

interface IitemPagesProps {
  categories: Icategory[] | null;
  skus: Isku[] | null;
}

const ItemPages: FC<IitemPagesProps> = ({ categories, skus }) => {
  const { category } = useParams();
  return <div className="item page">{category}</div>;
};

export default ItemPages;
