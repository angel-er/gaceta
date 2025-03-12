import styled from "styled-components";

const ButtonStyle = styled.button`
  background-color: ${(props) => props.theme.main};
  color: #ffffff;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
`;

export default ButtonStyle;
