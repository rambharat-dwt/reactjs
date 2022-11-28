import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Container>
        <Navbar bg="primary" expand="lg">
          <Navbar.Brand href="#home">Apna-Cart</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>products</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};
export default NavigationBar;
