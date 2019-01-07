import React from 'react'

const Action = (props) => {

    return (
        <section>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do
            </button>
        </section>
    )
    
}

export default Action