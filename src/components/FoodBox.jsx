import React, { Component } from 'react';

class FoodBox extends Component {
  
  addHandler = () => {
    this.props.onAdd(this.props)
  }


  render () {
    const { name, image, calories } = this.props;
    return (
      <div className="flex items-center box mb-6">
        <div className="w-16 h-16 ">
          <img className="h-full w-full" src={image} alt={name} />
        </div>
        <div className="text-container flex-1">
          <p className="font-bold">{name}</p>
          <p className="text-sm">{calories} cal</p>
        </div>        
        <div className="flex">
          <input className="h-16 w-16 text-center" type="number" placeholder="1"  onChange={this.addHandler} />      
          <button className="h-16 w-16 button-container" onClick={this.addHandler} > + </button>          
        </div>
      </div>
    )
  }

}

export default FoodBox;