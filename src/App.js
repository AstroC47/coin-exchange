import './App.css';
import Coin from './components/coin/coin'
import logo from './logo.svg';

let sum = 0;
for(let num of [1,2,3,4,5]) {
   sum += num;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img className="App-logo" src={logo} alt="logo"/>
      <h1> Coin Exchange</h1>
      </header>
      <table className="coin-table">
        <thead>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
        </thead>
        <tbody id="root">
        <Coin name="Bitcoin" ticker="BTC" price={48344}/>
        <Coin name="Ethereum" ticker="ETH" price={2300}/>
        <Coin name="Tether" ticker="USDT" price={2300}/>
        {/* <AddCoin name="Ethereum" ticker="ETH" price="$3,345"/> */}
        {/* <ArrowCoin name="Cardano" ticker="ADA" price="$0.5"/> */}
        </tbody>
    </table>
      
    </div>
  ); 
}

export default App;
