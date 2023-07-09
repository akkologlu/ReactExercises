import './App.css';
import SearchHeader from './SearchHeader';
import searchImages from './api';
import { useState } from 'react';
import ImageList from './components/ImageList';

function App() {
  const [images, setImages] = useState([])

  const handleSumbit = async(term) =>{
    const result = await searchImages(term);
    setImages(result);
  }
  return (
    <div className="App">
      <SearchHeader search={handleSumbit}/>
      <ImageList imagesPlaceholder={images}/>
    </div>
  );
}

export default App;
