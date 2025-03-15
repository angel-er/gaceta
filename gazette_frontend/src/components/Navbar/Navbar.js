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
  Signature,
  Submenu,
  SubmenuItem,
  SubMenuLink,
} from "./Navbar.styles";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen] = useState(false);
  return (
    <Nav>
      <Image>
        <img src={ImageLogo} alt="" />
      </Image>
      <Signature href="">
        GAM<span>Comarapa</span>
      </Signature>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
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
              <SubMenuLink to="/biography/history">Historia</SubMenuLink>
            </SubmenuItem>
            <SubmenuItem>
              <SubMenuLink to="/biography/address">Organigrama</SubMenuLink>
            </SubmenuItem>
          </Submenu>
        </MenuItem>
        <MenuItem>
          <MenuLink to="">
            Institución{" "}
            <ArrowIcon
              isSubmenuOpen={isSubmenuOpen}
              className="fas fa-chevron-down"
            />
          </MenuLink>
          <Submenu className="submenu" isSubmenuOpen={isSubmenuOpen}>
            <SubmenuItem>
              <SubMenuLink to="/mision">Misión</SubMenuLink>
            </SubmenuItem>
            <SubmenuItem>
              <SubMenuLink to="/vision">Visión</SubMenuLink>
            </SubmenuItem>
            <SubmenuItem>
              <SubMenuLink to="/tramites">Tramites Municipales</SubMenuLink>
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
              <SubMenuLink to="/gazette/decretos">Decretos</SubMenuLink>
            </SubmenuItem>
            <SubmenuItem>
              <SubMenuLink to="/gazette/leyes">Leyes</SubMenuLink>
            </SubmenuItem>
            <SubmenuItem>
              <SubMenuLink to="/gazette/resoluciones">Resoluciones</SubMenuLink>
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
