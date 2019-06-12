import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.stocks.map(stock => {
          return this.props.portfolio.includes(stock) ? null : <Stock key={stock.id} action={this.props.buyStock} stock={stock}  />
        })
        }
      </div>
    );
  }

}

export default StockContainer;
