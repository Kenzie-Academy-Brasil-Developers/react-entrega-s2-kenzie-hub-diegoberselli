import styled from "styled-components";

export const Container = styled.div`
  /* width: 280px; */
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const StyledInput = styled.input`
  width: 264px;
  height: 30px;
  background-color: var(--grey-2);
  border: 2px solid var(--grey-2);
  border-radius: 3px;
  color: var(--grey-1);
  padding-left: 10px;
`;