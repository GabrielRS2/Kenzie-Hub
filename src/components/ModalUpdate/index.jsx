import { Modal, ModalContainer, ModalHeader, UpdateTechForm, BtnUpdateContainer } from "./style";
import { ThemeInput } from "../ThemeInput/style";
import { ThemeSelect } from "../ThemeSelect/style";
import { ThemeButton } from "../ThemeButton/style";
import { useEffect, useState } from "react";
import api from "../../services";

function ModalUpdateTech({handleClose, currentTech, techs, setTechs }) {

  const [ currentStatus, setCurrentStatus ] = useState("");
  const [ showError, setShowError ] = useState(false);
  const [ valueSelect, setValueSelect ] = useState(currentStatus);
  
  function onSubmitFunction() {
    if( valueSelect === currentStatus) {
      setShowError(true)
    } else {
      const item = techs.find((item) => {return item.title === currentTech});
      const id = item.id;
      const newData = {"status": valueSelect}
      api.put(`/users/techs/${id}`, newData, {
        headers: {
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem("@Kenziehub:token"))}` 
        }})
        .then(() => {
          const updatedItem = {
            id: id,
            title: currentTech,
            status: newData.status
          }
          const othersTechs = techs.filter((tech) => {return tech.title !== currentTech})
          setTechs([...othersTechs, updatedItem])
        })
      handleClose()
      setShowError(false)
    };
  }
  
  useEffect(() => {
    const item = techs.find((item) => {return item.title === currentTech})
    setCurrentStatus(item?.status);
    setValueSelect(currentStatus);
  }, [currentTech, techs, currentStatus])

  function handleRemove() {
    const item = techs.find((item) => {return item.title === currentTech});
    const id = item.id;
    api.delete(`/users/techs/${id}`, {
    headers: {
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem("@Kenziehub:token"))}` 
    }})
    .then((_) => {
      setTechs(techs.filter((tech) => {return tech.title !== currentTech}))
    })
    .then((_) => handleClose())
  }

  return(
    <ModalContainer>
      <Modal>
        <ModalHeader>
          <p className="newTech">Tecnologia Detalhes</p>
          <button onClick={handleClose} className="btnCloseModal">X</button>
        </ModalHeader>
        <UpdateTechForm onSubmit={(event) => event.preventDefault()}>
          <label className="LabelModal">Nome </label>
          <ThemeInput 
          value={""}
          placeholder={currentTech}
          />
          <label className="LabelModal">Selecionar status {showError ? (<span>Altere seu status</span>) : null}</label>
          <ThemeSelect
          value={valueSelect}
          onChange={(event) => setValueSelect(event.target.value)}
          id="selectUpdate"
          >
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </ThemeSelect>
          <BtnUpdateContainer>
            {valueSelect === currentStatus ? (
              <ThemeButton onClick={() => onSubmitFunction()} background={"color-primary-negative"}>Cadastrar Tecnologia</ThemeButton>
            ) : (
              <ThemeButton onClick={() => onSubmitFunction()} background={"color-primary"}>Cadastrar Tecnologia</ThemeButton>
            )}
            <button onClick={handleRemove} className="BtnRemove">Excluir</button>
          </BtnUpdateContainer>
        </UpdateTechForm>
      </Modal>
    </ModalContainer>
  );
}

export default ModalUpdateTech;