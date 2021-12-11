import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { capitalize } from "../../functions";
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
  const current = categories?.find((cat) => cat.name === category);
  const [currentSkus, setCurrentSkus] = useState<Isku[] | null | undefined>(
    null
  );

  useEffect(() => {
    console.log(skus)
    setCurrentSkus(skus?.filter((sku) => sku.category === current?.name));
  }, [skus, current]);

  return (
    <div className="item page">
      <h1 className="page-title">{category && capitalize(category)}</h1>
      {currentSkus &&
        currentSkus.map((sku) => {
          console.log(sku)
          return (
            <div className="item-contianer" key={sku.id}>
              <p className="name">{sku.name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default ItemPages;
