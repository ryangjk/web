import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Betterboxd</Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/browse">Browse</Nav.Link>
          <Nav.Link as={Link} to="/watchlist">Watchlist</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}