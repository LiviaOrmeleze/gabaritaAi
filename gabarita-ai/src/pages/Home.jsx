import React from 'react'


const Home = (props) => {
  return (
    <div >
      <img  
      height={400}
      className='rounded-5 m-5 border border-2 border-dark'
      src={props.pessoasHome} 
      alt="" />
    </div>
  )
}

export default Home
