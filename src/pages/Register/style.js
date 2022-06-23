import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 31.62px;

  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  padding: 30px 12px;

  background-color: var(--grey-4);

  font-family: "Inter";
  font-weight: 700;

  h1 {
    font-size: 17px;
    color: var(--color-primary);
  }

  .tittle-container {
    max-width: 300px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .tittle-container button {
    padding: 4.48px 25.77px  4.48px 25.77px;
    border: none;
    border-radius: 4px;


    font-weight: 600;
    font-size: 9.59437px;
    line-height: 23px;

    color: var(--grey-0);
    background-color: var(--grey-3);
  }

  @media (min-width:768px) {
    gap: 35.7px;

    h1 {
      font-size: 20px;
    }

    .tittle-container {
      max-width: 370px;
    }

    .tittle-container button {
      padding: 5.55px 16.24px  5.55px 16.24px;

      font-size: 12px;
      line-height: 28.42px;
    }
  }
`;

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17.65px;

  padding: 33.7px 1rem 19.96px 1rem;
  max-width: 300px;
  width: 100%;

  background-color: var(--grey-3);
  box-shadow: 0px 4px 4px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  font-family: "Inter";
  font-weight: 700;

  h2 {
    font-size: 14px;
    line-height: 22px;
    color: var(--grey-0);
  }

  a {
    margin-top: 10px;

    font-weight: 600;
    font-size: 9.62602px;
    line-height: 14px;
    color: var(--grey-1);
  }

  p {
    font-weight: 400;
    font-size: 9.59437px;
    line-height: 18px;
    color: var(--grey-1);
  }

  @media (min-width:768px) {
    max-width: 370px;
    gap: 22px;
    padding: 42px 1.4rem;

    a {
      margin-top: 12px;

      font-size: 12px;
      line-height: 18px;
    }

    h2 {
      font-size: 18px;
      line-height: 28px;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 17.65px;

  width: 100%;
  margin-top: 4px;

  font-family: "Inter";
  font-weight: 400;
  font-size: 13px;
  color: var(--grey-0);

  label {
    font-size: 9.77px;
  }

  label span {
    color: var(--color-primary);
  }

  @media (min-width:768px) {
    gap: 22px;
    margin-top: 7px;
    
    label {
      font-size: 12px;
    }
  }
`;  
