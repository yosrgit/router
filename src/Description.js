import React from "react";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Description = ({ movieList, match, history }) => {
  let movies = movieList.find((movie) => movie.id === match.params.id);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Movie Informations</Navbar.Brand>
          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>
      <h1>{movies.title}</h1>
      <h2>Description</h2>
      <h3>{movies.description}</h3>
      <iframe
        width="560"
        height="315"
        src={movies.Trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Button onClick={() => history.goBack()} variant="warning">
        back home
      </Button>{" "}
    </div>
  );
};

export default Description;
