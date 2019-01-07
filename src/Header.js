import React from 'react'

const Header = (props) => {

    return (
        <section>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
        </section>
    )
    
}

export default Header