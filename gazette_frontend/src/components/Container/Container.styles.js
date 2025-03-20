import styled from "styled-components";

export const ContainerStyle = styled.div`
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
