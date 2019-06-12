import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const API = "http://localhost:3000/stocks"

class MainContainer extends Component {

  state = {
    stocks: [],
    boughtStocks: [],
    filterV: "",
    sortedStocks: []
  }

  fetchStocks = () => {
    return fetch(API)
    .then(res => res.json())
    .then(stocks => {
      this.setState({
        stocks: stocks
      })})
  }

  componentDidMount() {
    this.fetchStocks()
  }

  buyStock = (stock) => {
    return this.setState(prevState => {
      return {boughtStocks: [...prevState.boughtStocks, stock]}
    })
  }

  sellStock = (stock) => {
    let array = [...this.state.boughtStocks]
    let index = array.indexOf(stock)
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({boughtStocks: array});
    }
  }

  sortStocks = (input) => {
    if (input === "Alphabetically") {
      const sortedStocks = this.state.stocks.sort((a,b) => {
        return a.name.localeCompare(b.name)
      })
      this.setState({
        sortedStocks: sortedStocks
      })
    } else {
      const sortedStocks = this.state.stocks.sort((a,b) => {
        return a.price > b.price ? 1 : -1
      }).reverse()
      this.setState({
        sortedStocks: sortedStocks
      })
    }
  }

  changeFilterV = (input) => {
    this.setState({
      filterV: input
    })
  }

  filterStocks = () => {
    if (this.state.filterV === "Tech") {
      return this.state.stocks.filter(stock => stock.type === "Tech")
    } else if (this.state.filterV === "Sportswear") {
      return this.state.stocks.filter(stock => stock.type === "Sportswear")
    } else if (this.state.filterV === "Finance") {
      return this.state.stocks.filter(stock => stock.type === "Finance")
    } else {
      return this.state.stocks
    }
  }

  render() {
    return (
      <div>
        <SearchBar sort={this.sortStocks} filter={this.changeFilterV}/>
          <div className="row">
            <div className="col-8">

              <StockContainer
              stocks={this.filterStocks()}
              buyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer boughtStocks={this.state.boughtStocks} sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
