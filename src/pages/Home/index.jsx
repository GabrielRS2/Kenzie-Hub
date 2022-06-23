import { useEffect, useState } from "react";
import TechCard from "../../components/TechCard";
import { Container, Header, TechContainer, TechList, UserInfoContainer } from "./style";
import { Modal } from "@mui/material";
import ModalAddTech from "../../components/ModalAddTech";
import { useHistory, Redirect } from "react-router-dom";
import api from "../../services";
import ModalUpdateTech from "../../components/ModalUpdate";

function Home({ user, token, userId, setUser, techs, setTechs }) {
	const [ openAdd, setOpenAdd ] = useState(false);

  const handleOpenAdd = () => setOpenAdd(true);

  const handleCloseAdd = () => setOpenAdd(false);

	const [ openUpdate, setOpenUpdate ] = useState(false);

	const [ currentTech, setCurrentTech ] = useState("")

  const handleOpenUpdate = (title) => {
		setOpenUpdate(true)
		setCurrentTech(title);
	}

  const handleCloseUpdate = () => {setOpenUpdate(false)};

	const hystory = useHistory()

	useEffect(() => {
		if (!user) {
			api.get(`/users/${JSON.parse(userId)}`)
			.then((res) => {
				setUser(res.data)
				setTechs(res.data.techs)
			})
			.catch((err) => console.log(err))
		}
	},[userId, setUser, user, setTechs, techs])


	function handleGoLogin() {
		hystory.push("/");
		localStorage.clear();
	}

  return(
    <Container>
			{!token && !userId && (
				<Redirect to="/" />
			)}
			<Modal
				open={openAdd}
				onClose={handleCloseAdd}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<ModalAddTech handleClose={handleCloseAdd} token={token} techs={techs} setTechs={setTechs}></ModalAddTech>
			</Modal>
			<Modal
				open={openUpdate}
				onClose={handleCloseUpdate}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<ModalUpdateTech handleClose={handleCloseUpdate} currentTech={currentTech} token={token} techs={techs} setTechs={setTechs}></ModalUpdateTech>
			</Modal>
      <Header>
					<h1>Kenzie hub</h1>
					<button onClick={handleGoLogin}>Sair</button>
      </Header>
      <UserInfoContainer>
				<div className="InfoContainer">
					<p className="userName">Olá, {user?.name}</p>
					<p className="module">{user?.course_module}</p>
				</div>
      </UserInfoContainer>
      <TechContainer>
        <div className="btnContainer">
          <p>Tecnologias</p>
          <button className="addBtn" onClick={handleOpenAdd}>+</button>
        </div>
				{techs.length > 0 && (
					<TechList>
						{techs.map(({status, title, id}) => (
							<TechCard key={id} handleOpenUpdate={handleOpenUpdate} status={status} title={title}></TechCard>
						))}
					</TechList>
				)}
      </TechContainer>
    </Container>
  );
}

export default Home;