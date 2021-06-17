import React, { Component } from 'react';



class FoodBox extends Component {

  constructor(props){
     super(props);
     this.state = {
       foodQuantity: 1,
       foodCalories: this.props.calories
     }
   }
  
  handleInput = (e) => {
    this.setState({
      foodQuantity: parseInt(e.target.value),
      foodCalories: this.props.calories * parseInt(e.target.value),
    })
  }

  addHandler = () => {
    const foodObject = {
      ...this.props,
      calories: this.state.foodCalories,
      quantity: this.state.foodQuantity
    }
    this.props.onAdd(foodObject)
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
          <input className="h-16 w-16 text-center" type="number" onChange={this.handleInput}  value={this.state.foodQuantity}  />      
          <button className="h-16 w-16 button-container" onClick={this.addHandler} > + </button>          
        </div>
      </div>
    )
  }

}

export default FoodBox;