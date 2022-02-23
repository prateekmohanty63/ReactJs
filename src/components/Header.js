import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

function Header({title,onAdd,showAdd}) {
    // const onClick =()=>{
    //     console.log('Click')

    // }
  return (
    <header className='header'>
    <h1>{title}</h1>
    <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
   
    </header>
  )
}


// Css in JS
const headingStyle={
    color:'blue',
    backgroundColor:'black'
}

// Used to set a default props
Header.defaultProps={
    title:'Task tracker'
}

Header.defaultProps={
    title:PropTypes.string.isRequired
}
export default Header