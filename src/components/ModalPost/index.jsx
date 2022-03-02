import { ModalDiv, StyledButton } from "./styles";
import Button from "../Button";
import Input from "../Input";
import api from "../../services/api";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const ModalPost = ({ setModalPost }) => {
  const close = () => {
    return setModalPost(false);
  };

  const [token] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:token")) || ""
  );

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Tecnologia cadastrada");
      })
      .catch((err) => toast.error("Ops!! Algo deu errado."));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <>
        <ModalDiv>
          <div>
            <h3>Cadastrar tecnologia</h3>
            <StyledButton onClick={close}> x </StyledButton>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              register={register}
              name="title"
              placeholder="Digite aqui sua tecnologia"
              label="Nome"
            />
            <Input
              register={register}
              name="status"
              placeholder="Iniciante, intermediário ou avançado"
              label="Status"
            />
            <Button type="submit">Cadastrar tecnologia</Button>
          </form>
        </ModalDiv>
      </>
    </motion.div>
  );
};

export default ModalPost;
