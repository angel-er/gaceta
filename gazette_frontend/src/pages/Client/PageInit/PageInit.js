import { useState } from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Divider } from "@mui/material";

import {
  ContainerInit,
  GridContainer,
  GridOne,
  GridThree,
  GridTwo,
  SymbolContainer,
  TagContent,
} from "./PageInit.styles";
import Weather from "#components/Weather/Weather.js";
import CardCustom from "#components/Card/Card.js";
import BoxCustom from "#components/Box/Box.js";
import Maps from "#components/Maps/Maps.js";
import SocialMediaIframe from "#components/SocialMedia/SocialMedia.js";
import Tag from "#components/Tag/tag.js";
import ImgEscudo from "#assets/escudo.png";
import ImgBandera from "#assets/bandera.png";
import Biography from "./Biography/Biography";
// import History from "./History/History";

const data = [
  {
    title: "Fundación",
    description:
      "Fundada por Don Pedro Lucio Escalante y Mendoza, por orden del Virrey del Perú, el 11 de junio de 1615 sobre los restos de una antigua fortaleza incaica, con el nombre de Santa María de la Guardia y Mendoza.",
  },
  {
    title: "Creación",
    description:
      "Fue creada como sección municipal según la Ley de fecha 4 de noviembre 1960",
  },
  {
    title: "Economia",
    description:
      "Se dedica principalmente a la producción agrícola, debido a que posee tierras aptas para el cultivo produciendo preponderantemente el maíz y en menor proporción el frejol, girasol, yuca, maní y hortalizas. En cuanto a la producción pecuaria se dedican a la cría del ganado bovino de manera extensiva, mientras que en menor proporción al ganado porcino. Su economía está basada en la actividad agropecuaria. Comarapa, la tierra que se convirtió en la capital de la frutilla, mediante la tecnificación que permitió duplicar y hasta triplicar la producción, mejorar los ingresos de los productores y ayudó a reducir el trabajo infantil en el municipio. Se produce más de 12 variedades de frutilla, entre las que se destacan camarosa, monterrey, camino real y sweet charlie.",
  },
];

const title = "Acerca de este sitio";
const description =
  "Este es un buen lugar para informarse de noticas, proyectos y acontecimientos importantes que sucedan en nuestro municipio.";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  color: "#444444",
  // fontFamily: "Open Sans, Arial, sans-serif",
  textAlign: "justify",
  // wordWrap: "inherit",
  lineHeight: "1.75em",
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "#000" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  padding: "15px",
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Pageinit = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <ContainerInit>
      <div>
        <img src={""} alt="" />
      </div>
      <GridContainer>
        <GridOne>
          <BoxCustom>
            <SocialMediaIframe
              url={process.env.REACT_APP_API_FACEBOOK}
              id="frame-facebook"
              style={{
                display: "block",
                // width: "100%",
                border: "none",
                overflow: "hidden",
              }}
            />
          </BoxCustom>
          <BoxCustom>
            <CardCustom title={title}>
              <Typography
                variant="p"
                style={{
                  lineHeight: "1.5em",
                  fontSize: "0.9375em",
                }}
              >
                {description}
              </Typography>
            </CardCustom>
          </BoxCustom>
          <BoxCustom>
            <CardCustom title="Ubicación">
              <Maps
                style={{ border: 0 }}
                url={process.env.REACT_APP_API_MAPS}
                id="frame-map"
              />
            </CardCustom>
          </BoxCustom>
        </GridOne>
        <GridTwo>
          <Typography
            variant="h1"
            sx={{
              fontSize: "2.25em",
              marginBottom: "2.5rem",
              letterSpacing: "-1px",
              fontWeight: 500,
            }}
          >
            Gobierno Autonomo Municipal de Comarapa
          </Typography>
          {/* <History data={data} /> */}
          {data.map((data, idx) => (
            <Accordion
              key={idx}
              expanded={expanded === `panel${idx + 1}`}
              onChange={handleChange(`panel${idx + 1}`)}
            >
              <AccordionSummary
                aria-controls={`panel${idx}d-content`}
                id={`panel${idx}d-header`}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "1.5rem",
                  }}
                  component="span"
                >
                  {data.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="p">{data.description}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
          <Box sx={{ marginBottom: "2em" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "2em",
                textAlign: "center",
                fontWeight: 600,
                lineHeight: 1.3,
                marginTop: "2em",
              }}
            >
              Símbolos de COMARAPA
            </Typography>
            <Divider sx={{ marginBottom: "1em" }} />
            <SymbolContainer>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box component="img" src={ImgEscudo} />
                <Typography>Escudo</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box component="img" src={ImgBandera} />
                <Typography>Bandera</Typography>
              </Box>
            </SymbolContainer>
          </Box>
          <Box>
            <TagContent>
              <Tag title="Superficie" description="3.271,03 km²" />
            </TagContent>
            <TagContent>
              <Tag
                title="Distancia"
                description="Se encuentra a 245 km de Santa Cruz de la Sierra"
              />
            </TagContent>
            <TagContent>
              <Tag
                title="Población"
                description="17.511 habitantes (Proyección de población del año 2020. Fuente Instituto Nacional de Estadística, Revisión 2014)"
              />
            </TagContent>
          </Box>
          <Biography />
        </GridTwo>
        <GridThree>
          <BoxCustom>
            <Weather />
          </BoxCustom>
          <BoxCustom>
            <CardCustom title="Encuéntranos">
              <Box sx={{ marginBottom: "1em" }}>
                <Tag title="Dirección" description="Plaza 11 de junio" />
              </Box>
              <Box sx={{ marginBottom: "1em" }}>
                <Tag
                  title="Horas"
                  description="Lunes a viernes: de 8:00AM a 6:PM"
                />
              </Box>
              <Tag title="Teléfono" description="3-9462021 o 507 00034" />
            </CardCustom>
          </BoxCustom>
        </GridThree>
      </GridContainer>
    </ContainerInit>
  );
};

export default Pageinit;
