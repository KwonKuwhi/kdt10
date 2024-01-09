import { Link } from 'react-router-dom';

function ProductItem({ product }) {
  return (
    <>
      <Link to={`/products/${product.id}`}>
        <ul>
          <li>상품명 : {product.name}</li>
        </ul>
      </Link>
    </>
  );
}

export default ProductItem;
