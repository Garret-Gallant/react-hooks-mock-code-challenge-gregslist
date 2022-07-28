import React, { useState } from "react";
import { useEffect } from 'react';
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const[search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((res) => res.json())
    .then((listingData) => setListings(listingData))
  }, [])

  const displayedListings =
   listings.filter((listing) => listing.description.includes(search))

  function handleDeleteListing(id){
    const newListings = listings.filter((listing) => listing.id !== id)
    setListings(newListings)
  }

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch}/>
      <ListingsContainer handleDeleteListing={handleDeleteListing} listings={search ? displayedListings : listings} />
    </div>
  );
}

export default App;
