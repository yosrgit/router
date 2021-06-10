import "./App.css";
import React, { useState } from "react";
import MovieList from "./MovieList";
import { Navbar,Container} from "react-bootstrap";
import Add from "./Add";
import Filter from "./Filter";
import 'bootstrap/dist/css/bootstrap.min.css';
import rout from "react-router-dom"

/*movies*/
function App({movieList,setMovieList}) {
 


  const [search, setSearch] = useState("");
  const [rate, setRating] = useState(0);

  const handleTitleFilterChange = (value)=>setSearch(value)
  const handleRateFilterChange = (value)=>setRating(value)
  const movieAdd = (id,title,posterUrl,Description,rating) =>
    setMovieList([...movieList, {id, title,posterUrl,Description ,rating }]);
  
  return (
    <div className="App">

    
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><h1>Movie App</h1> </Navbar.Brand>
  
     
      <Filter handleTitleFilterChange={handleTitleFilterChange} handleRateFilterChange={handleRateFilterChange}></Filter>

    

    </Container>
 
    
    
    </Navbar>
  
<div className="add">
      <span className="adding"></span> <Add movieAdd={movieAdd} /></div>
      <MovieList movieList={movieList} />
    </div>
  );
}

export default App;