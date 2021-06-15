import React, { Component } from 'react';
import './App.css';

import foods from './foods.json';
import FoodBox from './components/FoodBox.jsx';
import AddFood from './components/AddFood.jsx';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foods,
      showAddFood: false,
      todayFoods:[],
      todayFoodTotal:0,
    };
  }

  addFoodHandler = (theFood) => {
    const addedFoods = [...this.state.foods];
    addedFoods.push(theFood);
    alert('New food is added');
    this.setState({
      foods:addedFoods,
      showAddFood:false,
    })
  }

  showTheForm = () => {
    this.setState({
      showAddFood: !this.state.showAddFood
    })
  }

  searchHanlder = (query) => {
    const foodsCopy = [...this.state.foods];
    let searchedFood = [];
    (query ? searchedFood = foodsCopy.filter(food => food.name.toLowerCase().includes(query)) : searchedFood = foods)
    
    this.setState({
      foods:searchedFood
    })
  }

  addToTodayFood = (query) => {
    const todayList = [...this.state.todayFoods]
    const findTheFood = foods.filter(food => food.name.includes(query.name))
    
    const checkFood = todayList.some(food => food.name === query.name);
    if (!checkFood) todayList.push(findTheFood[0])
    // else change quantity, 
    
    const calSum = todayList.reduce((total, food) => total + food.calories * food.quantity, 0);
    this.setState({

      todayFoods:todayList,
      todayFoodTotal: calSum
    })
    console.log(query.quantity);
  }

  deleteHandler = (name) => {
    const todayList = [...this.state.todayFoods]
    const remainingFood = todayList.filter(food => name !== food.name)
    this.setState({
      todayList:remainingFood
    })
  }

  render() {
    const { foods, showAddFood, todayFoods, todayFoodTotal } = this.state;
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-6">IronNutrition</h1>

        <SearchBar onSearch={this.searchHanlder} />

        <div className="contents-container flex">
          <div className="left">
            {showAddFood ? <button className="add-btn" onClick={this.showTheForm} style={{backgroundColor:"#ff3860"}} >Close</button>
            : <button className="add-btn" onClick={this.showTheForm} style={{backgroundColor:"#00d1b2"}} >Add</button>
            }
            
            {showAddFood && <AddFood addTheFood={this.addFoodHandler}/>}
            
            { foods.map((food, index) => {
                return (
                  <FoodBox key={index} {...food}  onAdd={this.addToTodayFood} />   
                )
              })
              
            }
          </div>
          <div className="right mt-10 ml-20">
            <h1 className="text-3xl">Today's foods</h1>
            <ul>
              {todayFoods.map(food => {
                console.log(food);
                return (
                  <li>{food.quantity} {food.name} = {food.calories * food.quantity} cal <button onClick={()=>this.deleteHandler(food.name)}>x</button> </li>
                )
              })
              }
            </ul>
            <p className="font-bold">Total: {todayFoodTotal} cal</p>
          </div>

        </div>
        
        
      </div>
    )
  }
  
}

export default App;
