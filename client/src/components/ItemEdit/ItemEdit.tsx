import React, { FC, FormEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// functions
import { updateItem } from "../../api";
// types
import { RootState } from "../../store";
import { Isku, IupdateSku } from "../../interfaces/sku";
// styles
import "./ItemEdit.scss";

const ItemEdit: FC = () => {
  const navigate = useNavigate();
  const { edit } = useParams();
  const skus = useSelector<RootState, Isku[]>((state) => state.skus.skus);
  const [sku, setSku] = useState<Isku | undefined>(undefined);
  const [category, setCategory] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [onHand, setOnHand] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    if (!sku) {
      setSku(skus.find((sku) => sku._id === edit));
    } else {
      setCategory(sku.category);
      setImage(sku.image);
      setName(sku.name);
      setDescription(sku.description);
      setOnHand(sku.onHand);
      setPrice(sku.price);
    }
  }, [edit, sku, skus]);

  const handleChange = (event: { target: { id: any; value: any } }) => {
    const { id, value } = event.target;

    switch (id) {
      case "category":
        setCategory(value);
        break;

      case "image":
        setImage(value);
        break;

      case "name":
        setName(value);
        break;

      case "description":
        setDescription(value);
        break;

      case "on-hand":
        setOnHand(value);
        break;

      case "price":
        setPrice(value);
        break;

      default:
        break;
    }
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const updateSku: IupdateSku = {
      category,
      name,
      description,
      onHand,
      price,
      image,
    };
    updateItem(sku?._id, updateSku);
    navigate("/");
  };

  return (
    <div className="item-card">
      <form action="submit" onSubmit={onSubmit}>
        <img src={sku?.image} alt={sku?.name} />
        <div className="label-input">
          <label htmlFor="image">Image URL: </label>
          <input
            type="text"
            name="image"
            id="image"
            onChange={handleChange}
            value={image}
          />
        </div>
        <div className="label-input">
          <label htmlFor="category">Category: </label>
          <select
            name="category"
            id="category"
            value={category}
            required
            onChange={handleChange}
          >
            <option value="electronics">Electronics</option>
            <option value="jewelry">Jewelry</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="men's clothing">Men's Clothing</option>
          </select>
        </div>
        <div className="label-input">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div className="label-input">
          <label htmlFor="description">Description: </label>
          <textarea
            name="description"
            id="description"
            cols={30}
            rows={10}
            onChange={handleChange}
            value={description}
          ></textarea>
        </div>
        <div className="label-input">
          <label htmlFor="on-hand">On Hand: </label>
          <input
            type="number"
            name="on-hand"
            id="on-hand"
            onChange={handleChange}
            value={onHand}
          />
        </div>
        <div className="label-input">
          <label htmlFor="price">Price: </label>
          <input
            type="number"
            name="price"
            id="price"
            onChange={handleChange}
            value={price}
          />
        </div>
        <input type="submit" value="Update Item" />
      </form>
    </div>
  );
};

export default ItemEdit;
