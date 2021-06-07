import "./App.css";
import React, { useState } from "react";
import {v4 as uuidv4} from "uuid"
import MovieList from "./MovieList";
import { Navbar,Container} from "react-bootstrap";
import Add from "./Add";
import Filter from "./Filter";
import 'bootstrap/dist/css/bootstrap.min.css';

/*movies*/
function App() {
  const data = [{
    
    id :uuidv4(),
    title : "ARMY OF THE DEAD",
    description : "From filmmaker Zack Snyder (300, Zack Snyders Justice League), ARMY OF THE DEAD takes place following a zombie outbreak that has left Las Vegas in ruins and walled off from the rest of the world.",
    posterUrl : "https://resizing.flixster.com/xsPEt9QM_m9JjrmuhaTvwH1ixnw=/206x305/v2/https://resizing.flixster.com/f1ImZ4ICkVRkDq5v6mQoEDqeZWk=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2YyN2RiOGJlLTgyYzMtNDI0OS1iNDJiLTlmZWQ3OWNmNjEwOS5qcGc=",
    rating : 4 ,
  },
  {
  

    id :uuidv4(),
    title : "THE WOMAN IN THE WINDOW",
    description : 
    "Anna Fox (Amy Adams) is an agoraphobic child psychologist who finds herself keeping tabs on the picture perfect family across the street through the windows of her New York City brownstone.",
    posterUrl : "https://resizing.flixster.com/1Z0kYrxvIHlAaIO3gKBOQ86QPgg=/180x267/v1.bTsxMzc2Nzc1MTtqOzE4ODM1OzIwNDg7MTUwMDsyMjIy",
    rating : 4 ,
  
  },
  {
    
    id :uuidv4(),
    title : "THOSE WHO WISH ME DEAD",
    description : "A smoke jumper and a traumatized boy fight for their lives as two relentless assassins pursue them through a raging fire in the Montana wilderness.",
    posterUrl : 'https://resizing.flixster.com/H2sQ9PsmYxSqBJIoTJCuXogfXJQ=/180x267/v1.bTsxMzc2NTgwNTtqOzE4ODY5OzIwNDg7Mjc2NDs0MDk2',
    rating : 4 ,
    
  },
  
  {
    
    id :uuidv4(),
    title : "DREAM HORSE",
    description : 'The film tells the inspiring true story of Dream Alliance, an unlikely race horse bred by small town bartender',
    posterUrl : "https://resizing.flixster.com/NUYiStaj9lZzY6gY1_3jK_F9F78=/206x305/v2/https://resizing.flixster.com/9Tez1OEwNpfC6h3WOR_AoH7Qo6w=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzg4MTA1YzEwLTc5M2UtNDg5ZC1iODE3LWEwN2FkZmQ2OGM0NC53ZWJw",
    rating : 4 ,
  },
  {
    id : uuidv4(),
    title : "PLAN B",
    description : "After a regrettable sexual encounter, a straight-laced student and her best friend have 24 hours to hunt down a Plan B pill in South Dakota.",
    posterUrl : "https://resizing.flixster.com/bwpHQQpbiyLPoLuYDq3eFf1ZSN4=/206x305/v2/https://resizing.flixster.com/mhi05m3EIah_L7jpl6p_dF7Ybgw=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2JjZWY2MDQ5LWM3OGItNDkxZC1hOTJhLWYzNGE1ZmMxOGMyYy5qcGc=",
    rating : 5 ,
    
  },
  {
    id :uuidv4(),
    title : "WRATH OF MAN",
    description : "Mysterious and wild-eyed, a new security guard for a cash truck surprises his co-workers when he unleashes precision skills during a heist.",
    posterUrl : "https://resizing.flixster.com/gE4VrY_Z1D1lhR9Fzgp1pvl_c3E=/206x305/v2/https://resizing.flixster.com/MWjk1X0KO3aApl-fS8W5lY1xwLc=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzU2NzVmMDFiLTI5MmEtNGQ0OS1iYWJhLTA2Yzc1YmIxMjE2OC5qcGc=",
    rating : 4 ,
    
  },
];







  const [movieList, setMovieList] = useState(data);
  const [search, setSearch] = useState("");
  const [rate, setRating] = useState(0);

  const handleTitleFilterChange = (value)=>setSearch(value)
  const handleRateFilterChange = (value)=>setRating(value)
  const movieAdd = (id,title,posterUrl,description,rating) =>
    setMovieList([...movieList, {id, title,posterUrl,description ,rating }]);
  
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