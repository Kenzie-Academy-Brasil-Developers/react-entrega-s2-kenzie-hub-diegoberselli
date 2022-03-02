import styled from "styled-components";

const HomeDiv = styled.div`
  width: 310px;
  height: 330px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 18px;
  background: linear-gradient(225deg, #101012, #131315);
  box-shadow: -22px 22px 55px #0c0c0e, 22px -22px 55px #18181a;
  div {
    width: 95%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export default HomeDiv;