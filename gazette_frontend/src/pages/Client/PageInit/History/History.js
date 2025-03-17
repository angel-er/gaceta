import { useEffect, useState } from "react";
import styled from "styled-components";
import MuiAccordion from "@mui/material/Accordion";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Typography } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  color: "#444444",
  textAlign: "justify",
  lineHeight: "1.75em",
  border: `1px solid ${theme?.palette?.divider}`,
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
    // marginLeft: theme?.spacing(1) ?? 1,
    marginLeft: 1,
  },
  ...theme?.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const History = ({ data }) => {
  const [info, setInfo] = useState([]);
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    setInfo(data);
  }, [data]);

  return (
    info.length > 0 &&
    info?.map((data, idx) => (
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
    ))
  );
};

export default History;
