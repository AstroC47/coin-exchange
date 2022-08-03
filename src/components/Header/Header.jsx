import React, { Component } from 'react'
import logo from '../../logo.svg';


export default class Header extends Component {
  render() {
    return (
        <header className="App-header">
        <img className="App-logo" src={logo} alt="logo"/>
        <h1> Coin Exchange</h1>
        </header>
    )
  }
}
