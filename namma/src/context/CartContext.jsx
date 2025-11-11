import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const exist = cart.find((p) => p.id === item.id);
    if (exist) {
      setCart(cart.map((p) => p.id === item.id ? { ...p, qty: p.qty + 1 } : p));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(cart.map((p) => p.id === id ? { ...p, qty: p.qty + 1 } : p));
  };

  const decreaseQty = (id) => {
    setCart(cart.map((p) => p.id === id && p.qty > 1 ? { ...p, qty: p.qty - 1 } : p));
  };

  const removeItem = (id) => {
    setCart(cart.filter((p) => p.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQty, decreaseQty, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
