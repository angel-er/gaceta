import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import DownloadIcon from "@mui/icons-material/Download";
import { Box, IconButton } from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

import {
  BodyItemStyle,
  BoxIconStyle,
  BoxTagStyle,
  DetailItemStyle,
  DownloadItemStyle,
  HeaderItemStyle,
  ListItemStyle,
} from "./List.styles";
import IconBook from "#assets/libro-abierto.png";

export default function AlignItemsList({ data = [] }) {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {data.map((d, idx) => (
        <ListItemStyle>
          <HeaderItemStyle>
            <BoxIconStyle>
              <Box component="img" src={IconBook} style={styles.image} />
              <Typography variant="p">
                {d.type}
                <strong> {d.number}</strong>
              </Typography>
            </BoxIconStyle>
            <DetailItemStyle>
              <BoxTagStyle>
                <Typography variant="p">
                  Promulgado: {d.promulgation}
                </Typography>
                <Typography variant="p" style={{ display: "flex" }}>
                  Publicado: {d.created}
                </Typography>
              </BoxTagStyle>
              <BoxTagStyle>
                <Typography variant="p">Vistas: {d.views}</Typography>
                <Typography variant="p">Desargas: {d.cant_download}</Typography>
              </BoxTagStyle>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconButton
                  size="small"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "3.7em",
                    height: "3.7em",
                  }}
                >
                  <ZoomInIcon fontSize="large" />
                  <Typography variant="p" fontSize=".57em">
                    Ver mas +
                  </Typography>
                </IconButton>

                <IconButton
                  size="small"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    // fontSize: "2em",
                  }}
                >
                  <DownloadItemStyle>
                    <DownloadIcon
                      style={{
                        color: "#00000000",
                      }}
                    />
                  </DownloadItemStyle>
                  <Typography variant="p" fontSize=".55em">
                    Descargar
                  </Typography>
                </IconButton>
              </Box>
            </DetailItemStyle>
          </HeaderItemStyle>
          <BodyItemStyle>
            <Typography variant="p" style={{ fontWeight: 400 }}>
              {d.description}
            </Typography>
          </BodyItemStyle>
          <br></br>
          <Divider />
        </ListItemStyle>
      ))}
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
  },
};
