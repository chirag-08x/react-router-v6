import { useState } from "react";
import { products } from "../utils/data";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState(products);
  return (
    <div>
      {data.map(({ id, name }, index) => {
        return (
          <div key={id}>
            <h3>
              {index + 1}. {name}
            </h3>
            <Link to={`/products/${id}`}>More info</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
