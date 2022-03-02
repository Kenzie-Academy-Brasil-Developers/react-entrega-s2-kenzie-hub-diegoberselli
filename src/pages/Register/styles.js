import styled from "styled-components";

export const Container = styled.div `
  height: 711px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled.form `
  /* width: 295px; */
  min-height: 550px;
  /* max-height: 711px; */
  max-height: 100vh;
  padding: 14px;
  background-color: var(--grey-3);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  p {
    color: var(--grey-1);
    font-size: 10px;
    font-weight: 400;
  }
  span {
    color: var(--negative);
    font-size: 10px;
    font-weight: 400;
  }
  button {
    background-color: var(--primary-dark);
    border-color: var(--primary-dark);
    margin-top: 5px;
  }
`;