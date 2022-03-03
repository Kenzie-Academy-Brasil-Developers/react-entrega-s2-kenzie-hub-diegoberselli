import { Redirect, useHistory } from "react-router-dom";
import logo from "../../assets/logo.png";
import HomeDiv from "./styles";
import Button from "../../components/Button";
import { motion } from "framer-motion";

const Home = ({ authenticated }) => {
  const history = useHistory();

  function toLogin() {
    history.push("/login");
  }

  function toRegister() {
    history.push("/register");
  }

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <HomeDiv>
        <img src={logo} alt="logo-kenzie" />
        <h1>Seja bem vindo!</h1>
        <div>
          <Button onClick={toLogin}>Entre</Button>
          <Button onClick={toRegister} register>
            Cadastre-se
          </Button>
        </div>
      </HomeDiv>
    </motion.div>
  );
};

export default Home;