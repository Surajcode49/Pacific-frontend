import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";

const Headers = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <div>
            <img
              src="/pacific.log.jpeg"
              className="imggg"
              style={{ width: 50, marginRight: "5px" }}
              alt=""
            />
            <NavLink
              to="/"
              className=" text-light text-decoration-none"
            ></NavLink>
          </div>

          <Nav className="Log">
            <NavLink
              to="https://overseaspacific.com/"
              className="mt-3 mx-2 text-light text-decoration-none"
            >
              Logout
              <IoMdLogOut />
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Headers;
