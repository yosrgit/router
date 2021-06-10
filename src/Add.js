import React, { useState } from "react";
import { Button, Modal,Form } from "react-bootstrap";

const Add = ({movieAdd}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const [title, setTitle] = useState('');
const [posterUrl, setposterUrl] = useState('');
const [rating, setRating] = useState(0);
const [Description, setDescription] = useState('');

  return (
    <div>
      <Button variant="warning" onClick={handleShow}>
         Add a Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control placeholder="Title" onChange={(title)=>setTitle(title.target.value)}/>
        <Form.Control placeholder="image source" onChange={(e)=>setposterUrl(e.target.value)}/>
        <Form.Control as="textarea" rows={3} placeholder="description" onChange={(e)=>setDescription(e.target.value)}/>
        <Form.Control placeholder="rating" onChange={(e)=>setRating(e.target.value)}/>
       
        

        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={()=>{handleClose()
        movieAdd(title,posterUrl,Description,rating)}}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
  );
};

export default Add;