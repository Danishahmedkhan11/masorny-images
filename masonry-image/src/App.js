import "./App.css";
import AutoGallery from "./AutoGallery";
import Image from "./Image";
import { images } from "./images";
import {useEffect, useState} from 'react'



function App() {

  const[gallery,setGallery]=useState([]);


  useEffect(()=>
    setGallery(images)
    ,[])

  function handleClick(e){
    console.log(e.target.name)
    const name=e.target.name
    console.log(e.target.className)


    if(name=='all'){
      setGallery(images.map(image =>{
        return image
      }
      ))
    }
    if(name=='nature'){
      setGallery(images.filter(image =>{
        return image.title=='Nature'
      }
      ))
    }

    if(name=='cities'){
      setGallery(images.filter(image =>{
        return image.title=='City'
      }
      ))
    }

    console.log(gallery)
  }




  return (
    <div className="App">
    <AutoGallery/>  
    
      <button type="button" name='all' onClick={handleClick} className="btn btn-dark button" data-bs-toggle="button">
        All
      </button>
      <button type="button" name='nature' onClick={handleClick} className="btn btn-dark button" data-bs-toggle="button">
        Nature
      </button>
      <button type="button" name='cities' onClick={handleClick} className="btn btn-dark button" data-bs-toggle="button">
        Cities
      </button>

      <div className="container">
        <div className="row">
          {gallery.map((item, index) => (
            <div className="col-md-3">
              <Image key={index} src={item.original} city={item.title} des={item.despt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
