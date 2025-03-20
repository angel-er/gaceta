import styled from "styled-components";

export const ContentProcedures = styled.div`
  padding: 0 3.5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 5rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProcedureItem = styled.div`
  justify-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  height: 200px;

  @media (max-width: 768px) {
    height: 90px;
  }
`;
