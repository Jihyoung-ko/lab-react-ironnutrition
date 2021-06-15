import React, { Component } from "react";


class AddFood extends Component  {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      calories:'',
      image: '',
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    if(!this.state.name) {
      alert('Please add a food') 
      return;
    }
    this.props.addTheFood(this.state);
  }

  handleChange = (e) => {
    
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { name, calories, image } = this.state;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit} className="form">
          <label>Name</label>
          <input type="text" name="name" value={name} onChange={this.handleChange} className="input"/>

          <label>Calories</label>
          <input type="number" name="calories" value={calories} onChange={this.handleChange} className="input" />

          <label>Image</label>
          <input type="text" name="image" value={image} onChange={this.handleChange} className="input"/>

          <button className="save-btn" >Save Food</button>

        </form>
      </div>
    )
  }
}

export default AddFood;