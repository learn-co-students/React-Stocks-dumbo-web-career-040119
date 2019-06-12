import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    // console.log(this.props.stocks)
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          this.props.stocks.map(stock => {
            return <Stock handleStockClick = {this.props.handleStockClick} stock={stock}/>
          })
        }
      </div>
    );
  }

}

export default StockContainer;
