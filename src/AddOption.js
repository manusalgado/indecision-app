import React from 'react'

class AddOption extends React.Component {
    constructor(props){
        super(props)

        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e){
        e.preventDefault()

        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)
        this.setState(() => {
            return {
                error
            }
        })
    }

    render () {
        return (
            <section>
                {this.state.error && <span>{this.state.error}</span>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' />
                    <button>Add</button>
                </form>
            </section>
        )
    }
}

export default AddOption