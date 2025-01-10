import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
// Assets
import CloseIcon from "../../assets/svg/Icons/CloseIcon";
import LogoIconWhite from "../../assets/svg/Logos/logoWhite.svg";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate bg-purple " sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <img src={LogoIconWhite} alt=""/>
        </div>
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
          <a href="/" className="cl-white " style={{ padding: "10px 15px" }}>         
            HOME
          </a>
        </li>
        <li className="semiBold font15 pointer">
          <a href="/" className="cl-white " style={{ padding: "10px 15px" }}>         
            ABOUT
          </a>
        </li>
        <li className="semiBold font15 pointer">
          <a href="/" className="cl-white " style={{ padding: "10px 15px" }}>         
            CONTACT
          </a>
        </li>
        {/* <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            // activeClass="active"
            className="cl-white "
            style={{ padding: "10px 15px" }}
            to="aboutus"
            spy={true}
            smooth={true}
            offset={-60}
          >
            ABOUT US
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            // activeClass="active"
            className="cl-white "
            style={{ padding: "10px 15px" }}
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
          >
           CONTACT 
          </Link> 
        </li> */}
        {/* <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="cl-white "
            style={{ padding: "10px 15px" }}
            to="blog"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Blog
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="cl-white "
            style={{ padding: "10px 15px" }}
            to="pricing"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Pricing
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="cl-white "
            style={{ padding: "10px 15px" }}
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Contact
          </Link>
        </li> */}
      </UlStyle>
      <UlStyle className="flexSpaceCenter">
        <li className="semiBold font15 pointer">
          <a href="/" className="radius5 cl-purple bg-white "  style={{ padding:" 10px 20px" }} >
            LOG IN
          </a>
        </li>
        <li className="semiBold font15 pointer flexCenter">
          <a href="/" className="radius5 cl-purple  bg-white " style={{ padding: "10px 15px" }}>
            SIGN UP
          </a>
        </li>
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
