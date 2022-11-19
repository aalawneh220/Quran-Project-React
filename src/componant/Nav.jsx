import { useIsAuthenticated, useSignOut } from "react-auth-kit";

import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import "../index.css";
import logo from "./logo.png";
function NavBar() {
  const isAuth = useIsAuthenticated();
  const signOut = useSignOut();

  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
      <Container>
        <Image style={{ width: "4%" }} src={logo}></Image>
        <Navbar.Toggle
          
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto gap-3 ">
            <NavLink className="nav-link bg-cyan-300 " to="/">
              الصفحة الرئيسية
            </NavLink>
            <NavLink className="nav-link " to="Allquran">
              آلقرآن الكريم
            </NavLink>
            <NavLink className="nav-link " to="About">
              مـن نحـن ؟
            </NavLink>
            <NavLink className="nav-link " to="Contact">
              تـواصـل مـعنا
            </NavLink>
            {!isAuth() ? (
              <NavDropdown title="قائمة" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink className="nav-link link-dark " to="Login">
                    تسجيل دخول
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink className="nav-link link-dark " to="Signup">
                    إنشاء حساب
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavLink
                className="nav-link "
                to="Login"
                onClick={(e) => {
                  signOut();
                }}
              >
                تسجيل الخروج
              </NavLink>
            )}
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
