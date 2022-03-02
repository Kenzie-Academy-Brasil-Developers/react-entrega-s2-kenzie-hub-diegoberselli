
import StyledButton from "./styles";

const Button = ({ children, register, onClick }) => {
  return (
    <>
      <StyledButton onClick={onClick} register={register}>
        {children}
      </StyledButton>
    </>
  );
};

export default Button;