import { Modal, ModalContainer, ModalHeader, NewTechForm } from "./style";
import { ThemeInput } from "../ThemeInput/style";
import { ThemeSelect } from "../ThemeSelect/style";
import { ThemeButton } from "../ThemeButton/style";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import api from "../../services";

function ModalAddTech({ handleClose, token, techs, setTechs }) {
  const schema = yup.object().shape({
    title: yup.string().required("campo obrigatório")
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  
  function onSubmitFunction(data) {
    handleClose();
    api.post("/users/techs", data, {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    })
    .then((res) => {
      const newData = {
        id: res.data.id,
        title: data.title,
        status: data.status
      }
      setTechs([...techs, newData])
    })
  }

  return(
    <ModalContainer>
      <Modal>
        <ModalHeader>
          <p className="newTech">Cadastrar Tecnologia</p>
          <button onClick={handleClose} className="btnCloseModal">X</button>
        </ModalHeader>
        <NewTechForm onSubmit={handleSubmit(onSubmitFunction)}>
          <label className="LabelModal">Nome <span> {errors.title?.message}</span></label>
          <ThemeInput 
          placeholder="Nome da tecnologia"
          {...register("title")}
          />
          <label className="LabelModal">Selecionar status</label>
          <ThemeSelect
          {...register("status")}
          >
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </ThemeSelect>
          <ThemeButton onClick={handleSubmit} background={"color-primary"}>Cadastrar Tecnologia</ThemeButton>
        </NewTechForm>
      </Modal>
    </ModalContainer>
  );
}

export default ModalAddTech;