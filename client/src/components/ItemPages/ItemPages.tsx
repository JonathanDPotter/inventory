import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { capitalize } from "../../functions";
// types
import { Icategory } from "../../interfaces/category";
import { Isku } from "../../interfaces/sku";
import { RootState } from "../../store";
import ItemCard from "../ItemCard/ItemCard";
// styles
import "./ItemPage.scss";

const ItemPages: FC = () => {
  const skus = useSelector<RootState, Isku[]>((state) => state.skus.skus);
  const categories = useSelector<RootState, Icategory[]>(
    (state: RootState) => state.categories.categories
  );
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
        currentSkus.map((sku, i) => {
          return <ItemCard sku={sku} key={i} />;
        })}
    </div>
  );
};

export default ItemPages;
