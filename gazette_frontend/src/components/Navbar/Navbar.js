import { useState } from "react";

import ImageLogo from "#assets/sello-logo.png";
import {
  ArrowIcon,
  Hamburger,
  Image,
  Logo,
  Menu,
  MenuItem,
  MenuLink,
  Nav,
  Submenu,
  SubmenuItem,
} from "./Navbar.styles";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen] = useState(false);
  return (
    <Nav>
      <Image>
        <img src={ImageLogo} alt="" />
      </Image>
      <Logo href="">
        MMC<span>Comarapa</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuItem>
          <MenuLink to="/">Inicio</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="">
            Biografia{" "}
            <ArrowIcon
              isSubmenuOpen={isSubmenuOpen}
              className="fas fa-chevron-down"
            />
          </MenuLink>
          <Submenu className="submenu" isSubmenuOpen={isSubmenuOpen}>
            <SubmenuItem>
              <MenuLink to="/biography/history">Historia</MenuLink>
            </SubmenuItem>
            <SubmenuItem>
              <MenuLink to="/biography/address">Organigrama</MenuLink>
            </SubmenuItem>
          </Submenu>
        </MenuItem>
        <MenuItem>
          <MenuLink to="">
            Gaceta Municipal{" "}
            <ArrowIcon
              isSubmenuOpen={isSubmenuOpen}
              className="fas fa-chevron-down"
            />
          </MenuLink>
          <Submenu className="submenu" isSubmenuOpen={isSubmenuOpen}>
            <SubmenuItem>
              <MenuLink to="/gazette/leyes">Leyes</MenuLink>
            </SubmenuItem>
            <SubmenuItem>
              <MenuLink to="/gazette/resoluciones">Resoluciones</MenuLink>
            </SubmenuItem>
          </Submenu>
        </MenuItem>
        <MenuItem>
          <MenuLink to="">Ejecutivo</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/legislative">Legislativo</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/news">Noticias</MenuLink>
        </MenuItem>
      </Menu>
    </Nav>
  );
}

export default Navbar;
