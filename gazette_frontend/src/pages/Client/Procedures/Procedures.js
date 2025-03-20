import { Box, Divider, Typography } from "@mui/material";
import {
  Container,
  ContentImage,
  ContentProcedures,
  Image,
  ProcedureItem,
  Title,
} from "./Procedures.styles";
import ContainerCustom from "#components/Container/Container.js";
import ImgMotocicleta from "#assets/motocicletas.png";
import ImgRadicatoria from "#assets/radicatoria.png";
import ImgVehiculo from "#assets/vehiculo.png";
import ImgDuplicadoPropiedad from "#assets/duplicado_propiedad.png";
import ImgPlanoUbicacion from "#assets/plano_ubicacion.png";
import ImgChangeTransfer from "#assets/cambio_transferencia.png";
import ImgNewLicense from "#assets/new_license.png";
import ImgRenewalLicense from "#assets/renewal_license.png";

const Procedures = () => {
  return (
    <ContainerCustom title="Tramites Municipales">
      <Typography variant="h2" style={styles.typography}>
        Tramites de Movilidades
      </Typography>
      <Divider />
      <ContentProcedures>
        <ProcedureItem>
          <Typography component="p" style={styles.titleProcedure}>
            Inscriptión motocicleta
          </Typography>
          <Image src={ImgMotocicleta} style={styles.image} />
        </ProcedureItem>
        <ProcedureItem>
          <Typography style={styles.titleProcedure}>
            Cambio de radicatoria
          </Typography>
          <Image src={ImgRadicatoria} style={styles.image} />
        </ProcedureItem>
        <ProcedureItem>
          <Typography style={styles.titleProcedure}>
            Cambio de nombre vehículo
          </Typography>
          <Image src={ImgVehiculo} style={styles.image} />
        </ProcedureItem>
        <ProcedureItem>
          <Typography style={styles.titleProcedure}>
            Duplicado de RUAT y carnet de propiedad
          </Typography>
          <Box
            component="img"
            src={ImgDuplicadoPropiedad}
            style={styles.image}
          />
        </ProcedureItem>
      </ContentProcedures>
      <Typography variant="h2" style={styles.typography}>
        Tramites de Inmuebles
      </Typography>
      <Divider />
      <ContentProcedures>
        <ProcedureItem>
          <Typography style={styles.titleProcedure}>
            Sctualización de plano de urbicación urbano
          </Typography>
          <Image src={ImgPlanoUbicacion} style={styles.image} />
        </ProcedureItem>
        <ProcedureItem>
          <Typography style={styles.titleProcedure}>
            Cambio de nombre con transferencia
          </Typography>
          <Image src={ImgChangeTransfer} style={styles.image} />
        </ProcedureItem>
      </ContentProcedures>
      <Typography variant="h2" style={styles.typography}>
        Tramites de Licencia de Funcionamiento
      </Typography>
      <Divider />
      <ContentProcedures>
        <ProcedureItem>
          <Typography style={styles.titleProcedure}>
            Nueva licencia de funcionamiento
          </Typography>
          <Image src={ImgNewLicense} style={styles.image} />
        </ProcedureItem>
        <ProcedureItem>
          <Typography style={styles.titleProcedure}>
            Renovación licencia de funcionamiento
          </Typography>
          <Image src={ImgRenewalLicense} style={styles.image} />
        </ProcedureItem>
      </ContentProcedures>
    </ContainerCustom>
  );
};

const styles = {
  typography: {
    textAlign: "center",
    fontFamily: "Open Sans, Arial",
    margin: "1.25em 0 1.25em",
    fontSize: "1.25em",
    fontWeight: 600,
  },
  titleProcedure: {
    fontFamily: "Open Sans, Arial",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: ".9375rem",
    lineHeight: "1.5em",
    height: "4em",
    width: "15em",
  },
  image: {
    height: "200px",
  },
};

export default Procedures;
