import { useParams } from "react-router-dom";

export default function ProductCard() {
  const { product } = useParams();
  return <div>ProductCard {product}</div>;
}
