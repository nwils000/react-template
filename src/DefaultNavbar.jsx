import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};

export default function DefaultNavbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="position-fixed w-100">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/about" style={linkStyle}>
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact" style={linkStyle}>
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
