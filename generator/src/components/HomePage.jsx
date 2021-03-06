import React, { useState } from "react";

import { Button, Card, CardColumns, Modal } from "react-bootstrap";

import Bias from "./Bias.jsx";

import { Link } from "react-router-dom";

const listOfGenerators = [
  {
    name: "Number",
    link: "/numbers",
    icon: "\u{1F522}",
    description: "Generate a set of numbers",
  },
  {
    name: "Color",
    link: "/colors",
    icon: "\u{1F3A8}",
    description: "Generate a color palette",
  },
  {
    name: "Element",
    link: "/sequences/element",
    icon: "\u{1F3B2}",
    description: "Generate a random element from a list",
  },
  {
    name: "Shuffle",
    link: "/sequences/randomize",
    icon: "\u{1F500}",
    description: "Get a random element from a list",
  },
  {
    name: "String",
    link: "/words/string",
    icon: "\u{1F4AC}",
    description: "Generate a series of alphanumeric strings",
  },
  {
    name: "Name",
    link: "/words/name",
    icon: "\u{1F603}",
    description: "Generate a name",
  },
  {
    name: "Chord Progression",
    link: "/music",
    icon: "\u{1F3B5}",
    description: "Generate a random chord progression in any key",
  },
  {
    name: "Topological Map",
    link: "/map",
    icon: "\u{1F5FA}",
    description: "Generate a random topological map",
  },
  {
    name: "Dungeon",
    link: "/dungeon",
    icon: "\u{1F480}",
    description: "Generate a random dungeon for RPGs",
  },
];

const GeneratorCard = (input) => {
  let item = input.obj;

  return (
    <Card
      as={Link}
      to={item.link}
      style={{ textDecoration: "none" }}
      className="home-card"
      border="secondary"
      bg="dark"
    >
      <Card.Header>
        <Card.Title>
          {item.name} Generator{" "}
          <span role="img" aria-label="icon">
            {item.icon}
          </span>
        </Card.Title>
      </Card.Header>
      <Card.Body>{item.description}</Card.Body>
      <Button variant="secondary" id="home-card-footer">
        Goto Page
      </Button>
    </Card>
  );
};

const HomePage = () => {
  const [showBias, setShowBias] = useState(false);

  return (
    <>
      <h1>Welcome to the Generator Website!</h1>
      <p className="description-text">
        Feel free to try out the various generators
      </p>
      <div className="card-container">
        <CardColumns>
          {listOfGenerators.map((gen) => (
            <GeneratorCard obj={gen} key={gen.name} />
          ))}
        </CardColumns>
      </div>
      <br />
      <Button variant="secondary" onClick={() => setShowBias(true)}>
        Show Bias
      </Button>
      <br />

      <Modal
        show={showBias}
        onHide={() => setShowBias(false)}
        size="lg"
        centered
      >
        <Modal.Header>
          <Modal.Title>Bias:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Bias />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowBias(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HomePage;
