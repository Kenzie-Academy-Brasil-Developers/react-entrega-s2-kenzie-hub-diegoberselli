import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid var(--grey-3);
  div {
    width: 295px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 1010px) {
      width: 900px;
    }
    @media (min-width: 1100px) {
      width: 980px;
    }
  }
`;

export const StyledButton = styled.button`
  width: 55px;
  height: 32px;
  background-color: var(--grey-3);
  color: var(--grey-0);
  border: 0;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    background-color: var(--grey-2);
  }
`;