import { Container, Nav, Button, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CartIcon } from "./svg";

export function Navbar() {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button>
          <CartIcon />
        </Button>
      </Container>
    </NavbarBs>
  );
}
