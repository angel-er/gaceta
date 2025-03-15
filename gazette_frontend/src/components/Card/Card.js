import { Typography } from "@mui/material";
import { CardContainer } from "./Card.styles";

const CardCustom = ({ title, children, styles }) => {
  return (
    <CardContainer>
      <Typography component="p" style={styles}>
        {title}
      </Typography>
      <div>{children}</div>
    </CardContainer>
  );
};

export default CardCustom;
