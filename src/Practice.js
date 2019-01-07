import React, { Component } from 'react';

class Practice extends Component {
  render() {
    const app = {
      title: 'Indecision App',
      subtitle: 'What I to do?',
      age: 30,
      options: ['One', 'Two']
    }

    var nameVar = 'Var'
    nameVar = 'Manuel'
    console.log('nameVar = ', nameVar)

    let nameLet = 'Let'
    nameLet = 'Manuel'
    console.log('nameLet = ', nameLet)

    const nameConst = 'Const'
    // nameConst = 'Manuel'
    console.log('nameConst = ', nameConst)
    
    
    const fullName = 'Manuel Salgado'

    let firstName
    if(fullName) {
     firstName = fullName.split(' ')[1]
      console.log(firstName) 
    }
    console.log(firstName)
    
    const square = function (x){
        return x * x
    }
    console.log(square(2))

    const squareArrow = x => x * x 
    console.log(squareArrow(3))

    const getPetName = fullNamePet => fullNamePet.split(' ')[0]
    console.log(getPetName('Ayudante de santa'))

    const add = (a, b) => {
        // console.log(arguments)
        return a + b
    }
    console.log(add(1, 10, 1000))

    // const user = {
    //     name: 'Manuel',
    //     cities: ['Barranquilla', 'Armenia', 'Bogota'],
    //     printPlacesLived: function(){
    //         console.log(this.name)
    //         console.log(this.cities)

    //         const that = this

    //         this.cities.forEach(function(city){
    //             console.log(that.name + 'has lived in ' + city)
                
    //         })
    //     }
    // }

    const user = {
        name: 'Manuel',
        cities: ['Barranquilla', 'Armenia', 'Bogota'],
        printPlacesLived(){
            console.log(this.name)
            console.log(this.cities)

            return this.cities.map(city => this.name + 'has lived in ' + city )
        }
    }
    console.log(user.printPlacesLived())

    const multiplier = {
        numbers: [10, 20, 30],
        multiplyBy: 3,
        multiply(){
            return this.numbers.map(number => this.multiplyBy * number)
        }
    }
    console.log(multiplier.multiply())
    
    let count = 0
    const addOne = () => {
        console.log('Add One')    
    }
    const minusOne = () => {
        console.log('Minus One')    
    }
    const reset = () => {
        console.log('Reset')    
    }
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
    // eslint-disable-next-line
    return (
      <div className="App">
        <h1>{app.title ? app.title : 'There are not title'}</h1>
        <p>Subtitle: {app.subtitle}</p>
        <p>Location: {app.location ? app.location : 'Unknown'}</p>
        <p>Age: {app.age >= 18 && <span>{app.age}</span>}</p>
        <p>Options: {app.options.length > 0 ? <span>{'Here are your options ' + app.options.length}</span> : 'No options'}</p>
      </div>
    );
  }
}

export default Practice;
