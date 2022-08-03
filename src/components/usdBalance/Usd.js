import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Td = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
    colour: #cccccc
`
export default class usd extends Component {
    constructor(props){
        super(props);
        this.state = {
            usdBal: this.props.usdBal
        }
    }
        

        componentDidMount() {
            const updateUSD = () =>{
                const randomperc = 0.995 + Math.random() * 0.01;

                this.setState(function(oldState){
                    return{ 
                        usdBal: oldState.usdBal * randomperc
                    };
                })
            }
            setInterval(updateUSD, 1000);
        }

  render() {
    return (
      <Td>{this.state.usdBal}</Td>
    )
  }
}

usd.propTypes ={
    usdBal: PropTypes.number.isRequired
}