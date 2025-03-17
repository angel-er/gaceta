import styled from "styled-components";

export const Container = styled.div`
  background-color: aliceblue;
  margin: auto;
  padding: 3.125em 1.875em;
  text-align: start;
`;

export const Title = styled.div`
  margin-bottom: 2.5rem;
  @media (max-width: 768px) {
    grid-row: 2;
  }
`;

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
