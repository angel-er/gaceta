import styled from "styled-components";

export const ContainerInit = styled.div`
  background-color: aliceblue;
  margin: auto;
  padding: 3.125em 1.875em;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-areas: "a b b b b c";
  gap: 20px;

  @media (max-width: 961px) {
    grid-template-areas:
      "a b b b b b"
      "c c c c c c";
  }

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

export const TagContent = styled.div`
  color: #111111;
  border: solid 1px #dadada;
  padding: 0.5em;
  font-size: 0.9375rem;
  line-height: 1.5em;
`;

export const SymbolContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
