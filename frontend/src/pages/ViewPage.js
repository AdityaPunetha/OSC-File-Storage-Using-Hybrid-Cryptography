import React from "react";
import List from "../components/List";
import { Button, Form } from "react-bootstrap";

function UploadDoc() {
  return (
    <Form onSubmit={() => {}}>
      <Form.Group style={{ padding: "30px" }}>
        <Form.Label>
          <b>Upload Document</b>
        </Form.Label>
        <Form.Control
          style={{ padding: "25px" }}
          type="file"
          className="input"
          // value={value}
          onChange={() => {}}
          // placeholder="Upload Document"
        />
      </Form.Group>

      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
  );
}

function ViewPage() {
  return (
    <div className="my__view">
      <div className="container">
        <h1 className="text-center mb-4">View Page</h1>
        <UploadDoc />
        <List />
      </div>
    </div>
  );
}

export default ViewPage;
