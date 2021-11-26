export const ShipsInCart = (allShips, addShip) => {
  const ships = allShips.map((ship) => {
    return (
      <>
        <div className="ship">
          <div className="shipPreperty">{`Name: ${ship.name}`}</div>
          <div className="shipPreperty">{`Price: ${ship.price}$`}</div>
          <div className="shipPreperty">
            {`Count: ${ship.count}`}
            <button onClick={() => addShip(ship)} className="add-ship">
              +
            </button>
          </div>
          <div className="shipPreperty">{`Total for this ship: ${
            ship.price * ship.count
          }$`}</div>
        </div>
      </>
    );
  });
  return ships;
};
