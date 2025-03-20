import styled from "styled-components";
import IconPDF from "#assets/download-pdf.jpg";

export const ListItemStyle = styled.div`
  padding: 0.5rem 5rem;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  line-height: 20px;
  font-weight: 300;
`;

export const HeaderItemStyle = styled.div`
  /* display: flex; */
`;

export const BoxIconStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const DetailItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const BoxTagStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DownloadItemStyle = styled.div`
  background-image: url(${IconPDF});
  border-radius: 50%;
  height: 3em;
  width: 3em;
  background-size: cover;
`;

export const BodyItemStyle = styled.div``;
