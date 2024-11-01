import React from 'react'
import '../Header/Header.css'
const Header = () => {
  return (
    <div className='header bg-dark'>
            <div className='brand my-1'>
                <h1>
                    eStore
                </h1>
            </div>

            <div className='search-container '>
              <select className='select-btn'>
                <option>Men</option>
                <option>Women</option>
                <option>Girls</option>
              </select>
              <input type="text" placeholder='Search...' />
              <button className='searchBtn'>
                  <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            
    
            <div style={{color:'white'}}>
              <span style={{padding:"10px"}}>
                <i className="fa-solid fa-user"></i>
              </span>
              <span style={{padding:"10px"}}> 
                <i className="fa-solid fa-heart"></i>
              </span>
              <span style={{padding:"10px"}}>
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
            </div>
        </div>
  )
}

export default Header