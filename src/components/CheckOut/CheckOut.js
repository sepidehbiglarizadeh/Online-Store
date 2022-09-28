import { Link } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";
import { useCart } from "../../Providers/CartProvider";
import "./CheckOut";

const CheckOut = () => {
  const auth = useAuth();
  const { cart, total } = useCart();

  if (!cart.length)
    return (
      <main className="container">
        <Link to="/">Got to Shopping</Link>
      </main>
    );

  return (
    <main className="container">
      <section className="cartCenter">
        {auth ? (
          <>
            <section className="cartItemList">
              <h3>CheckOut Detail</h3>
              <p>Name : {auth.name}</p>
              <p>Email : {auth.email}</p>
              <p>Phone Number: {auth.phoneNumber}</p>
            </section>
            <section className="cartSummery">
              {cart &&
                cart.map((item) => {
                  return (
                    <div key={item.id}>
                      {item.name} * {item.quantity} :{" "}
                      {item.quantity * item.offPrice}
                    </div>
                  );
                })}
              <hr />
              <div>Total Price: {total}</div>
            </section>
          </>
        ) : (
          <p>Please Login</p>
        )}
      </section>
    </main>
  );
};

export default CheckOut;
