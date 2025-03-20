import { Typography } from "@mui/material";
import { Article, ContainerStyle, Title } from "./Container.styles";

const ContainerCustom = ({ title, children }) => {
  return (
    <ContainerStyle>
      <Title>
        <Typography variant="h1" style={styles.typography}>
          {title}
        </Typography>
      </Title>
      {children}
    </ContainerStyle>
  );
};

const styles = {
  typography: {
    fontSize: "2.25em",
    lineHeight: "1.25em",
    fontWeight: 600,
    fontFamily: "Open Sans, Arial",
  },
};

export default ContainerCustom;
