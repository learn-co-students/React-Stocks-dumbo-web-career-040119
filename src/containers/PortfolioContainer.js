import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    // console.log(this.props.portfolio)
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            this.props.portfolio.map(stock => {
              return <Stock handleStockClick = {this.props.handlePortfolioClick} stock={stock}/>
            })
          }
      </div>
    );
  }

}

export default PortfolioContainer;
