import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types';
const Product = ({OneProduct,handleAlert}) => {
    
    return (
        <tr>
      <td><Button onClick={()=>{handleAlert(OneProduct.name)}}>Show</Button></td>
      <td>{OneProduct.name}</td>
      <td><img src={OneProduct.imgSrc} alt="" /></td>
      <td>{OneProduct.price}</td>
    </tr>
    )
}

export default Product

Product.propTypes={
    OneProduct:PropTypes.object,
    handleAlert:PropTypes.func
}