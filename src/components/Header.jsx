import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav , Form , Button } from 'react-bootstrap';

const Header = () => {
  const handleLogout =  () => {
    return(
      localStorage.clear()
    )
  };

  const userName = localStorage.getItem('username')

  return (
    
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Welcome back <span>{userName}</span> </Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
    </Nav>
    <Form className="d-flex" onSubmit={handleLogout}>
      <Button type="submit" variant="outline-warning">Log Out</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

  );
};

export default Header;