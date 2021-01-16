import React, { useState } from 'react';
import Header from './components/Header';
import SearchImg from './components/SearchImg';
import axios from 'axios';
import ImageTypes from './components/ImageTypes';
import ImageList from './components/ImageList';
import Loading from './components/Loading';
import More from './components/More';
import ImageModal from './components/ImageModal';

const App = () => {

  const [imageData, setImageData] = useState(null);

  const [loading, setLoading] = useState(false);

  const [term, setTerm] = useState('');

  const [type, setType] = useState('all');

  const [limit, setLimit] = useState(12);

  const [currentImage, setCurrentImage] = useState(null);

  const fetchImageList = async (number) => {
    setLoading(true);
    try{
        const res = await axios({
            method:"GET",
            url:`https://pixabay.com/api/?key=15977895-930a4cf88aa558815d6bf03e8&q=${term}&image_type=${type}&per_page=${number?number:limit}&pretty=true`
        })
        if(res.status === 200 || res.status === 201) {
          setLoading(false)
          setImageData(res.data);
        }
    }catch(err) {
      setLoading(false)

        console.log(err);
    }
}


  const nextImage = () => {
    const currentIndex = imageData.hits.findIndex(el=>el.id === currentImage.id);
    if(currentIndex < imageData.hits.length - 1) {
      setCurrentImage(imageData.hits[currentIndex+1]);
    }else{
      setCurrentImage(imageData.hits[0]);
    }
  }

  const prevImage = () => {
    const currentIndex = imageData.hits.findIndex(el=>el.id === currentImage.id);
    if(currentIndex > 0) {
      setCurrentImage(imageData.hits[currentIndex-1]);
    }else{
      setCurrentImage(imageData.hits[imageData.hits.length-1]);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
    <Header/>
      <SearchImg setLimit={setLimit} term={term} setTerm={setTerm} fetchImageList={fetchImageList}/>
      <ImageTypes type={type} setType={setType}/>
      {imageData? <ImageList setCurrentImage={setCurrentImage} list={imageData}/>:""}
     <Loading loading={loading}/>
     {imageData? <More fetchImageList={fetchImageList} limit={limit} setLimit={setLimit} imageData={imageData}/>:""}
     <ImageModal nextImage={nextImage} prevImage={prevImage} imageData={imageData} image={currentImage} setCurrentImage={setCurrentImage}/>
    </div>
  );
}
 
export default App;