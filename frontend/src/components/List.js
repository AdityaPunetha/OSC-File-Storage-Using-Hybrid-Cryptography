import React from "react";
import { Button, Card } from "react-bootstrap";

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
    <div>
      <Card>
        <Card.Body>
          <Doc name={"First doc"} />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Doc name={"Second doc"} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default List;
