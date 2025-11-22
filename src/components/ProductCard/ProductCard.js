import { useContext } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

// TODO replace placeholder images
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";


// TODO rename ratings 
/*9
OverPos
VeryPos
Pos
MostlyPos
Mixed
MostlyNeg
Neg
VeryNeg
OverNeg
*/
const ProductCard = ({ movie }) => {
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = () => {
    addToCart({
      id: movie.id,
      title: movie.title,
      price: movie.vote_average.toFixed(1),
      image: movie.poster_path
        ? IMAGE_BASE_URL + movie.poster_path
        : "https://via.placeholder.com/500x750?text=No+Image",
    });
  };
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={
            movie.poster_path
              ? IMAGE_BASE_URL + movie.poster_path
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={movie.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/500x750?text=No+Image";
          }}
        />
      </div>
      <h3 title={movie.title}>{movie.title}</h3>
      <p className="rating">${movie.vote_average.toFixed(1)}</p>
      <div className="btn-group">
        <Link className="btn view-btn " to={`/product/${movie.id}`}>
          View Details
        </Link>
        <button className="btn add-btn" onClick={handleAddToCart}>
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
