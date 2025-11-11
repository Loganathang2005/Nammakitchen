import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Menu.css";

const foodList = [
  { id: 1, name: "Masala Dosa", price: 80, img: "https://img.freepik.com/premium-photo/traditional-kerala-masala-dosa-south-indian-food-masala-dosa-picture-photography_1020697-135585.jpg" },
  { id: 2, name: "Idli Sambar", price: 50, img: "https://i.pinimg.com/736x/ef/f6/0f/eff60f10251dede991417cfdcd14806b.jpg" },
  { id: 3, name: "Pongal Vada", price: 100, img: "https://t4.ftcdn.net/jpg/16/33/68/51/360_F_1633685176_fqgn8d1zzRftk0Mtmugl1Z8wMTuooj5Y.jpg" },
  { id: 4, name: "Chicken Biryani", price: 180, img: "https://t3.ftcdn.net/jpg/16/88/94/54/240_F_1688945473_ItVspL0Txj4LykIlCwxetzZxOsSPiYES.jpg" },
  { id: 5, name: "Veg Biryani", price: 150, img: "https://i.pinimg.com/1200x/72/e1/0b/72e10b76ecbfb101cc2b5491f02ed8be.jpg" },
  { id: 6, name: "Parotta & Kurma", price: 120, img: "https://i.pinimg.com/1200x/08/ab/b9/08abb9d3b2ce3514e1baef419b38386c.jpg" },
  { id: 7, name: "Chapati Meals", price: 90, img: "https://i.pinimg.com/736x/cb/8c/57/cb8c578a4c525aff819e876b0e753442.jpg" },
  { id: 8, name: "South Indian Thali", price: 200, img: "https://i.pinimg.com/1200x/98/78/20/9878209dd10ea21533060e2c0135cafd.jpg" },
  { id: 9, name: "Fish Curry Meal", price: 220, img: "https://i.pinimg.com/1200x/2c/d4/b1/2cd4b1e7b0c47b5ec6a48c7ffa2dadd6.jpg" },
  { id: 10, name: "Mutton Curry", price: 250, img: "https://i.pinimg.com/736x/45/cc/cb/45cccb962317ee614674469f0a8760c7.jpg" },
  { id: 11, name: "Curd Rice", price: 70, img: "https://i.pinimg.com/1200x/81/f4/d0/81f4d07485350a5a0b15262673111e20.jpg" },
  { id: 12, name: "Paneer Butter Masala", price: 180, img: "https://i.pinimg.com/1200x/75/25/c2/7525c28b815e93b8f4ad4a3bb889090e.jpg" },
];

const Menu = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="menu-container">
      <h2 className="menu-title">Our Special Menu 🍽️</h2>
      <div className="menu-grid">
        {foodList.map((food) => (
          <div key={food.id} className="menu-card">
            <img src={food.img} alt={food.name} className="menu-img" />
            <h3>{food.name}</h3>
            <p className="price">₹{food.price}</p>
            <button onClick={() => addToCart(food)} className="add-btn">
              Add to Cart 🛒
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
