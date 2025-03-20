import { Box, Typography } from "@mui/material";
import { Article, Container, Figure, Title } from "./Mission.styles";

import ImageMission from "#assets/mission.png";
import ContainerCustom from "#components/Container/Container.js";

const Mission = () => {
  return (
    <ContainerCustom title="Misión">
      <Article>
        <Typography
          component="p"
          style={{ ...styles.typography, padding: "0 8%" }}
        >
          La misión institucional del Gobierno Autónomo Municipal de Comarapa es
          contribuir a la satisfacción de las necesidades de los habitantes del
          municipio mediante la gestión participativa y equitativa, enfocada en
          el género y la diversidad generacional, del desarrollo integral y
          sostenible del municipio. Como entidad pública, democrática y
          autónoma, Comarapa trabaja en armonía con la Constitución Política del
          Estado Plurinacional para garantizar la integración y participación
          corresponsable de todos los habitantes, a fin de promover una vocación
          productiva, agroindustrial, integral y sostenible que mejore la
          calidad de vida de la comunidad rural y urbana, respetando los
          lineamientos constitucionales en cuanto al manejo, uso y
          aprovechamiento de los recursos naturales.
        </Typography>
        <Figure>
          <Box component="img" src={ImageMission} sx={{ width: "100%" }} />
        </Figure>
      </Article>
    </ContainerCustom>
  );
};

const styles = {
  typography: {
    fontFamily: "Open Sans, Arial",
    fontWeight: 400,
  },
};

export default Mission;
