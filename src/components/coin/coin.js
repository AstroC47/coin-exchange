import React, { Component } from 'react'
import './coin.css';
import PropTypes from 'prop-types';
import Usd from '../usdBalance/Usd.js'

export default function coin(props) {


    // componentDidMount() {
    //     const callBack = () => {
    //         const randomperc = 0.995 + Math.random() * 0.01;

            // this.setState( function(oldState){
            //   return{
            //     price: oldState.price * randomperc
            //   };
            // })
    //     }
    //     setInterval( callBack, 1000);
    // }

    const handleClick = (event) => {
      event.preventDefault();

      props.handleRefresh(props.tickerId);

      // const randomperc = 0.995 + Math.random() * 0.01;
      // this.setState( function(oldState){
      //   return{
      //     price: oldState.price * randomperc
      //   };
      // })
    }

    let bal = null;
    if (props.showBalance === true){
      bal = <td>{props.balance}</td>
    }


    return(
        <tr className='coin-row'>
        <td>{props.name}</td>
        <td>{props.ticker}</td>
        <td>$ {props.price}</td>
        {bal}
        <Usd usdBal={9900}/>
        <td>
          <button onClick={handleClick}>Refresh</button>
          </td>
        </tr>
      )
}


coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired, 
}