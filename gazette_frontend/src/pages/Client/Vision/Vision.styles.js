import styled from "styled-components";

export const Figure = styled.figure`
  @media (max-width: 768px) {
    grid-row: 1;
  }
`;

export const Article = styled.div`
  display: grid;
  grid-template-columns: 1fr 50%;
  direction: ltr;
  grid-template-rows: auto;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;
