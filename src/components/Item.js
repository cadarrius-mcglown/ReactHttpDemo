
import React, { Component } from 'react'

class Item extends Component {
  render () {
    const divStyle = {
      width:'18 rem'
    }
    return (
      <div>

            { this.props.persons.map(person =>

              <div class="card" style={divStyle}>
                <img class="card-img-top" alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title">{person.name} {person.address.city}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>

            )}
      </div>
    )
  }
}
export default Item
