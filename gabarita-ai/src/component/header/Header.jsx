import React from 'react'
import styles from './Header.module.css'

const Header = (props) => {
  return (
    <header className='d-flex align-items-center'> 
    <div className={`${styles.logo} d-flex m-2 align-items-center rounded-5 justify-content-flex-start`}> 
      <img className='object-fit-cover'
      width={"60px"} 
      height={"60px"}
      src={props.logo} alt="" />
      <p className='align-items-center m-0'>Gabarita.Ai</p>
    </div>
    </header>
  )
}

export default Header
