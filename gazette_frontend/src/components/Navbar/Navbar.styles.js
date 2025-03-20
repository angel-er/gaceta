import styled from "styled-components";
import { Link } from "react-router-dom";

export const Signature = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.7rem;

  span {
    font-weight: 300;
    font-size: 1.5rem;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  background-color: #333;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const Image = styled.a`
  display: none;
  img {
    height: 80px;
    padding: 0 2rem;
  }
  @media (max-width: 768px) {
    display: inline-block;
  }
`;

export const Menu = styled.ul`
  display: flex;
  position: relative;
  font-size: 1em;
  font-weight: 500;
  list-style: none;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  z-index: 200;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "auto" : 0)};
    transition: max-height 0.3s ease-in;
    display: ${({ isOpen }) => (isOpen ? "flex" : "block")};
  }
`;

export const MenuItem = styled.li`
  position: relative;
  border-top: solid 6px rgb(244, 160, 4);

  &:hover .submenu {
    display: block;
  }
`;

export const MenuLink = styled(Link)`
  padding: 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #fff;
  transition: all 0.4s ease-in;
  display: block;

  &:hover {
    color: #ffffff;
    background-color: rgb(65, 64, 64);
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Submenu = styled.ul`
  display: none;
  /* opacity: 0; */
  position: absolute;
  top: 100%;
  left: 100;
  background-color: #333333;
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 150px;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;

  @media (max-width: 768px) {
    position: static;
    background-color: #00796b; /* Fondo verde para móviles */
  }
`;

export const SubmenuItem = styled.li`
  /* padding: 0.5rem 1rem; */
`;

export const SubMenuLink = styled(Link)`
  padding: 1rem;
  cursor: pointer;
  text-align: left;
  text-decoration: none;
  color: #fff;
  transition: all 0.4s ease-in;
  font-size: 0.7rem;
  display: block;

  &:hover {
    color: #ffffff;
    background-color: rgb(65, 64, 64);
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
    padding: 0 2rem 0;
  }
`;

export const ArrowIcon = styled.i`
  transition: transform 0.3s ease-in-out;
  transform: ${({ isSubmenuOpen }) =>
    isSubmenuOpen ? "rotate(180deg)" : "rotate(0deg)"};
`;
