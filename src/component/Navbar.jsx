import React from 'react'
import { useContext ,useState} from 'react'
import { AuthContext } from '../context/AuthContext'
import Product from './Product'

const Navbar = () => {

    const {isAuth,login,logout} =useContext(AuthContext)


  return (
    <div>Navbar

      

    <button
    onClick={() => {
        if(isAuth) logout()
        else login("sahu","rupesh")
    }}
    
    >
{isAuth?"login" : "logout"}
    </button>

        <Product />
    </div>
  )
}

export default Navbar