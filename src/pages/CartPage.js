import Layout from "../Layout/Layout";
import { useCart } from "../Providers/CartProvider";
import "./CartPage.css";

const CartPage = () => {
  const { cart } = useCart();

  if (!cart.length) {
    return (
      <Layout>
        <main>
          <h2>Cart is Empty</h2>
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
                <div className="cartItem">
                  <div className="itemImage">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div>{item.name}</div>
                  <div>${item.price * item.quantity}</div>
                  <div>
                    <button>Remove</button>
                    <button>{item.quantity}</button>
                    <button>Add</button>
                  </div>
                </div>
              );
            })}
          </section>
          <section className="cartSummery">Cart Summery</section>
        </section>
      </main>
    </Layout>
  );
};

export default CartPage;
