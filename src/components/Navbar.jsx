import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Navbar.css';

const NavigationBar = () => {
    return (
        <Navbar expand="lg" style={{ background: 'linear-gradient(135deg,rgb(150, 181, 199),rgb(246, 217, 248),rgb(150, 181, 199),rgb(246, 217, 248),rgb(150, 181, 199))', fontWeight: "bold" }}>
            <div className="container">
                <Navbar.Brand as={Link} to="/">
                    <i className="fa-solid fa-graduation-cap me-2"></i> SkillHub
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">
                            <i className="fa-solid fa-home me-2"></i> Home
                        </Nav.Link>

                        <Nav.Link as={Link} to="/registration">
                            <i className="fa-solid fa-user-plus me-2"></i> Registration
                        </Nav.Link>
                        {/* Dropdown Menu */}
                        <NavDropdown
                            title={<span><i className="fa-solid fa-book me-2"></i> Courses</span>}
                            id="coursesDropdown"
                        >
                            <NavDropdown.Item as={Link} to="/courses/web-development">Web Development</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/courses/data-science">Data Science</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/courses/ai">Artificial Intelligence</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link as={Link} to="/contact">
                            <i className="fa-solid fa-envelope me-2"></i> Contact Us
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default NavigationBar;