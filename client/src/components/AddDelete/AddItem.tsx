import React, { FormEvent, useState } from "react";
import { createItem } from "../../api";
// types
import { InewSku } from "../../interfaces/sku";
// styles
import "./AddDelete.scss";

const AddItem = () => {
  const [category, setCategory] = useState("Electronics");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [onHand, setOnHand] = useState(0);
  const [image, setImage] = useState("");

  const handleChange = (event: { target: { value: any; id: any } }) => {
    const { value, id } = event.target;
    switch (id) {
      case "category":
        setCategory(value);
        break;

      case "name":
        setName(value);
        break;

      case "description":
        setDescription(value);
        break;

      case "price":
        setPrice(parseFloat(value));
        break;

      case "on-hand":
        setOnHand(parseInt(value));
        break;

      case "image":
        setImage(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const newSku: InewSku = {
      category,
      name,
      description,
      price,
      onHand,
      image,
    };

    console.log(newSku);

    createItem(newSku).catch((error) => {
      if (error) {
        window.alert(error);
      }
    });
  };

  return (
    <div className="full-page">
      <h1 className="title">Add new Item</h1>
      <form action="submit" onSubmit={handleSubmit}>
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
          <label htmlFor="name">Item Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            required
            onChange={handleChange}
          />
        </div>
        <div className="label-input">
          <label htmlFor="description">Description: </label>
          <textarea
            name="description"
            id="description"
            value={description}
            required
            onChange={handleChange}
          />
        </div>
        <div className="label-input">
          <label htmlFor="price">Price: </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="price"
            id="price"
            value={price}
            required
            onChange={handleChange}
          />
        </div>
        <div className="label-input">
          <label htmlFor="on-hand">On Hand: </label>
          <input
            type="number"
            min="1"
            step="1"
            name="on-hand"
            id="on-hand"
            value={onHand}
            required
            onChange={handleChange}
          />
        </div>
        <div className="label-input">
          <label htmlFor="image">Image URL: </label>
          <input
            type="text"
            name="image"
            id="image"
            value={image}
            required
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Submit" className="button" />
      </form>
    </div>
  );
};

export default AddItem;
