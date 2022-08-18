import React from "react";
import List from "../components/List";

function ViewPage() {
  return (
    <div className="my__view">
      <div className="container">
        <h1 className="text-center mb-4">View Page</h1>
      </div>
      <div>
        <List />
      </div>
    </div>
  );
}

export default ViewPage;
