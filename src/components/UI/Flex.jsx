import styled, { css } from "styled-components";

const Flex = styled.div`
  display: flex;

  ${(props) =>
    props.alignCenter &&
    css`
      align-items: center;
    `}

  ${(props) =>
    props.justify &&
    css`
      justify-content: ${props.justify};
    `}
    
  ${(props) =>
    props.direction &&
    css`
      flex-direction: ${props.direction};
    `}

  ${(props) =>
    props.flexWrap &&
    css`
      flex-wrap: wrap;
    `}
`;

export default Flex;
