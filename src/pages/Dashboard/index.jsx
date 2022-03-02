import { Container, DivTecnologies, StyledButton } from "./styles";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import ModalPost from "../../components/ModalFirst";
import api from "../../services/api";
import { useEffect } from "react";
import { motion } from "framer-motion";
import ModalPut from "../../components/ModalSecond";

const Dashboard = ({ auth, setAuth }) => {
  const [modalPost, setModalPost] = useState(false);
  const [modalPut, setModalPut] = useState(false);
  const [itemToChange, setItemToChange] = useState("");
  const [user] = useState(JSON.parse(localStorage.getItem("@kenzieHub:user")));
  const [techList, setTechList] = useState([]);

  useEffect(() => {
    if (auth) {
      api
        .get(`https://kenziehub.herokuapp.com/users/${user.id}`)
        .then((response) => setTechList(response.data.techs))
        .catch((err) => console.log(err));
    }
  }, [techList]);

  const createTech = () => {
    setModalPost(true);
  };

  if (!auth) {
    return <Redirect to="/login" />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
    >
      <Container>
        <Header setAuth={setAuth} />
        <section>
          <h1>Olá, {user.name}</h1>
          <p>{user.course_module}</p>
        </section>
        <hr />
        <nav>
          {modalPost && <ModalPost user={user} setModalPost={setModalPost} />}
          {modalPut && (
            <ModalPut
              user={user}
              setModalPut={setModalPut}
              itemToChange={itemToChange}
            />
          )}
          <h3>Tecnologias</h3>
          <StyledButton onClick={createTech}> + </StyledButton>
        </nav>
        <DivTecnologies>
          {techList.map(({ title, status, id }) => (
            <Card
              setModalPut={setModalPut}
              setItemToChange={setItemToChange}
              title={title}
              status={status}
              id={id}
            />
          ))}
        </DivTecnologies>
      </Container>
    </motion.div>
  );
};

export default Dashboard;