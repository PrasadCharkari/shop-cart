import React from "react";
import "./Home.css";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

function Home() {
  const productList = [
    {
      name: "Mac Book",
      price: 120000,
      imgsrc: "laptop.png",
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "Camera",
      price: 35000,
      imgsrc: "camera.png",
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
    {
      name: "Jacket",
      price: 1200,
      imgsrc: "jacket.png",
      id: "asdhajsrgrejkghnkjreghsjdfdfv",
    },
    {
      name: "Iphone",
      price: 69000,
      imgsrc: "Iphone.png",
      id: "sdjfdlaajroepiieowhf sjdfdfv",
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <main className="main">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgsrc={i.imgsrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </main>
  );
}

const ProductCard = ({ name, id, price, handler, imgsrc }) => (
  <section className="productCard">
    <img className="images" src={imgsrc} alt={name} />
    <p className="productname">{name}</p>
    <h3 className="Price">₹{price}</h3>
    <button
      className="btn-btn"
      onClick={() => handler({ name, price, id, quantity: 1, imgsrc })}
    >
      Add to Cart
    </button>
  </section>
);

export default Home;
