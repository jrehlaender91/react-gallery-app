import { React, useState, useEffect } from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";

import apiKey from "./config";
import Nav from './components/Nav'
import Search from './components/Search'
import PhotoList from './components/PhotoList';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("cats");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let activeFetch = true;

    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        if (activeFetch) {
          setImages(response.data.photos.photo);
          setLoading(false);
        }
      })
      .catch(error => {
        console.log("Error fetching and parsing data.", error);
      });
    return () => { activeFetch = false };
  }, [query]);

  const handleQueryChange = searchText => {
    setQuery(searchText);
  }

  return (
    <div className="container">
      <Search changeQuery={handleQueryChange} />
      <Nav changeQuery={handleQueryChange} />
      <Routes>
        <Route path="*" element={<PhotoList data={images} />} />
      </Routes>
    </div>
  )
}

export default App
