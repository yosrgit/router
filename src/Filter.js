import React from 'react'
import { Form, FormControl } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'
import "./App.css";
const Filter = ({handleTitleFilterChange,handleRateFilterChange}) => {
    return (
        <div className="filter" Style={{display:'inline' }}>
          
        
    <Form inline >
      <FormControl type="text" placeholder="Search by Name" className="mr-sm-2"  
      onChange={(search) => handleTitleFilterChange(search.target.value)}/>   
      <br/><ReactStars
    count={5}
    onChange={handleRateFilterChange}
    size={24}
    isHalf={false}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"



  />
      </Form>
        </div>
      
    )
}

export default Filter