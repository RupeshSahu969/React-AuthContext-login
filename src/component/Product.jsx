import React from 'react'
import { useContext } from 'react'

import {AuthContext} from "../context/AuthContext"

const Product = () => {

    const {isAuth} =useContext(AuthContext);



  return (
    <div>
        Product: {isAuth? "Login" : "Logout"}
        
        </div>
  )
}

export default Product