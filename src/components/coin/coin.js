import React, { Component } from 'react'
import './coin.css';
import PropTypes from 'prop-types';
import Usd from '../usdBalance/Usd.js'

export default class coin extends Component {
    constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

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

    handleClick(event){
      event.preventDefault();

      this.props.handleRefresh(this.props.ticker);

      // const randomperc = 0.995 + Math.random() * 0.01;
      // this.setState( function(oldState){
      //   return{
      //     price: oldState.price * randomperc
      //   };
      // })
    }

  render() {
    return(
        <tr className='coin-row'>
        <td>{this.props.name}</td>
        <td>{this.props.ticker}</td>
        <td>${this.props.price}</td>
        <Usd usdBal={9900}/>
        <td>
          <button onClick={this.handleClick}>Refresh</button>
          </td>
        </tr>
      )
  }
}


coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired 
}