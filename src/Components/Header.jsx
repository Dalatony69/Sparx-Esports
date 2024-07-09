import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header(){
    return(
        <Navbar bg="dark" data-bs-theme="dark">
            <Container className="d-flex">
                <Navbar.Brand>Sparx</Navbar.Brand>
                <Navbar.Text>Signed in as : <span>Username</span> </Navbar.Text>
            </Container>
        </Navbar>
    );
}
export default Header;