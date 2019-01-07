import React from 'react'
import Option from './Option'

const Options = (props) => {

    return (
        <section>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            <p>Your options here: {props.options.length} </p>
            {props.options.map(option => <Option key={option} optionText={option} />)}
        </section>
    )
}

export default Options