import styled from "styled-components";

export const Container = styled.div`
  width: 270px;
  height: 45px;
  padding: 0px 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  background-color: var(--grey-4);
  :hover {
    background-color: var(--grey-2);
  }

  div{
    display: flex;
    align-items: center;
  }


  p {
    font-size: 12px;
    color: var(--grey-1);
    font-weight: 400;
    
  }
  p:hover {
    cursor: pointer;
    color: var(--primary-color)
  }
  @media (min-width: 1010px) {
    width: 850px;
  }
  @media (min-width: 1100px) {
    width: 950px;
  }
`;

export const StyledButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  color: var(--grey-0);
  border: 0;
  width: 20px;
  height: 20px;
  font-size: 10px;
  :hover {
    cursor: pointer;
    color: var(--primary-focus);
  }
`;