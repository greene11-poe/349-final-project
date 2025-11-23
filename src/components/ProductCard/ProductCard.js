import { useContext } from "react"; 
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({ item, isHome }) => { 
    
    const { addToCart } = useContext(CartContext); 
    if (!item) return null; 
    const formattedPrice = item.price === 0.0 ? "Free To Play" : `$${item.price.toFixed(2)}`;

    const handleAddToCart = () => {
        addToCart({
            id: item.id,
            title: item.title,
            price: item.price.toFixed(2), 
            image: item.image,
        });
    };
    
    return (
        <div className="product-card">
            <div className="product-image">
                <img
                    src={item.image} 
                    alt={item.title}
                />
            </div>
            <h3 title={item.title}>{item.title}</h3>
            
            <p className="rating">{formattedPrice}</p>
            
            <div className="btn-group">
                <Link className="btn view-btn " to={`/product/${item.id}`}>
                    View Details
                </Link>

                {!isHome && (
                    <button className="btn add-btn" onClick={handleAddToCart}>
                        Add to Wishlist
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;