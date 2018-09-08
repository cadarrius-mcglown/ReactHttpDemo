
import React, { Component } from 'react'
import './App.css'
import Item from  './components/Item.js'

import axios from 'axios'

class App extends Component {
  constructor () {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  state = {
    persons: []
  }

  handleClick () {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
         .then(res => {
           const persons = res.data;
           this.setState({ persons });
         })
  }

  render () {

    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>Click Me</button>

    <Item persons={this.state.persons}/>

      </div>
    )
  }
}
export default App
