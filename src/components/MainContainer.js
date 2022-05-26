import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
// import { useEffect } from "react/cjs/react.production.min";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  // const [portfolioStocks, setPortfolioStocks] = useState([])

  useEffect(() => {
    fetch(' http://localhost:3001/stocks')
      .then(res => res.json())
      .then(stocks => setStocks(stocks))
  },[])
  
  function buyStock(boughtStock) {
    const renderInPortfolio = stocks.filter((stock) => stock.name === boughtStock)
    console.log(renderInPortfolio)
  }

  return (
    <div>
      <SearchBar />
        <div className="row">
          <div className="col-8">
            <StockContainer 
              stocks={stocks}
              buyStock={buyStock}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer 
              stocks={stocks}
              // addToPortfolio={addToPortfolio}
            />
          </div>
        </div>
    </div>
  );
}

export default MainContainer;
