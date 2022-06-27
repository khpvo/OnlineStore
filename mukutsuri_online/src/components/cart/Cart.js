import React from "react";
import CartItem from "./cartitem/CartItem";
import { Link } from "react-router-dom";
import Spinner from "../spinner/Spinner";

function Cart({
  cart,
  handleUpdateCart,
  handleRemoveFromCart,
  handleEmptyCart,
}) {
  const EmptyCart = () => (
    <div className="col-md-5 col-lg-4 mx-auto">
      <h4 className="d-flex justify-content-around align-items-center mb-3">
        <span className="text-muted display-5">Your cart</span>
        <span className="badge bg-secondary"><p className="display-6 text-white">0 Items</p></span>
      </h4>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h4 className="my-0 text-muted">Cart is empty</h4>
            <hr className="my-4" />
            <Link className="w-100 btn btn-primary btn-lg" to="/products">
              Go shopping
            </Link>
          </div>
          <span className="badge badge-sm bg-danger text-white"><p className="display-6">UGX 0</p> </span>
        </li>
      </ul>
    </div>
  );

  const FilledCart = () => (
    <div className="col">
      <h4 className="d-flex justify-content-around mb-3">
        <span className="text-muted">Your cart</span>
        <span className="badge bg-secondary">{cart.line_items.length}</span>
      </h4>
      <hr className="text-muted" />
      <div className="row my-3 mx-auto">
        {cart.line_items.map((item) => (
          <div className="col-sm-4 col-md-3" key={item.id}>
            <CartItem
              item={item}
              handleUpdateCart={handleUpdateCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </div>
        ))}
      </div>
      <div className="my-3 list-group-item d-flex justify-content-between">
        <span>Subtotal (UGX)</span>
        <strong>{cart.subtotal.formatted_with_symbol}</strong>
      </div>
      <div className="btn-group btn-block">
        <button className="btn btn-danger" onClick={handleEmptyCart}>
          Empty Cart
        </button>
        <Link to="/checkout">
          <button className="btn btn-primary">Continue to checkout</button>
        </Link>
      </div>
    </div>
  );

  if (!cart.line_items) {
    return <Spinner />;
  }
  return (
    <div className="container">
      <div className="row g-5">
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </div>
    </div>
  );
}

export default Cart;
