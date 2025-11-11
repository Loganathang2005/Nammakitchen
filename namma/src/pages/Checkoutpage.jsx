import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleOrder = () => {
    clearCart();
    navigate("/success");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout 🧾</h2>
      <p>Enter your delivery details (skip for demo).</p>
      <button
        onClick={handleOrder}
        className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg"
      >
        Place Order
      </button>
    </div>
  );
};

export default CheckoutPage;
