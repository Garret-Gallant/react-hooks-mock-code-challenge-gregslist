import React, { useState } from "react";

function ListingCard( {handleDeleteListing, listing} ) {
  const [isFavorite, setIsFavorite] = useState(false)
  const {id, description, image, location} = listing;

  function flipFavorite(){
    setIsFavorite((isFavorite) => !isFavorite)
  }

  function handleDeleteClick(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE',
    });
    handleDeleteListing(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={flipFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={flipFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
