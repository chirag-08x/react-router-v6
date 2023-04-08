import { useParams, Link } from "react-router-dom";
import { products } from "../utils/data";

const SingleProduct = () => {
  const { id } = useParams();
  const product = products.find(({ id: pid }) => pid === id);

  return (
    <div>
      <h1>SingleProduct</h1>
      <h2>{product.name}</h2>
      <img src={product.image} alt="" />
      <Link to={"/products"}>{"<---"} Go to Products</Link>
    </div>
  );
};

export default SingleProduct;
