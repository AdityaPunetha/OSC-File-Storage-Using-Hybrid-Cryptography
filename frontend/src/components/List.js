import React from "react";
import { Button, Card, Form } from "react-bootstrap";

function Doc({ name }) {
  return (
    <div className="doclist">
      <span>{name} </span>
      <div>
        <Button className="mx-2" variant="outline-success" onClick={() => {}}>
          View
        </Button>
        <Button variant="outline-danger" onClick={() => {}}>
          ✕
        </Button>
      </div>
    </div>
  );
}

function List() {
  return (
    <Card>
      <Card.Body>
        <Doc name={"First doc"} />
      </Card.Body>
    </Card>
  );
}

export default List;
