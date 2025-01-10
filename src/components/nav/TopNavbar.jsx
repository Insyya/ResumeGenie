import React, { useEffect, useState } from "react";
import styled from "styled-components";
// Components
import Sidebar from "../nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIconMulti from "../../assets/svg/Logos/LogoMulti.svg";
import BurgerIcon from "../../assets/svg/Icons/BurgerIcon";
// import { Link } from "react-router-dom";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate " style={y > 100 ? { height: "60px" } : { height: "90px" }}>
        <NavInner className="container flexSpaceCenter">
          <a className="pointer flexNullCenter" href="/" smooth={true}>
            <img  src={LogoIconMulti} alt=""/>
            <h1 style={{ marginLeft: "15px" }} className=" cl-purple font26  fontfamily-Pacifico">
            Resume Genie
            </h1>
          </a>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapperRight className="flexNullCenter ">
          <li className="semiBold font15 pointer cl-black">
              <a style={{ padding: "10px 15px" }} href="/home" className="cl-black"
              //  spy={true} smooth={true} offset={-80} activeClass="active"
               >

                
                HOME
              </a>
            </li>
            <li className="semiBold font15 pointer cl-black">
              <a activeClass="active" style={{ padding: "10px 15px" }} href="/"  className="cl-black"
              // spy={true} smooth={true} offset={-80}
              >
                ABOUT
              </a>
            </li>
            <li className="semiBold font15 pointer cl-black">
              <a activeClass="active" style={{ padding: "10px 15px" }} href="/" className="cl-black" 
              // spy={true} smooth={true} offset={-80}
              >
                CONTACT
              </a>
            </li>
            {/* <li className="semiBold font15 pointer">
              <a activeClass="active" style={{ padding: "10px 15px" }} to="blog" spy={true} smooth={true} offset={-80}>
                Blog
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a activeClass="active" style={{ padding: "10px 15px" }} to="pricing" spy={true} smooth={true} offset={-80}>
                Pricing
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a activeClass="active" style={{ padding: "10px 15px" }} to="contact" spy={true} smooth={true} offset={-80}>
                Contact
              </a>
            </li> */}
            <li className="semiBold font15 pointer cl-white box-shadow">
              <a href="/" className="radius5 bg-purple cl-white" style={{  padding: "10px 20px"  }}>
              LOG IN 
              </a>
            </li>
            <li className="semiBold font15 pointer  box-shadow  ">
              <a href="/" className="radius5 bg-purple cl-white" style={{ padding: "10px 20px" }}>
              SIGN UP
              </a>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapperRight = styled.ul`
 gap:1rem;
  @media (max-width: 760px) {
    display: none;
  }
`;


