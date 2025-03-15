import {
  ContainerInit,
  GridContainer,
  GridOne,
  GridThree,
  GridTwo,
} from "./PageInit.styles";
import Weather from "./WeatherWidget/WeatherWidget";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Grid from "@mui/material/Grid2";
import CardCustom from "#components/Card/Card.js";
import BoxCustom from "#components/Box/Box.js";
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
            <iframe
              // src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGobiernoAutonomoMunicipalDeMairana&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100090337929150&tabs=timeline&width=270&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
              width="100%"
              height="500"
              //   style="border:none;overflow:hidden"
              style={{ display: "block", width: "100%" }}
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1898.1939121687824!2d-64.53015266320654!3d-17.91405637758016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fab11da7f8a2e5%3A0xf65069af757daae0!2sGobierno%20Aut%C3%B3nomo%20Municipal%20De%20Comarapa!5e0!3m2!1ses-419!2sbo!4v1699891444580!5m2!1ses-419!2sbo"
                width="270"
                height="400"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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
          {data.map((data, idx) => (
            <Accordion
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
        </GridTwo>
        <GridThree>
          <BoxCustom>
            <Weather />
          </BoxCustom>
          <BoxCustom>
            <CardCustom title="Encuéntranos">
              <div>
                <Typography variant="p">
                  {" "}
                  <strong>Dirección</strong> <br />
                  Plaza 11 de junio
                </Typography>
              </div>
              <div>
                <Typography variant="p">
                  <strong>Horas</strong> <br />
                  Lunes a viernes: de 8:00AM a 6:PM
                </Typography>
              </div>
              <Typography variant="p">
                <strong>Teléfono</strong> <br />
                3-9462021 o 507 00034
              </Typography>
            </CardCustom>
          </BoxCustom>
        </GridThree>
      </GridContainer>
    </ContainerInit>
  );
};

export default Pageinit;
