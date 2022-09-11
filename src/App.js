import React, {useEffect, useState} from 'react';
import CoinList from './components/coinTable/coinList.js'
import AccountBalance from './components/AccountBalance/AccountBalance.jsx'
import Header from './components/Header/Header.jsx'
import { render } from '@testing-library/react';
import axios from 'axios';

import './App.css';

let sum = 0;
for(let num of [1,2,3,4,5]) {
   sum += num;
}
const coinCount = 10;

function App(props) {

  const state = {
    balance: 10000,
    showBalance: false,

    coinData:[
      // {
      // name: "Bitcoin",
      // ticker: "BTC",
      // balance: 0.5,
      // price: 9999.99
      // },
      // {
      //   name: "Ethereum",
      //   ticker: "ETH",
      //   balance: 45,
      //   price: 999.99
      //   },
      //   {
      //     name: "Cardano",
      //     ticker: "ADA",
      //     balance: 354.83,
      //     price: 0.5
      //     },
      //     {
      //       name: "Bitcoin Cash",
      //       ticker: "BTCH",
      //       balance: 895.6,
      //       price: 500.99
      //       },
      //       {
      //         name: "Ripple",
      //         ticker: "RPL",
      //         balance: 1000,
      //         price: 99.99
      //         }
    ]
  }

  const [balance,setBalance] = useState(10000);
  const [showBalance,setShowBalance] = useState(true);
  const [coinData,setCoinData] = useState([]);


  const componentDidMount = async() => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins/');
    const coinIds = response.data.slice(0,coinCount+1).map(coin => coin.id);
    const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIds.map(id => axios.get(tickerUrl+id));
    const coinData = await Promise.all(promises);
    const coinPriceData = coinData.map(function(response){
      const coin = response.data;
      return{
        key : coin.id ,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: parseFloat(Number(coin.quotes.USD.price).toFixed(2))
      };
    })
      // this.setState({ coinData: coinPriceData});
      setCoinData(coinPriceData);
    }


  useEffect(function() {
    if (coinData.length === 0){
      componentDidMount();

    } else {

    }
  })

  // componentDidMount = () => {
  //   axios.get('https://api.coinpaprika.com/v1/coins/')
  //   .then(response => {
  //     let coinData = response.data.slice(0,coinCount+1).map(function(coin){
  //       return{
  //         key: coin.id,
  //         name: coin.name,
  //         ticker: coin.symbol,
  //         balance: 0,
  //         price: 0
  //       };
  //     })
  //     this.setState({ coinData});
  //   })
    
  // }

    


  const handleViewBalance = () => {
    // if (this.state.showBalance === true){
    //   this.setState({showBalance:false})
    // } else{
    //   this.setState({showBalance:true})
    // }
    setShowBalance(showBalance => !showBalance);
  }

  const handleRefresh = async (valueChangeId) => {
    const tickerCall = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
    const response = await axios.get(tickerCall);
    const newPrice = parseFloat(Number(response.data.quotes.USD.price).toFixed(2))

    const newCoinData = coinData.map( function( values ) {
      let newValues = {...values};
      if (valueChangeId === values.key){
          newValues.price = newPrice
      }
      return newValues;
      
    });

    // this.setState({coinData:newCoinData})
    setCoinData(newCoinData);
  }

    // handleRefresh = async (valueChangeTicker) => {
  //   console.log(valueChangeTicker);
    
  //   let callId ='';
  //   let newValues = '';

  //   const newCoinData = this.state.coinData.map( function( values ) {
  //     let newValues = {...values};
  //     console.log(values);
  //     if (valueChangeTicker === newValues.ticker){
  //        callId = newValues.id
  //        console.log(newValues.id);
  //     };
  //   });


  return (
    <div className="App">
      <Header/>
      <AccountBalance amount = {balance} showBalance={showBalance} handleViewBalance={handleViewBalance}/>
      <CoinList coindata = {coinData} handleRefresh={handleRefresh} showBalance={showBalance}/>
      
    </div>
  );

}

export default App;
