import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem 
`

export default function AccountBalance(props) {

const handleClick = (event) => {
  event.preventDefault();

  props.handleViewBalance();
  
}

    const buttontext = props.showBalance ? "Hide Balance" : "Show Balance"
    let bal = null;
    if (props.showBalance === true){
      bal = <>Balance: $ {props.amount}</>
    }
    return (
      <Section>
        {bal}
        <button onClick={handleClick}>{buttontext}</button>
      </Section>
    )
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}