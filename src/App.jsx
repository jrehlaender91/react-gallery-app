import { useState, useEffect } from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import apiKey from "./config";
import Nav from './components/Nav'
import Search from './components/Search'
import PhotoList from './components/PhotoList';
import Photo from './components/Photo';

function App() {
  const [count, setCount] = useState(0);
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("candy");
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
          setImages(response.data.photos.photo);
          //console.log(response.data.photos.photo[0])
          //console.log(`https://www.flickr.com/photos/${response.data.photos.photo[0].owner}/${response.data.photos.photo[0].id}`)
        
      })
      .catch(error => {
        // handle error
        console.log("Error fetching and parsing data.", error);
      });

    }, [query]);

  return (
    <>
      <div className="container">
        <Search />
        <Nav />
        <PhotoList data={images} />
        {/* <Routes>
        <Route path='/' element={<Navigate to="/cats" />} />
          <Route path="cat" element={<PhotoList />} />
          <Route path="dogs" element={<PhotoList />} />
          <Route path="computers" element={<PhotoList />} />
          <Route path="search/:query" element={<PhotoList />}/>
        </Routes> */}
      </div>
    </>
  )
}

export default App
