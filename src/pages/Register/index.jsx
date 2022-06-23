import { ThemeButton } from "../../components/ThemeButton/style";
import { ThemeInput } from "../../components/ThemeInput/style";
import { Container, FormRegister, InputContainer } from "./style";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ThemeSelect } from "../../components/ThemeSelect/style";
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import api from "../../services";

function Register() {
  const history = useHistory()

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório").matches(/^[a-zA-Z ]{1,}$/, "Contêm caracteres inválidos"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória").min(6, "Mínimo 6 caracteres"),
    confirmPassword: yup.string().required("Repita sua senha").oneOf([yup.ref("password")], "Senhas diferentes"),
    bio: yup.string(),
    contact: yup.string().required("Contato obrigatória"),
    course_module: yup.string()
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  
  function onSubmitFunction(data) {
    const newUser = {
      name: data.name,
      email: data.email,
      password: data.password,
      bio: data.bio,
      contact: data.contact,
      course_module: data.course_module
    }
    api.post("/users", newUser)
    .then((_) => toast.success("Conta criada com sucesso!"))
    .then((_) => history.push("/"))
    .catch((err) => console.log(err))
  }

  function HandleGoHome() {
    history.push("/")
  }
  
  return(
    <Container>
      <div className="tittle-container">
        <h1>Kenzie Hub</h1>
        <button onClick={HandleGoHome}>Voltar</button>
      </div>
      <FormRegister onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Crie sua conta</h2>
        <p>Rapido e grátis, vamos nessa</p>
        <InputContainer>
          <label>Nome<span> {errors.name?.message}</span></label>
          <ThemeInput 
          placeholder="Digite aqui seu nome"
          {...register("name")}
          />
        </InputContainer>
        <InputContainer>
          <label>Email<span> {errors.email?.message}</span> </label>
          <ThemeInput 
          placeholder="Digite aqui seu email"
          {...register("email")}
          />
        </InputContainer>
        <InputContainer>
          <label>Senha<span> {errors.password?.message}</span> </label>
          <ThemeInput 
          placeholder="Digite aqui sua senha"
          type={"password"}
          {...register("password")}
          />
        </InputContainer>
        <InputContainer>
          <label>Confirmar Senha<span> {errors.confirmPassword?.message}</span> </label>
          <ThemeInput 
          placeholder="Repita sua senha"
          type={"password"}
          {...register("confirmPassword")}
          />
        </InputContainer>
        <InputContainer>
          <label>Bio<span> {errors.bio?.message}</span> </label>
          <ThemeInput 
          placeholder="Fale sobre você"
          {...register("bio")}
          />
        </InputContainer>
        <InputContainer>
          <label>Contato<span> {errors.contact?.message}</span> </label>
          <ThemeInput 
          placeholder="Opção de contato"
          {...register("contact")}
          />
        </InputContainer>
        <InputContainer>
          <label>Selecionar módulo</label>
          <ThemeSelect
          {...register("course_module")}
          >
            <option>Primeiro módulo</option>
            <option>Segundo módulo</option>
            <option>Terceiro módulo</option>
          </ThemeSelect>
        </InputContainer>
        <ThemeButton onClick={handleSubmit} background={"color-primary"}>Cadastre-se</ThemeButton>
      </FormRegister>
    </Container>
  );
}

export default Register;