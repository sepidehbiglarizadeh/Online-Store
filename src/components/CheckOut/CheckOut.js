import { useAuth } from "../../Providers/AuthProvider";
import { useCart } from "../../Providers/CartProvider";

const CheckOut = () => {
  const auth = useAuth();
  const {cart}= useCart();
  return (
    <div>
      {auth ? (
        <>
          <p>name:{auth.name}</p>
          <p>email : {auth.email}</p>
          <p>phoneNumber: {auth.phoneNumber}</p>
          {cart.map((item)=> <div>product name : {item.name}</div>)}
        </>
      ) : (
        <p>please login</p>
      )}
    </div>
  );
};

export default CheckOut;
