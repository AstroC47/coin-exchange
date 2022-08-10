import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem 
`

export default class AccountBalance extends Component {

handleClick = (event) => {
  event.preventDefault();

  this.props.handleViewBalance();
  
}


  render() {
    const buttontext = this.props.showBalance ? "Hide Balance" : "Show Balance"
    let bal = null;
    if (this.props.showBalance === true){
      bal = <>Balance: $ {this.props.amount}</>
    }
    return (
      <Section>
        {bal}
        <button onClick={this.handleClick}>{buttontext}</button>
      </Section>
    )
  }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}