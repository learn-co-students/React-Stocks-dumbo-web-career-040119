import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  
  render() {
    // console.log(this.props.portfolio)
    

    return (
      <div>
        <SearchBar alphaCheck ={this.props.alphaCheck} priceCheck = {this.props.priceCheck} handleSort={this.props.handleSort} handleFilter = {this.props.handleFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer handleStockClick = {this.props.handleStockClick} stocks ={this.props.stocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer handlePortfolioClick ={this.props.handlePortfolioClick} portfolio = {this.props.portfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
