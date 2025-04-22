import { useSearchParams } from "react-router-dom";

const ItemDetail = () => {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category") || "all";
  const sort = searchParams.get("sort") || "relevance";

  return (
    <div>
      <h1>Category - {category}</h1>
      <h1>Brand - {sort}</h1>
    </div>
  )
}

export default ItemDetail
