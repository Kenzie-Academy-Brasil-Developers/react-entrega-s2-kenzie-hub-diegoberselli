import styled from "styled-components";

export const ModalDiv = styled.div`
  width: 300px;
  min-height: 300px;
  max-height: 400px;
  border-radius: 10px;
  background: #212129;
  box-shadow: inset -24px -24px 48px #15181b, inset 24px 24px 48px #2d3237;
  position: absolute;
  top: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  > div {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--grey-2);
    border-radius: 10px 10px 0px 0px;
    button {
      background-color: var(--grey-2);
    }
  }
  form {
    height: 270px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  @media (min-width: 1010px) {
    top: 25%;
    left: 35%;
  }
`;

export const StyledButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: var(--grey-3);
  color: var(--grey-0);
  border: 0;
  border-radius: 5px;
  font-weight: 600;
  :hover {
    cursor: pointer;
    background-color: var(--grey-2);
  }
`;