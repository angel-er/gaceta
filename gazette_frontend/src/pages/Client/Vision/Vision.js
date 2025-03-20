import { Box, Typography } from "@mui/material";
import { Article, Container, Figure, Title } from "./Vision.styles";

import ImageVision from "#assets/vision.png";
import ContainerCustom from "#components/Container/Container.js";

const Vision = () => {
  return (
    <ContainerCustom title="Visión">
      <Article>
        <Typography
          component="p"
          style={{ ...styles.typography, padding: "0 8%" }}
        >
          La visión institucional del Gobierno Autónomo Municipal de Comarapa es
          alcanzar un municipio productivo y competitivo, basado en un
          desarrollo integral, equitativo y sostenible, sin discriminación, que
          promueva la participación activa, coordinada y articulada de los
          actores sociales e instituciones y que garantice a todos los
          ciudadanos y ciudadanas condiciones dignas para vivir. Asimismo,
          Comarapa aspira a convertirse en un municipio autónomo, con capacidad
          competitiva en desarrollo integral y sostenible, que cuente con alto
          valor social y una vocación productiva, agroindustrial, respetuosa con
          la Madre Tierra y con el talento humano trascendental de la autonomía
          municipal, y que logre positivamente la calidad de vida de sus
          habitantes en complementariedad y reciprocidad con la Madre Tierra.
        </Typography>
        <Figure>
          <Box component="img" src={ImageVision} sx={{ width: "100%" }} />
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

export default Vision;
