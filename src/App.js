import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  state = {
    stocks: [],
    portfolio: [],
    filterTerm: ""
  }

  setFilter = (filterTerm) => {
    this.setState({
      filterTerm: filterTerm
    })
  }

  sort = (sortTerm) => {
    let sortedStocks;

    switch(sortTerm) {
      case "Alphabetically":
      sortedStocks = [...this.state.stocks].sort((a,b) => (a.name > b.name ? 1 : -1))
      break;

      case "Price":
      sortedStocks = [...this.state.stocks].sort((a,b) => (a.price > b.price ? -1 : 1))
      break;
    }
    this.setState({
      stocks: sortedStocks
    })
  }


  filter = () => {
    switch(this.state.filterTerm) {
      case "Tech":
      return this.state.stocks.filter(stock => stock.type === "Tech")
      break;

      case "Sportswear":
      return this.state.stocks.filter(stock => stock.type === "Sportswear")
      break;

      case "Finance":
      return this.state.stocks.filter(stock => stock.type === "Finance")
      break;

      case "Alphabetically":
      return this.state.stocks.sort((a,b) => (a.name > b.name ? 1 : -1))
      break;

      case "Price":
       return this.state.stocks.sort((a,b) => (a.price > b.price ? -1 : 1))
      break;

      default:
      return this.state.stocks
      break;
    }
  }

  buyStock = (stock) => {
    this.setState({
      portfolio: [...this.state.portfolio, stock]
    })
  }

  sellStock = (stock) => {
    let filteredStocks = this.state.portfolio.filter(myStock => myStock.id !== stock.id)
    this.setState({
      portfolio: filteredStocks
    })
  }

  render() {
    console.log(this.state.stocks)
    return (
      <div>
        <Header />
        <MainContainer
        setFilter={this.setFilter}
        filter={this.filter}
        sort={this.sort}
        sellStock={this.sellStock}
        buyStock={this.buyStock}
        stocks={this.filter()}
        portfolio={this.state.portfolio}/>
      </div>
    );
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(stocks => this.setState({stocks: stocks}))
  }
}

export default App;
