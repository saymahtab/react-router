import { useNavigate, useParams } from 'react-router-dom'

const ProductItem = () => {
  const { productID } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      Product {productID}
      <button onClick={() => navigate(`/dashboard/products/${productID}/edit`)}>Edit</button>
    </div>
  )
}

export default ProductItem
