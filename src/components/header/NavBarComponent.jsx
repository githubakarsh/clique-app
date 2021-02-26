import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";


const NavBarComponent = ({

}) => {
    return (<Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
    <Navbar.Brand href="#home">Clique</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#to do">To Do</Nav.Link>
      <Nav.Link href="#address-book">Address Book</Nav.Link>
      <Nav.Link href="#upcoming-events">Upcoming Events</Nav.Link>
      <Nav.Link href="#spendings">Spendings</Nav.Link>
    </Nav>

    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
    </Navbar.Collapse>
  </Navbar>);
}

export default NavBarComponent;
