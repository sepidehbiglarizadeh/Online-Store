import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Providers/CartProvider";
import "./CartPage.css";

const CartPage = () => {
  const { cart,total } = useCart();
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
                  <div>${item.price * item.quantity}</div>
                  <div>
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
          <section className="cartSummery">Total: ${total}</section>
        </section>
      </main>
    </Layout>
  );
};

export default CartPage;
