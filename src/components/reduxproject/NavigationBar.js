// import { iteratorSymbol } from "immer/dist/internal";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

const NavigationBar = () => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <div>
      <Container>
        <Navbar bg="primary" expand="lg">
          <Navbar.Brand >Apna-Redux-Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>Cart</Nav.Link>
              </LinkContainer>
            </Nav>
            <span className="cartCount">Cart Items :{cartItems.length}</span>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};
export default NavigationBar;
