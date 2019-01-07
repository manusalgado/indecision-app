import React, { Component } from 'react'
import Header from './Header'
import Action from './Action'
import Options from'./Options'
import AddOption from './AddOption';


class App extends Component {
  constructor(props){
    super(props)

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      options: []
    }
  }

  handleDeleteOptions(){
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handlePick(){
    const randomNumber = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNumber]
    alert(option)
  }

  handleAddOption(option){
    if(!option){
      return 'Enter valid value'
    } else if(this.state.options.indexOf(option) > -1 ){
      return 'This option already exists'
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      }
    })   
  }

  render() {
    return (
      <div className="App">
       <Header title='Indecision' subtitle='Put your life on hands of the computer'/>
       <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick} 
        />
       <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
       <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

export default App;
