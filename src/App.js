import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Ships } from "./conconents/Ships";
import cartImage from "./image/cart.png";
import { Cart } from "./conconents/Cart";

function App() {
  const [ships, setShips] = useState(null);
  const [page, setPage] = useState(1);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/?page=${page}`)
      .then((res) => setShips(res));
  }, [page]);
  const addToCart = (newShip, price) => {
    newShip.price = price;
    setCart([...cart, newShip]);
  };

  return (
    <div className="App">
      {!showCart ? (
        <div className="cart">
          <h1 className="header">Choose your ship and add it to the cart</h1>
          <div onClick={() => setShowCart(!showCart)}>
            <img src={cartImage} alt="cart" className="cart-image" />
            <span className="cart-item-amount">
              {cart.length ? cart.length : null}
            </span>
          </div>
        </div>
      ) : null}
      {showCart ? (
        <Cart cart={cart} />
      ) : (
        <>
          <button
            className={`${page === 1 ? "active" : null}`}
            onClick={() => setPage(1)}
          >
            1
          </button>
          <button
            className={`${page === 2 ? "active" : null}`}
            onClick={() => setPage(2)}
          >
            2
          </button>
          <button
            className={`${page === 3 ? "active" : null}`}
            onClick={() => setPage(3)}
          >
            3
          </button>
          <button
            className={`${page === 4 ? "active" : null}`}
            onClick={() => setPage(4)}
          >
            4
          </button>
          <div className="ships">{ships ? Ships(ships, addToCart) : null}</div>
        </>
      )}
    </div>
  );
}

export default App;
