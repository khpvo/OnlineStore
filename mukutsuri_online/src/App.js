import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Cart, CheckOut, Footer, Navbar, Products } from "./components";
import { commerce } from "./lib/commerce";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
    console.log(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
    console.log(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const handleUpdateCart = async (productId, quantity) => {
    const { cart } = commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = commerce.cart.remove(productId);
    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = commerce.cart.empty();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row mb-3">
        <Navbar numberOfItemsInCart={cart.total_items} />
      </div>
      <div className="row mt-5">
        <div className="text-center mt-5">
        </div>
      </div>
      <div className="row">
        <Routes>
          <Route
            path="/"
            element={
              <Products products={products} onAddToCart={handleAddToCart} />
            }
          />
          <Route
            path="/store"
            element={
              <Products products={products} onAddToCart={handleAddToCart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleUpdateCart={handleUpdateCart}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
              />
            }
          />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default App;
