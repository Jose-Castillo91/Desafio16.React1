import React from "react";
import { Link } from "react-router";
import Button from "react-bootstrap/Button";

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <h3>Page Not Found</h3>
      <p>The page you are looking for is not avaible</p>
      <Button as={Link} to="/" variant="secondary" size="lg">
        Home
      </Button>
    </div>
  );
}

export default NotFound;
