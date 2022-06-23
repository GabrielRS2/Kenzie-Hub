import styled, { css } from "styled-components";

export const TechItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 48.73px;
  width: 100%;
  max-width: 300px;
  border-radius: 4px;
  padding: 0px 12px;

  font-family: "Inter";

  :hover {
    cursor: pointer;
  }

  ${(props) => {
    if(props.status === "Avançado") {
      return css` 
        background-color: var(--grey-2);
      `;
    }
    else {
      return css`
        background-color: var(--grey-4);
      `;
    }
  }}

  .title {
    font-weight: 700;
    font-size: 14px;
  }

  .status {
    font-weight: 400;
    font-size: 12px;
    ${(props) => {
      if(props.status === "Avançado") {
        return css` 
          color: var(--grey-0);
        `;
      }
      else {
        return css`
          color: var(--grey-1);
        `;
      }
    }}
  }
  @media (min-width: 768px) {
    min-width: 732px;
  }
`;

export const TrashBtn = styled.button`
  border: none;
  color: #ffffff;
  
  ${(props) => {
    if(props.status === "Avançado") {
      return css` 
        background-color: var(--grey-2);
      `;
    }
    else {
      return css`
        background-color: var(--grey-4);
      `;
    }
  }}
`;