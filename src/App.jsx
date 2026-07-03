import { Link, Route, Routes } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Home } from "./pages/Home.jsx";
import { Random } from "./pages/Random.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" expand="md">
        <Container>
          <Navbar.Brand>Py React</Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Item>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/random">
                  Random
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/random" element={<Random />} />
          <Route path="*" element={<h1>Not Found Page 404</h1>} />
        </Routes>
      </Container>
    </>
  );
}
