import React, { Component } from 'react'
import './coin.css';
import PropTypes from 'prop-types';

export default class coin extends Component {
    constructor(props){
      super(props);
      this.state = {
        price: this.props.price
      }
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

      const randomperc = 0.995 + Math.random() * 0.01;
      this.setState( function(oldState){
        return{
          price: oldState.price * randomperc
        };
      })
    }

  render() {
    return(
        <tr className='coin-row'>
        <td>{this.props.name}</td>
        <td>{this.props.ticker}</td>
        <td>${this.state.price}</td>
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