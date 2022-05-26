import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, buyStock}) {

  function handleClick(e) {
    buyStock(e.target.innerHTML)
  }

  const renderStocks = stocks.map((stock) => {
    return (
      <Stock 
        handleClick={handleClick}
        key={stock.id} 
        stock={stock}
      />
    )
  })

  return (
    <div>
      <h2>Stocks</h2>
      {renderStocks}
    </div>
  );
}

export default StockContainer;
