import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  max-width: 296px;
  width: 100%;
  border-radius: 4px;

  @media (min-width:768px) {
    max-width: 360px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 296px;
  width: 100%;
  height: 40px;
  padding: 0px 16px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  background-color: var(--grey-2);

  .newTech {
    font-family: 'Inter';
    font-weight: 600;
    font-size: 11.2304px;
    line-height: 19px;
    color: var(--grey-0);
  }

  .btnCloseModal {
    border: none;
    background-color: var(--grey-2);
    color: var(--grey-1);
  }

  @media (min-width:768px) {
    max-width: 360px;
  
    .newTech {
    font-size: 17px;
    line-height: 24px;
  }
  }
`;

export const UpdateTechForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 17px;

  max-width: 296px;
  width: 100%;
  padding: 19.62px 17.65px 25.67px 13.69px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  background-color: var(--grey-3);

  .LabelModal {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 9.772px;

    color: var(--grey-0);
  }
  
  .LabelModal span {
    color: var(--color-primary);
  }

  input + label {
    margin-top: 4px;
  }
  
  @media (min-width:768px) {
    max-width: 360px;

    .LabelModal {
      font-size: 12px;
    }
  }
`;

export const BtnUpdateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 22px;

  width: 100%;
  max-width: 320px;

  .BtnRemove {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 98px;
    height: 48px;
    border-radius: 4px;

    border: none;

    font-family: 'Inter';
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: var(--grey-0);
    background-color: var(--grey-1);
  }
`;