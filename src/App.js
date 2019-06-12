import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

const URL = `http://localhost:3000/stocks`
class App extends Component {
  state = {
    originalStocks: [],
    stocks: [],
    portfolio: [],
    alphaCheck: false,
    priceCheck: false

  }

  componentDidMount = () => {
    fetch(URL)
    .then(resp => resp.json())
    .then(stocks => {
      this.setState({
        originalStocks: stocks,
        stocks: stocks
      })
    }
  )}

  handleSort = (e) => {
    // console.log(e.target.checked)
    // e.target.checked = !e.target.checked
    switch(e.target.name){
      case 'alphabet' : this.setState({
        stocks: this.state.stocks.sort((a, b) => (a.name > b.name) ? 1 : -1)
        // alphaCheck: !this.state.alphaCheck
      }) 
      break;
      case 'price' : this.setState({
        stocks: this.state.stocks.sort((a, b) => (a.price > b.price) ? 1 : -1)
        // priceCheck: !this.state.priceCheck
      }) 
      break;
    }
    // if(e.target.name === 'alphabet'){
    //   .sort((a, b) => (a.price > b.price) ? 1 : -1)
    //   // this.forceUpdate()
    // }
  }

  handleStockClick = (stock) => {
    // console.log(stock)
    this.setState({
      portfolio: [stock, ...this.state.portfolio]
    })
  }

  handlePortfolioClick = (stockInput) => {
    let newPort = this.state.portfolio.splice(this.state.portfolio.indexOf(stockInput), 1)
    // let newPort = this.state.portfolio.filter(stock => {
    //   if(stock !== stockInput){
    //     return stock
    //   }
    // })
    // this.setState({
    //   portfolio: newPort
    // })
    // let newPort = this.state.portfolio.filter(stock => {
    //   if(this.state.portfolio.indexOf(stock) !== this.state.portfolio.indexOf(stockInput)){
    //     return stock
    //   }
    // })
    this.setState({
      portfolio: this.state.portfolio
    })
    console.log(newPort)
    
  }
  

  freshStocks = () => {
    return this.state.originalStocks
  }

  handleFilter = (e) => {
    console.log(e.target.value)
    // let filter = 
    this.setState({
      stocks: this.freshStocks().filter(stock => {
        return stock.type === e.target.value
      })
    })
  }
  
  render() {
    // console.log(this.state.portfolio)
    return (
      <div>
        <Header/>
        <MainContainer alphaCheck={this.state.alphaCheck} priceCheck ={this.state.priceCheck} handleFilter = {this.handleFilter} handleSort={this.handleSort} handleStockClick={this.handleStockClick} handlePortfolioClick={this.handlePortfolioClick} stocks = {this.state.stocks} portfolio = {this.state.portfolio}/>
      </div>
    );
  }
}

export default App;
