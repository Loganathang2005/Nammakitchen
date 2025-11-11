import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const { cart, increaseQty, decreaseQty, removeItem } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="m">
      <h2 className="text-2xl font-bold mb-4">Your Cart 🛒</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.
          Please Order your Favourite Food🍲
        </p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <span>{item.name}</span>
              <div>
                <button onClick={() => decreaseQty(item.id)} className="px-2">-</button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(item.id)} className="px-2">+</button>
              </div>
              <span>₹{item.price * item.qty}</span>
              <button onClick={() => removeItem(item.id)} className="text-red-600">❌</button>
            </div>
          ))}
          <h3 className="text-xl font-bold mt-4">Total: ₹{total}</h3>
          <Link to="/checkout">
            <button className="mt">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;