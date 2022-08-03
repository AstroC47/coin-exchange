import React from 'react';
import CoinList from './components/coinTable/coinList.js'
import AccountBalance from './components/AccountBalance/AccountBalance.jsx'
import Header from './components/Header/Header.jsx'
import { render } from '@testing-library/react';

import './App.css';

let sum = 0;
for(let num of [1,2,3,4,5]) {
   sum += num;
}

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      balance: 10000,

      coinData:[
        {
        name: "Bitcoin",
        ticker: "BTC",
        price: 9999.99
        },
        {
          name: "Ethereum",
          ticker: "ETH",
          price: 999.99
          },
          {
            name: "Cardano",
            ticker: "ADA",
            price: 0.5
            },
            {
              name: "Bitcoin Cash",
              ticker: "BTCH",
              price: 500.99
              },
              {
                name: "Ripple",
                ticker: "RPL",
                price: 99.99
                }
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);

  }

  handleRefresh(valueChangeTicker){
    const newCoinData = this.state.coinData.map( function({ticker,name,price}) {
      let newPrice = price;
      if (valueChangeTicker === ticker){
          const randomperc = 0.995 + Math.random() * 0.01;
          newPrice = price * randomperc;

      }
      return{
        ticker,
        name,
        price:newPrice
      }
    });
    this.setState({coinData:newCoinData})
  }

render(){
  return (
    <div className="App">
      <Header/>
      <AccountBalance amount = {this.state.balance} />
      <CoinList coindata = {this.state.coinData} handleRefresh={this.handleRefresh}/>
      
    </div>
  );
  }
}

export default App;
