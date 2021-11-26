import React, { useState } from "react";
import { ShipsInCart } from "./ShipsInCart";

export const Cart = (allShips1) => {
  const [promoCode, setPromoCode] = useState("");
  const [allShips, setAllShips] = useState(allShips1.cart);
  let shipsWithCount = [];

  allShips.forEach((item) => {
    let resObj = shipsWithCount.find((resObj) => resObj.name === item.name);
    resObj
      ? resObj.count++
      : shipsWithCount.push({ name: item.name, price: item.price, count: 1 });
  });

  const addShip = (ship) => {
    setAllShips([...allShips, ship]);
  };

  const ships =
    allShips.length > 0 ? ShipsInCart(shipsWithCount, addShip) : null;
  let total = shipsWithCount
    .map((item) => item.price * item.count)
    .reduce((a, b) => a + b, 0);
  if (promoCode === "PALPATINE") {
    total = total - (total * 0.066).toFixed(0);
  }

  return (
    <>
      <div className="promo-code">Apply promo Code</div>
      <input
        type="text"
        onChange={(event) => setPromoCode(event.target.value)}
      ></input>
      <div className="header">{`Total: ${total}$`}</div>
      {ships}
    </>
  );
};
