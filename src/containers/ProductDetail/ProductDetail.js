import { useEffect, useState, useContext } from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { steamGames } from "../../data/steamGamesData";
import { CartContext } from "../../context/CartContext";

const ProductDetail = () => {
  const {addToCart} = useContext(CartContext)  
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const gameId = parseInt(id);
    const selectedGame = steamGames.find(g => g.id === gameId);
    
    const timer = setTimeout(() => {
        setGame(selectedGame);
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
    
  }, [id]);

  if (!game) {
    return <p>Loading...</p>;
  }

  const displayPrice = game.price === 0.0 ? "Free To Play" : `$${game.price.toFixed(2)}`;
  
  const handleAddToCart = () =>{
    addToCart({
      id: game.id,
      title: game.title,
      price: game.price.toFixed(2), 
      image: game.image,
    });
  }
  
  return (
    <div className="product-detail">
      <div className="product-detail__image">
        <img
          src={game.image}
          alt={game.title}
        />
      </div>
      <div className="product-detail__info">
        <h2>{game.title}</h2>
        <p className="description">{game.description}</p>

        <p><strong>Rating:</strong> {game.rating}</p>
        <p><strong>Release Date:</strong> {game.release_date}</p>
        <p><strong>Developer:</strong> {game.developer}</p>
        <p><strong>Publisher:</strong> {game.publisher}</p>
        <p><strong>Tags:</strong> {game.tags.join(', ')}</p>

        <p className="price">Price: {displayPrice}</p>
        <button className="btn add-btn" onClick={handleAddToCart}>Add to Wishlist</button>
      </div>
    </div>
  );
};

export default ProductDetail;