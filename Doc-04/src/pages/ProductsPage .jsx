import { useNavigate } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { useSearchParams } from "react-router-dom";

const ProductsPage  = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <button onClick={() => setSearchParams({ category: "clothing", sort: "price" })}>
        Show Clothing Sorted by Price
      </button>

      <ItemDetail />
    </div>
  )
}

export default ProductsPage 
