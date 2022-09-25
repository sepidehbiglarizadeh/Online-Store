import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Providers/CartProvider";
import "./CartPage.css";

const CartPage = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActions();

  const incrementHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };

  const decrementHandler = (cartItem) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: cartItem });
  };

  if (!cart.length) {
    return (
      <Layout>
        <main>
          <h2>Cart is Empty!!</h2>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <main className="container">
        <section className="cartCenter">
          <section className="cartItemList">
            {cart.map((item) => {
              return (
                <div className="cartItem" key={item.id}>
                  <div className="itemImage">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div>{item.name}</div>
                  <div>${item.offPrice * item.quantity}</div>
                  <div className="btnGroup">
                    <button onClick={() => decrementHandler(item)}>
                      Remove
                    </button>
                    <button>{item.quantity}</button>
                    <button onClick={() => incrementHandler(item)}>Add</button>
                  </div>
                </div>
              );
            })}
          </section>
          <CartSummery cart={cart} total={total} />
        </section>
      </main>
    </Layout>
  );
};

export default CartPage;

const CartSummery = ({ total, cart }) => {
  const originalTotalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0;

  return (
    <section className="cartSummery">
      <h2 style={{ marginBottom: "30px" }}>Cart Summery</h2>
      <div className="summeryItem">
        <p>Original Total Price :</p>
        <p>${originalTotalPrice}</p>
      </div>
      <div className="summeryItem">
        <p>Cart Discount :</p>
        <p>${originalTotalPrice - total}</p>
      </div>
      <div className="summeryItem net">
        <p>Net Price :</p>
        <p>${total}</p>
      </div>
      <Link to="/checkOut">
        <button className="btn primary" style={{ marginTop: "20px",width:"100%" }}>
          Go To CheckOut
        </button>
      </Link>
    </section>
  );
};
