import styled from "styled-components";

export const ThemeInput = styled.input`
  padding: 0px 16.2426px;
  max-width: 329.93px;
  width: 100%;
  height: 38.5px;

  background: var(--grey-2);
  color: #F8F9FA;

  border: 1.2182px solid var(--grey-0);
  border-radius: 4px;

  /* Inside auto layout */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 26px;

  @media (min-width: 768px) {
    height: 48px;
    font-size: 16px;
  }
`;