import styled from "styled-components";

export const ContainerInit = styled.div`
  background-color: aliceblue;
  /* width: 10%; */
  margin: auto;
  padding: 1rem;
  font-size: "16px";
  font-family: "Open Sans", Arial, sans-serif;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-areas: "a b b b b c";
  width: 100%;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-areas:
      "b b b b b b"
      "a a c c c c";
  }

  @media (max-width: 425px) {
    grid-template-areas:
      "b b b b b b"
      "a a a a a a"
      "c c c c c c";
  }
`;

export const GridOne = styled.div`
  grid-area: a;
`;

export const ContainerIframe = styled.div``;

export const GridTwo = styled.div`
  grid-area: b;
`;

export const GridThree = styled.div`
  grid-area: c;
`;
