import React from 'react'
import Coin from '../coin/coin.js'

export default function coinList(props) {

    let HeadConBalance = props.showBalance ? <th>Balance</th> : null;
    return (
        <table className="coin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
            {HeadConBalance}
            <th>Usd Balance</th>
          </tr>
        </thead>
        <tbody id="root">
          {props.coindata.map( ({key,name,ticker,price,balance}) => 
          <Coin 
          key={key} 
          name={name} 
          ticker={ticker} 
          price={price}
          balance={balance}
          handleRefresh = {props.handleRefresh}
          showBalance = {props.showBalance}
          tickerId = {key}
          />)}
          {/* {this.state.coinData.map( value => <Coin key={value.ticker} {...value}/>)} */}
        {/* <Coin name={this.state.coinData[0].name} ticker={this.state.coinData[0].ticker} price={this.state.coinData[0].price}/>
        <Coin name="Ethereum" ticker="ETH" price={2300}/>
        <Coin name="Tether" ticker="USDT" price={2300}/> */}
        {/* <AddCoin name="Ethereum" ticker="ETH" price="$3,345"/> */}
        {/* <ArrowCoin name="Cardano" ticker="ADA" price="$0.5"/> */}
        </tbody>
    </table>
    )
}
