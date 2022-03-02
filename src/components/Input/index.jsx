import { Container, StyledInput } from "./styles";

const Input = ({ placeholder, label, type, register, name }) => {
  return (
    <Container>
      <label>{label}</label>
      <StyledInput type={type} placeholder={placeholder} {...register(name)} />
    </Container>
  );
};

export default Input;