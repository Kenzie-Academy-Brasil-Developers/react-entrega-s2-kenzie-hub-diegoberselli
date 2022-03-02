import Input from "../../components/Input";
import Button from "../../components/Button";
import logo from "../../assets/logo.png";
import { Container, StyledForm } from "./styles";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

const Login = ({ setAuth, auth }) => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        toast.success("Bem vindo!");
        localStorage.setItem(
          "@kenzieHub:token",
          JSON.stringify(response.data.token)
        );
        localStorage.setItem(
          "@kenzieHub:user",
          JSON.stringify(response.data.user)
        );
        setAuth(true);
        return history.push("/dashboard");
      })
      .catch((err) => {
        toast.error("Email ou senha inválidos");
        console.log(err);
      });
  };

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <img src={logo} alt="logo-kenzie" />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <Input
          register={register}
          name="email"
          placeholder="Digite aqui seu email"
          label="Email"
        />
        <span>{errors.email?.message}</span>
        <Input
          register={register}
          name="password"
          placeholder="Digite aqui sua senha"
          label="Senha"
          type="password"
        />
        <span>{errors.password?.message}</span>
        <Button type="submit">Entrar</Button>
        <p>Ainda não possui uma conta?</p>
        <Button register onClick={() => history.push("/register")}>
          Cadastre-se
        </Button>
      </StyledForm>
    </Container>
  );
};

export default Login;