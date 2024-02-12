import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchProductList } from '../redux/actions/productAction';

function ProductContainer() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const [productList, setProductList] = useState(products);

    useEffect(() => {
     dispatch(fetchProductList())
    }, [])

  return (
    <div>{
        productList.products.map((item) => (
            <ul><li>title: {item.title}</li>
            <li>price: {item.price}</li></ul>
        ))
        }</div>
  )
}

export default ProductContainer