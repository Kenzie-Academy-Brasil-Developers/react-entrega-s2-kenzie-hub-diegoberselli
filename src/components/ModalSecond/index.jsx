import { ModalDiv, StyledButton } from "./styles";
import Button from "../Button";
import Input from "../Input";
import api from "../../services/api";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const ModalPut = ({ setModalPut, itemToChange }) => {
  const close = () => {
    return setModalPut(false);
  };
  const [token] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:token")) || ""
  );
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    api
      .put(`/users/techs/${itemToChange}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Tecnologia atualizada");
      })
      .catch((err) => toast.error("Ops!! Algo deu errado."));
  };

  return (
    <>
      <ModalDiv>
        <div>
          <h4>Editar tecnologia</h4>
          <StyledButton onClick={close}> x </StyledButton>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register}
            name="status"
            placeholder="Atualize seu progresso"
            label="Status"
          />
          <Button type="submit">Atualizar tecnologia</Button>
        </form>
      </ModalDiv>
    </>
  );
};

export default ModalPut;