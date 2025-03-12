import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled.a`
  /* padding: 1rem 0; */
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
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
  /* justify-content: space-between; */
  /* align-items: center; */
  position: relative;
  font-weight: 800;
  list-style: none;
  display: flex;
  /* gap: 1.5rem; */
  margin: 0;
  padding: 0;

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
  font-size: 1rem;
  position: relative;

  &:hover .submenu {
    display: block;
  }
`;

export const MenuLink = styled(Link)`
  padding: 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #67bc98;
  transition: all 0.4s ease-in;
  font-size: 0.9rem;
  display: block;
  /* width: 100%; */

  /* &::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 0;
    height: 2px;
    background: #67bc98;
    transition: all.3s;
  } */

  &:hover {
    color: #ffffff;
    /* font-size: 1rem; */
    background-color: #67bc98;
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
  left: 0;
  background-color: #ffffff;
  /*background-color: #00695c; /* Fondo verde más claro */
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 150px;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;

  @media (max-width: 768px) {
    position: static;
    background-color: #00796b; /* Fondo verde para móviles */
    /* max-height: ${({ isSubmenuOpen }) => (isSubmenuOpen ? "200px" : "0")};
    opacity: ${({ isSubmenuOpen }) => (isSubmenuOpen ? "1" : "0")}; */
  }
`;

export const SubmenuItem = styled.li`
  /* padding: 0.5rem 1rem; */
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
