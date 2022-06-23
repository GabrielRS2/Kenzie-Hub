import styled from "styled-components";
import { css } from "styled-components";

export const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 329.93px;
  height: 38.5px;
  padding: 8.25px 0px;

  border-radius: 4.06px;
  border: none;

  font-family: "Inter";
  font-weight: 500;
  font-size: 12.83px;
  color: #ffffff;

  ${(props) => {
      switch(props.background) {
        case "color-primary":
          return css `
            background-color: var(--color-primary);
            color: #fffff;
            : hover {
              background-color: var(--color-primary-focus);
            }
          `;
        case "color-primary-negative":
          return css `
            background-color: var(--color-primary-negative);
            color: #fffff;
          `
        default:
          return css `
            background-color: var(--grey-1);
            color: var(--grey-0);
          `;
      }
    }
  }

  @media(min-width: 768px) { 
    height: 48px;
    padding: 10.5px 0px;

    font-size: 16px;
  }
`;