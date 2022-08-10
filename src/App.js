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

  state = {
    balance: 10000,
    showBalance: false,

    coinData:[
      {
      name: "Bitcoin",
      ticker: "BTC",
      balance: 0.5,
      price: 9999.99
      },
      {
        name: "Ethereum",
        ticker: "ETH",
        balance: 45,
        price: 999.99
        },
        {
          name: "Cardano",
          ticker: "ADA",
          balance: 354.83,
          price: 0.5
          },
          {
            name: "Bitcoin Cash",
            ticker: "BTCH",
            balance: 895.6,
            price: 500.99
            },
            {
              name: "Ripple",
              ticker: "RPL",
              balance: 1000,
              price: 99.99
              }
    ]
  }

  handleViewBalance = () => {
    if (this.state.showBalance === true){
      this.setState({showBalance:false})
    } else{
      this.setState({showBalance:true})
    }
  }

  handleRefresh = (valueChangeTicker) => {
    const newCoinData = this.state.coinData.map( function( values ) {
      let newValues = {...values};
      if (valueChangeTicker === values.ticker){
          const randomperc = 0.995 + Math.random() * 0.01;
          newValues.price *= randomperc;
      }
      return newValues;
      
    });

    this.setState({coinData:newCoinData})
  }

render(){
  return (
    <div className="App">
      <Header/>
      <AccountBalance amount = {this.state.balance} showBalance={this.state.showBalance} handleViewBalance={this.handleViewBalance}/>
      <CoinList coindata = {this.state.coinData} handleRefresh={this.handleRefresh} showBalance={this.state.showBalance}/>
      
    </div>
  );
  }
}

export default App;
