import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductsList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/dashboard/products/1')}>
        Product 1
      </button>
      <button onClick={() => navigate('/dashboard/products/2')}>
        Product 2
      </button>
      <button onClick={() => navigate('/dashboard/products/3')}>
        Product 3
      </button>

    </div>
  )
}

export default ProductsList
