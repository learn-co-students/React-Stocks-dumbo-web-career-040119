import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar setFilter={this.props.setFilter} filter={this.props.filter} sort={this.props.sort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer portfolio={this.props.portfolio} buyStock={this.props.buyStock} stocks={this.props.stocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer sellStock={this.props.sellStock} portfolio={this.props.portfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
