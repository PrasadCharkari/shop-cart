import React from "react";
import "./Cart.css";
import DeleteIcon from '@mui/icons-material/Delete';
import "./mediaquery.css"
import { useDispatch, useSelector } from "react-redux";

const Cart = () =>  {

  const { cartItems, subTotal, tax, shipping, total } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch({
      type: "addToCart",
      payload: { id },
    });
    dispatch({ type: "calculatePrice" });
  };
  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });

    dispatch({ type: "calculatePrice" });
  };
  const deleteHandler = (id) => {
    dispatch({
      type: "deleteFromCart",
      payload: id,
    });
    dispatch({ type: "calculatePrice" });
  };

  return (
    <>
    <div className="cart">
      <main>
      {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              imgSrc={i.imgsrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1 style={{color:"sienna", fontSize:"40px", padding:"100px"}}>No Items Yet</h1>
        )}
  
       
      </main>
      <aside className="Calc"> 
      <h2>Subtotal: ₹{subTotal}</h2>
        <h2>Shipping: ₹{shipping}</h2>
        <h2>Tax: ₹{tax}</h2>
        <h2>Total: ₹{total}</h2>
      </aside>
    </div>
         </>
  );
}

const CartItem = (
  {imgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id}
) =>  (
      <div className="cartItem">
        <img className="CIimage" src={imgSrc} alt="" />
        <article>
          <h2>{name}</h2>
          <p>₹{price}</p>
        </article>
        <div>
          <button onClick={() => decrement(id)}>-</button>
          <p>{qty}</p>
          <button onClick={() => increment(id)}>+</button>
        </div>
        <DeleteIcon className="DelIcon" onClick={() => deleteHandler(id)} />
      </div>
    );
  

export default Cart;
