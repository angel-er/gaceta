import { Typography } from "@mui/material";

const Tag = ({ title, description }) => {
  return (
    <div>
      <Typography variant="p">
        <strong>{title}</strong> <br />
        {description}
      </Typography>
    </div>
  );
};

export default Tag;
