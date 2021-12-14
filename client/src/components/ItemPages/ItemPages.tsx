import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { capitalize } from "../../functions";
// types
import Icategory from "../../interfaces/category";
import Isku from "../../interfaces/sku";
import ItemCard from "./ItemCard";
// styles
import "./ItemPage.scss";

interface IitemPagesProps {
  categories: Icategory[] | null;
  skus: Isku[] | null;
}

const ItemPages: FC<IitemPagesProps> = ({ categories, skus }) => {
  const { category } = useParams();
  const current = categories?.find((cat) => cat.name === category);
  const [currentSkus, setCurrentSkus] = useState<Isku[] | null | undefined>(
    null
  );

  useEffect(() => {
    if (category !== "all") {
      setCurrentSkus(skus?.filter((sku) => sku.category === current?.name));
    } else {
      skus && setCurrentSkus(skus);
    }
  }, [skus, category, current]);

  return (
    <div className="item page">
      <h1 className="page-title">{category && capitalize(category)}</h1>
      {currentSkus &&
        currentSkus.map((sku) => {
          return <ItemCard sku={sku} key={sku.id} />;
        })}
    </div>
  );
};

export default ItemPages;
