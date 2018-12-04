import React from 'react';
import IngredientList from 'Presentational/IngredientList';

export default class HomeContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {ingredient:''};
  }

  render(){
    return <div>
      <div>
        <input type="text" value={this.state.ingredient}
          onChange={e => this.setState({ingredient: e.target.value})}/>
        <input type="button" value="Add ingredient"
          onClick={() => {
            this.props.dispatch({type:'INCREMENT'});
            this.props.dispatch({type:'ADD_INGREDIENT', name:this.state.ingredient, id: this.props.getState().ingredientID});
            this.setState({ingredient:''});
          }} />
        <input type="button" value="Remove ingredient"
            onClick={() => {
              this.props.dispatch({type:'DECREMENT'});
              this.props.dispatch({type:'DELETE_INGREDIENT'});
            }} />
      </div>
      <div>Ingredients added: {this.props.getState().ingredientID} </div>
      <IngredientList ingredients={this.props.getState().ingredients}/>
    </div>;
  }
}
