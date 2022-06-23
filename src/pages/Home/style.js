import styled from "styled-components";

export const Container = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    width: 100%;
    max-width: 100vw;
    min-height: 100vh;
    padding: 0px 0px 15px 0px;

    background-color: var(--grey-4);

    font-family: "Inter";
    font-weight: 700;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 320px;
  width: 100%;
  height: 72px;
  padding: 0px 12px;

  h1 {
    font-size: 17px;
    color: var(--color-primary);
  }

  button {
    padding: 4.48px 25.77px  4.48px 25.77px;
    border: none;
    border-radius: 4px;


    font-weight: 600;
    font-size: 12px;
    line-height: 23px;

    color: var(--grey-0);
    background-color: var(--grey-3);
  }

  @media (min-width:768px) {
    max-width: 804px;

    h1 {
      font-size: 20px;
    }

    button {
      padding: 5.55px 16.24px  5.55px 16.24px;

      line-height: 28.42px;
    }
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 100vw;
  width: 100%;
  height: 131px;

  border-bottom: 1px solid var(--grey-3);
  border-top: 1px solid var(--grey-3);

  font-family: "Inter";

  .InfoContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;

    max-width: 320px;
    width: 100%;
    padding: 0px 12px;
  }

  .InfoContainer .userName {
    font-size: 18px;
    font-weight: 700;
    color: var(--grey-0);
  }

  .InfoContainer .module{
    font-size: 12px;
    font-weight: 600;
    color: var(--grey-1);
  }

  @media (min-width:768px) {
    height: 118px;

    .InfoContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;;

    max-width: 804px;
    width: 100%;
    padding: 0px 12px;
    }
  }
`;

export const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  max-width: 320px;
  width: 100%;
  padding: 19px 12px 14px 12px;

  font-family: 'Inter';
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  color: var(--grey-0);

  .btnContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 296px;
  }

  .btnContainer .addBtn {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 32px;
    height: 32px;
    border-radius: 4px;
    margin-bottom: 21px;
    border: none;

    background-color: var(--grey-3);
    
    font-family: 'Inter';
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 18px;
    color: var(--grey-0);
  }

  @media (min-width:768px) {
    padding: 11px 12px 14px 12px;
    max-width: 804px;

    .btnContainer {
      max-width: 780px;
    }
  }
`;

export const TechList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 22px 8.5px;
  width: 100%;
  max-width: 296px;
  border-radius: 4px;

  background-color: var(--grey-3);

  @media (min-width:768px) {
    max-width: 780px;
    padding: 24px 24px;
  }
`;