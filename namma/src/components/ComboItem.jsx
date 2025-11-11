import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./ComboItem.css";

const comboList = [
  { id: 101, name: "Idli + Vada Combo", price: 120,img:""},
  { id: 102, name: "Dosa + Coffee Combo", price: 150,img:""},
  { id: 103, name: "Parotta + Kurma Combo", price: 180 ,img:""},
  { id: 101, name: "Idli + Vada Combo", price: 120,img:""},
  { id: 102, name: "Dosa + Coffee Combo", price: 150,img:""},
  { id: 103, name: "Parotta + Kurma Combo", price: 180 ,img:""},
  { id: 101, name: "Idli + Vada Combo", price: 120,img:""},
  { id: 102, name: "Dosa + Coffee Combo", price: 150,img:""},
  { id: 103, name: "Parotta + Kurma Combo", price: 180 ,img:""},
  { id: 101, name: "Idli + Vada Combo", price: 120,img:""},
  { id: 102, name: "Dosa + Coffee Combo", price: 150,img:""},
  { id: 103, name: "Parotta + Kurma Combo", price: 180 ,img:""},
];

const ComboItems = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="p-7">
      <h2 className="combo-title">🍱 Combo Offers</h2>
      <div className="combo-grid">
        {comboList.map((combo) => (
          <div key={combo.id} className="combo-cart">
            <img src={combo.img} alt={combo.name} className="combo-img" />
            <h3 className="text-lg font-bold">{combo.name}</h3>
            <p className="price">₹{combo.price}</p>
            <button
              onClick={() => addToCart(combo)}
              className="add-btn"
            >
              Add Combo
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComboItems;