import React from 'react'

class Counter extends React.Component {
    constructor(props){
        super(props)

        this.handleAdd = this.handleAdd.bind(this)
        this.handleLess = this.handleLess.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: 0
        }
    }

    handleAdd(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    handleLess(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    handleReset(){
        this.setState({count: 0})
    }


    render(){
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleAdd}>+</button>
                <button onClick={this.handleLess}>-</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

export default Counter