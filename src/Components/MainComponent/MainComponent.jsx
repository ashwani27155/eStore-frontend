import React from 'react'
import Product from '../Product/Product'
import SideComponent from '../SideComponent/SideComponent'
import '../MainComponent/MainComponent.css'
const MainComponent = () => {
  return (
    <div className='main-component'>
        <SideComponent/>
        <Product/>
    </div>
  )
}

export default MainComponent