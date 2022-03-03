import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, StyledForm } from "./styles";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

const Register = ({ authenticated}) => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Digite um nome"),
    email: yup.string().email("email inválido").required("Digite um email"),
    course_module: yup.string().required("Digite um módulo"),
    password: yup
      .string()
      .required("Digite uma senha")
      .min(6, "Mínimo de 6 dígitos"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "Confirmação inválida")
      .required("Confirme a senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    delete data.confirm_password;
    api
      .post("/users", data)
      .then((response) => {
        console.log(response);
        toast.success("Cadastro realizado com sucesso, faça seu login!");
        history.push("/login");
      })
      .catch((err) => {
        toast.error("Email inválido");
        console.log(err);
      });
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h2>Crie sua conta</h2>
        <p>Rápido e grátis, vamos nessa</p>
        <Input
          register={register}
          name="name"
          placeholder="Digite aqui seu nome"
          label="Nome"
        />
        <span>{errors.name?.message}</span>
        <Input
          register={register}
          name="email"
          placeholder="Digite aqui seu email"
          label="Email"
        />
        <span>{errors.email?.message}</span>
        <Input
          register={register}
          name="course_module"
          placeholder="Digite aqui seu módulo"
          label="Módulo"
        />
        <span>{errors.bio?.message}</span>
        <Input
          register={register}
          name="password"
          placeholder="Digite aqui sua senha"
          label="Senha"
          type="password"
        />
        <span>{errors.password?.message}</span>
        <Input
          register={register}
          name="confirm_password"
          placeholder="Confirme sua senha"
          label="Confirmação de senha"
          type="password"
        />
        <span>{errors.confirm_password?.message}</span>
        <Button type="submit">Cadastrar</Button>
      </StyledForm>
    </Container>
  );
};

export default Register;