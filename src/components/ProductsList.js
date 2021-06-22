import React from 'react'
import { Table } from 'react-bootstrap';
import Product from './Product';
const ProductsList = ({produits ,handleAlert}) => {
    console.log(produits);
    return (
            <Table striped bordered hover>
  <thead>
    <tr>
      <th></th>
      <th>Name</th>
      <th>Product</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    {produits.map((item,index)=><Product OneProduct={item} key={index} handleAlert={handleAlert}/>)}
  </tbody>
</Table>
    )
}

export default ProductsList
