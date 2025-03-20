import { Fragment } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import DownloadIcon from "@mui/icons-material/Download";
import { Box, IconButton } from "@mui/material";

import {
  BodyItemStyle,
  BoxIconStyle,
  BoxTagStyle,
  DetailItemStyle,
  DownloadItemStyle,
  HeaderItemStyle,
  ListItemStyle,
} from "./List.styles";
import IconResolution from "#assets/icon-resolution.png";
import IconPDF from "#assets/download-pdf.jpg";
import { red } from "@mui/material/colors";

export default function AlignItemsList() {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItemStyle>
        <HeaderItemStyle>
          <BoxIconStyle>
            <Box component="img" src={IconResolution} style={styles.image} />
            <Typography variant="p">
              Resolución<strong> 086/2024</strong>
            </Typography>
          </BoxIconStyle>
          <DetailItemStyle>
            <BoxTagStyle>
              <Typography variant="p">Promulgado: 27/02/2024</Typography>
              <Typography variant="p" style={{ display: "flex" }}>
                Publicado: 30/02/2024{" "}
              </Typography>
            </BoxTagStyle>
            <BoxTagStyle>
              <Typography variant="p">Vistas: 10</Typography>
              <Typography variant="p">Desargas: 3</Typography>
            </BoxTagStyle>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // fontSize: "2em",
              }}
            >
              <DownloadItemStyle>
                {/* <Box component="img" src={IconPDF} style={styles.iconPDF} /> */}
                {/* <Box style={styles.shadowIcon}> */}
                <IconButton
                  //   edge="center"
                  aria-label="delete"
                  style={styles.shadowIcon}
                >
                  <DownloadIcon
                    style={{
                      color: "#00000000",
                    }}
                  />
                </IconButton>
                {/* </Box> */}
              </DownloadItemStyle>
              <Typography variant="p" fontSize=".8em">
                Descargar
              </Typography>
            </Box>
          </DetailItemStyle>
        </HeaderItemStyle>
        <BodyItemStyle>
          <Typography variant="p" style={{ fontWeight: 400 }}>
            {" "}
            LEY MUNICIPAL DE REGULARIZACIÓN VOLUNTARIA DE DEUDAS TRIBUTARIAS
            MUNICIPALES
          </Typography>
        </BodyItemStyle>
        <br></br>
        <Divider />
      </ListItemStyle>
      <ListItemStyle>
        <HeaderItemStyle>
          <BoxIconStyle>
            <Box component="img" src={IconResolution} style={styles.image} />
            <Typography variant="p">
              Resolución<strong> 086/2024</strong>
            </Typography>
          </BoxIconStyle>
          <DetailItemStyle>
            <BoxTagStyle>
              <Typography variant="p">Promulgado: 27/02/2024</Typography>
              <Typography variant="p" style={{ display: "flex" }}>
                Publicado: 30/02/2024{" "}
              </Typography>
            </BoxTagStyle>
            <BoxTagStyle>
              <Typography variant="p">Vistas: 10</Typography>
              <Typography variant="p">Desargas: 3</Typography>
            </BoxTagStyle>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // fontSize: "2em",
              }}
            >
              <DownloadItemStyle>
                {/* <Box component="img" src={IconPDF} style={styles.iconPDF} /> */}
                {/* <Box style={styles.shadowIcon}> */}
                <IconButton
                  //   edge="center"
                  aria-label="delete"
                  style={styles.shadowIcon}
                >
                  <DownloadIcon
                    style={{
                      color: "#00000000",
                    }}
                  />
                </IconButton>
                {/* </Box> */}
              </DownloadItemStyle>
              <Typography variant="p" fontSize=".8em">
                Descargar
              </Typography>
            </Box>
          </DetailItemStyle>
        </HeaderItemStyle>
        <BodyItemStyle>
          <Typography variant="p" style={{ fontWeight: 400 }}>
            {" "}
            LEY MUNICIPAL DE REGULARIZACIÓN VOLUNTARIA DE DEUDAS TRIBUTARIAS
            MUNICIPALES
          </Typography>
        </BodyItemStyle>
        <br></br>
        <Divider />
      </ListItemStyle>
      <ListItemStyle>
        <HeaderItemStyle>
          <BoxIconStyle>
            <Box component="img" src={IconResolution} style={styles.image} />
            <Typography variant="p">
              Resolución<strong> 086/2024</strong>
            </Typography>
          </BoxIconStyle>
          <DetailItemStyle>
            <BoxTagStyle>
              <Typography variant="p">Promulgado: 27/02/2024</Typography>
              <Typography variant="p" style={{ display: "flex" }}>
                Publicado: 30/02/2024{" "}
              </Typography>
            </BoxTagStyle>
            <BoxTagStyle>
              <Typography variant="p">Vistas: 10</Typography>
              <Typography variant="p">Desargas: 3</Typography>
            </BoxTagStyle>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // fontSize: "2em",
              }}
            >
              <DownloadItemStyle>
                {/* <Box component="img" src={IconPDF} style={styles.iconPDF} /> */}
                {/* <Box style={styles.shadowIcon}> */}
                <IconButton
                  //   edge="center"
                  aria-label="delete"
                  style={styles.shadowIcon}
                >
                  <DownloadIcon
                    style={{
                      color: "#00000000",
                    }}
                  />
                </IconButton>
                {/* </Box> */}
              </DownloadItemStyle>
              <Typography variant="p" fontSize=".8em">
                Descargar
              </Typography>
            </Box>
          </DetailItemStyle>
        </HeaderItemStyle>
        <BodyItemStyle>
          <Typography variant="p" style={{ fontWeight: 400 }}>
            {" "}
            LEY MUNICIPAL DE REGULARIZACIÓN VOLUNTARIA DE DEUDAS TRIBUTARIAS
            MUNICIPALES
          </Typography>
        </BodyItemStyle>
        <br></br>
        <Divider />
      </ListItemStyle>
      <ListItemStyle>
        <HeaderItemStyle>
          <BoxIconStyle>
            <Box component="img" src={IconResolution} style={styles.image} />
            <Typography variant="p">
              Resolución<strong> 086/2024</strong>
            </Typography>
          </BoxIconStyle>
          <DetailItemStyle>
            <BoxTagStyle>
              <Typography variant="p">Promulgado: 27/02/2024</Typography>
              <Typography variant="p" style={{ display: "flex" }}>
                Publicado: 30/02/2024{" "}
              </Typography>
            </BoxTagStyle>
            <BoxTagStyle>
              <Typography variant="p">Vistas: 10</Typography>
              <Typography variant="p">Desargas: 3</Typography>
            </BoxTagStyle>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // fontSize: "2em",
              }}
            >
              <DownloadItemStyle>
                {/* <Box component="img" src={IconPDF} style={styles.iconPDF} /> */}
                {/* <Box style={styles.shadowIcon}> */}
                <IconButton
                  //   edge="center"
                  aria-label="delete"
                  style={styles.shadowIcon}
                >
                  <DownloadIcon
                    style={{
                      color: "#00000000",
                    }}
                  />
                </IconButton>
                {/* </Box> */}
              </DownloadItemStyle>
              <Typography variant="p" fontSize=".8em">
                Descargar
              </Typography>
            </Box>
          </DetailItemStyle>
        </HeaderItemStyle>
        <BodyItemStyle>
          <Typography variant="p" style={{ fontWeight: 400 }}>
            {" "}
            LEY MUNICIPAL DE REGULARIZACIÓN VOLUNTARIA DE DEUDAS TRIBUTARIAS
            MUNICIPALES
          </Typography>
        </BodyItemStyle>
        <br></br>
        <Divider />
      </ListItemStyle>
      <ListItemStyle>
        <HeaderItemStyle>
          <BoxIconStyle>
            <Box component="img" src={IconResolution} style={styles.image} />
            <Typography variant="p">
              Resolución<strong> 086/2024</strong>
            </Typography>
          </BoxIconStyle>
          <DetailItemStyle>
            <BoxTagStyle>
              <Typography variant="p">Promulgado: 27/02/2024</Typography>
              <Typography variant="p" style={{ display: "flex" }}>
                Publicado: 30/02/2024{" "}
              </Typography>
            </BoxTagStyle>
            <BoxTagStyle>
              <Typography variant="p">Vistas: 10</Typography>
              <Typography variant="p">Desargas: 3</Typography>
            </BoxTagStyle>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // fontSize: "2em",
              }}
            >
              <DownloadItemStyle>
                {/* <Box component="img" src={IconPDF} style={styles.iconPDF} /> */}
                {/* <Box style={styles.shadowIcon}> */}
                <IconButton
                  //   edge="center"
                  aria-label="delete"
                  style={styles.shadowIcon}
                >
                  <DownloadIcon
                    style={{
                      color: "#00000000",
                    }}
                  />
                </IconButton>
                {/* </Box> */}
              </DownloadItemStyle>
              <Typography variant="p" fontSize=".8em">
                Descargar
              </Typography>
            </Box>
          </DetailItemStyle>
        </HeaderItemStyle>
        <BodyItemStyle>
          <Typography variant="p" style={{ fontWeight: 400 }}>
            {" "}
            LEY MUNICIPAL DE REGULARIZACIÓN VOLUNTARIA DE DEUDAS TRIBUTARIAS
            MUNICIPALES
          </Typography>
        </BodyItemStyle>
        <br></br>
        <Divider />
      </ListItemStyle>
    </List>
  );
}

const styles = {
  image: {
    height: "1.5rem",
  },
  shadowIcon: {
    position: "absolute",
    width: "3em",
    height: "3em",
    borderRadius: "50%",
    color: "rgb(0 0 0);",
    // op: "-15px",
    // right: 0,
    // bottom: 0,
    // left: "-25px",
  },
};
