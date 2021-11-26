export const Ships = (ships, addToCart) => {
  const shipsItems = ships.data.results.map((ship, index) => {
    const price = `${index + 1}99`;
    return (
      <div className="ship">
        <div className="shipPreperty">{`Name: ${ship.name}`}</div>
        <div className="shipPreperty">{`Model: ${ship.model}`}</div>
        <div className="shipPreperty">{`Manufacturer: ${ship.manufacturer}`}</div>
        <div className="shipPreperty">{`Price: ${price}$`}</div>
        <button onClick={() => addToCart(ship, price)} className="add-to-cart">
          Add to cart
        </button>
      </div>
    );
  });
  return shipsItems;
};
