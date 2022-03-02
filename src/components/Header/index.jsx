import { StyledHeader, StyledButton } from "./styles";
import logo from "../../assets/logo.png";
import { useHistory } from "react-router-dom";

const Header = ({ setAuth }) => {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    setAuth(false);
    history.push("/");
  };

  return (
    <>
      <StyledHeader>
        <div>
          <img src={logo} alt="kenzie-logo" />
          <StyledButton onClick={logout}>Sair</StyledButton>
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;