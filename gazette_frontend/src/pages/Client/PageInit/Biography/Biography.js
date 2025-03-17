import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ImgAlcalde from "#assets/alcalde.png";

function Biography() {
  return (
    <>
      <Typography variant="h2" style={styles.typographyTitle}>
        Nuestro Alcalde
      </Typography>
      <Grid container sx={{ alignItems: "center" }}>
        <Grid size={4}>
          <Box>
            <Box
              component="img"
              src={ImgAlcalde}
              sx={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Grid>
        <Grid
          size={8}
          sx={{
            padding: "0 8%",
            color: "#111",
          }}
        >
          <Typography
            component="p"
            sx={{
              ...styles.typography,
              fontWeight: "bold",
            }}
          >
            Biografía
          </Typography>
          <Typography component="p" style={styles.typography}>
            Jhonny vocal Andrade nacido el 2 de julio de 1982 en la provincia
            Obispo Santistéban.
          </Typography>
          <Typography
            component="p"
            sx={{
              ...styles.typography,
              fontWeight: "bold",
            }}
          >
            Lic. JHONNY VOCAL ANDRADE
          </Typography>
          <Typography component="p" style={styles.typography}>
            Comprometido con el Progreso de Comarapa, nos enorgullece destacar
            la dedicación del Lic. Jhonny Vocal Andrade, quien asumió el cargo
            de alcalde el 3 de mayo de 2021. Desde ese momento, ha trabajado
            incansablemente para llevar a cabo proyectos que benefician
            directamente a la población de Comarapa.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

const styles = {
  typographyTitle: {
    fontFamily: "Open Sans, Arial, sans-serif",
    fontSize: "1.25em",
    fontWeight: 600,
    margin: "1.25em 0 1.25em",
    lineHeight: "1.3em",
    textAlign: "center",
  },
  typography: { marginBottom: "2em", fontFamily: "Arial, sans-serif" },
};

export default Biography;
