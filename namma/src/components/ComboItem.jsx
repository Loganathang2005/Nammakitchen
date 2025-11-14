import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./ComboItem.css";

const comboList = [
  { id: 101, name: "Mini burger 3pcs + Regular Fries + Any 1 Mojito or Soda", price: 249,img:"https://images.pexels.com/photos/19247559/pexels-photo-19247559.jpeg"},
  { id: 102, name: "Chiken Pops Regular + Regular Fries + Any 1 Milkshake", price: 333,img:"https://images.pexels.com/photos/15629452/pexels-photo-15629452.png"},
  { id: 103, name: "Fried Chicken Burger + 4 pc LolliPop + any 1 Mojito", price: 379 ,img:"https://images.pexels.com/photos/5836843/pexels-photo-5836843.jpeg"},
  { id: 101, name: "1 Chicken Rice Bowl + 4pc LolliPop + Any one Mojito", price: 369,img:"https://images.pexels.com/photos/19786206/pexels-photo-19786206.jpeg"},
  { id: 102, name: "2 pc LolliPop +2 pc Strips +2 Pc Wings + CHicken Pops small + Any 1 Mojito", price: 349,img:"https://images.pexels.com/photos/11213786/pexels-photo-11213786.jpeg"},
  { id: 103, name: "4 pc Lollipop + 4n pc Strips + 4 pc Wings + chicken Lollipop + Any 2 soda or Mojito", price: 678 ,img:"https://images.pexels.com/photos/6642482/pexels-photo-6642482.jpeg"},
  { id: 101, name: "1 Fried Chicken Roll + Regular Fries + Coke or 7up", price: 229,img:"https://images.pexels.com/photos/2233351/pexels-photo-2233351.jpeg"},
  { id: 102, name: "2 Fried Chicken Burger + Mixed 5 + Any 2 soda or Mojito", price: 649,img:"https://images.pexels.com/photos/28976235/pexels-photo-28976235.jpeg"},
  { id: 103, name: "2 Fried Chicken Roll + MIxed 5 + Any 2 soda or Mojito", price: 649 ,img:"https://images.pexels.com/photos/20313069/pexels-photo-20313069.jpeg"},
  { id: 101, name: "1 Fried Chicken Burger + 1 Fried Chicken Roll + Mixed 5 + Any 2 soda or Mojito", price: 649,img:"https://images.pexels.com/photos/5864595/pexels-photo-5864595.jpeg"},
  { id: 102, name: "4 pc Lollipop + 4 pc Strips + 4 pc wings + chicken pops + full Fried Chicken Leg + Fries + Any 1 shake + Any 1 soda or Mojito", price: 999,img:"https://images.pexels.com/photos/3877670/pexels-photo-3877670.jpeg"},
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
