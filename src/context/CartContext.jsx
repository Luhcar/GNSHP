import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    const itemInCart = cartItems.find((item) => item.id === product.id);
    if (itemInCart) {
      // Increas quantity if already in cart
      const updateCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updateCart);
      toast.success('Product quantity updated!')
    } else {
      // Add new item with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }])
      toast.success('Product added to cart!')
    }
  };

  const updateQuantity = (cartItems, productId, action) => {
    setCartItems(
      cartItems
        .map((item) => {
          if (item.id === productId) {
            let newUnit = item.quantity;
            if (action === "increment") {
              newUnit += 1;
              toast.success('Quantity is increased!')
            } else if (action === "decrement") {
              newUnit -= 1;
              toast.success('Quantity is decreased!')
            }
            return newUnit > 0 ? { ...item, quantity: newUnit } : null;
          }
          return item;
        })
        .filter((item) => item !== null) // remove item quantity 0
    );
  };

  const deleteItem = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
    toast.success('Product removed from cart!')
  };

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addToCart, updateQuantity, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
