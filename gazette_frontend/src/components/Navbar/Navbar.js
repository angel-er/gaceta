import { useState } from "react";

import ImageLogo from "#assets/sello-logo.png";
import { PATH_PAGE_PUBLIC } from "#routes/statics.js";
import {
  ArrowIcon,
  Hamburger,
  Image,
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
      <Signature href={PATH_PAGE_PUBLIC.root}>
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
              style={styles.icon}
            />
          </MenuLink>
          <Submenu className="submenu" isSubmenuOpen={isSubmenuOpen}>
            <SubmenuItem>
              <SubMenuLink to="/history">Historia</SubMenuLink>
            </SubmenuItem>
            <SubmenuItem>
              <SubMenuLink to="/address">Organigrama</SubMenuLink>
            </SubmenuItem>
          </Submenu>
        </MenuItem>
        <MenuItem>
          <MenuLink to="">
            Institución{" "}
            <ArrowIcon
              isSubmenuOpen={isSubmenuOpen}
              className="fas fa-chevron-down"
              style={styles.icon}
            />
          </MenuLink>
          <Submenu className="submenu" isSubmenuOpen={isSubmenuOpen}>
            <SubmenuItem>
              <SubMenuLink to={PATH_PAGE_PUBLIC.institution.mission}>
                Misión
              </SubMenuLink>
            </SubmenuItem>
            <SubmenuItem>
              <SubMenuLink to={PATH_PAGE_PUBLIC.institution.vision}>
                Visión
              </SubMenuLink>
            </SubmenuItem>
            <SubmenuItem>
              <SubMenuLink to={PATH_PAGE_PUBLIC.institution.procedures}>
                Tramites Municipales
              </SubMenuLink>
            </SubmenuItem>
          </Submenu>
        </MenuItem>
        <MenuItem>
          <MenuLink to="">
            Gaceta Municipal{" "}
            <ArrowIcon
              isSubmenuOpen={isSubmenuOpen}
              className="fas fa-chevron-down"
              style={styles.icon}
            />
          </MenuLink>
          <Submenu className="submenu" isSubmenuOpen={isSubmenuOpen}>
            <SubmenuItem>
              <SubMenuLink to={PATH_PAGE_PUBLIC.gazette.resolutions}>
                Resoluciones
              </SubMenuLink>
            </SubmenuItem>
            <SubmenuItem>
              <SubMenuLink to={PATH_PAGE_PUBLIC.gazette.municipalDecrees}>
                Decretos
              </SubMenuLink>
            </SubmenuItem>
            <SubmenuItem>
              <SubMenuLink to={PATH_PAGE_PUBLIC.gazette.municipalLows}>
                Leyes
              </SubMenuLink>
            </SubmenuItem>
            <SubmenuItem>
              <SubMenuLink to={PATH_PAGE_PUBLIC.gazette.municipalOrdinances}>
                Ordenanzas municipales
              </SubMenuLink>
            </SubmenuItem>
          </Submenu>
        </MenuItem>
        <MenuItem>
          <MenuLink to="">
            Ejecutivo
            <ArrowIcon
              isSubmenuOpen={isSubmenuOpen}
              className="fas fa-chevron-down"
              style={styles.icon}
            />
          </MenuLink>
          <Submenu className="submenu" isSubmenuOpen={isSubmenuOpen}>
            <SubmenuItem>
              <SubMenuLink to={PATH_PAGE_PUBLIC.executive.humanDevelopment}>
                Desarrollo Humano y Social
              </SubMenuLink>
            </SubmenuItem>
            <SubmenuItem>
              <SubMenuLink
                to={PATH_PAGE_PUBLIC.executive.productiveDevelopment}
              >
                Desarrollo Productivo
              </SubMenuLink>
            </SubmenuItem>
            <SubmenuItem>
              <SubMenuLink to={PATH_PAGE_PUBLIC.executive.publicWorks}>
                Obras Públicas
              </SubMenuLink>
            </SubmenuItem>
            <SubmenuItem>
              <SubMenuLink to={PATH_PAGE_PUBLIC.executive.finance}>
                Finanzas
              </SubMenuLink>
            </SubmenuItem>
            <SubmenuItem>
              <SubMenuLink to={PATH_PAGE_PUBLIC.executive.collections}>
                Recaudaciones
              </SubMenuLink>
            </SubmenuItem>
            <SubmenuItem>
              <SubMenuLink to={PATH_PAGE_PUBLIC.executive.intendance}>
                Intendencia
              </SubMenuLink>
            </SubmenuItem>
            <SubmenuItem>
              <SubMenuLink to={PATH_PAGE_PUBLIC.executive.legalAdvice}>
                Asesoria Legal
              </SubMenuLink>
            </SubmenuItem>
          </Submenu>
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

const styles = {
  icon: { marginLeft: ".5em" },
};

export default Navbar;
