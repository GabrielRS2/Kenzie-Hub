import { Link, useHistory } from "react-router-dom";
import { ThemeButton } from "../../components/ThemeButton/style";
import { ThemeInput } from "../../components/ThemeInput/style";
import { Container, FormLogin, InputContainer } from "./style";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import api from "../../services";

function Login({ setUser, setToken, setUserId, setTechs}) {

  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("Informe seu email").email("Email inválido"),
    password: yup.string().required("Senha obrigatória")
    .min(6, "Senha incorreta")
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  
  function onSubmitFunction(data) {
    api.post("/sessions", data)
    .then((res) => {
      setToken(res.data.token)
      setUserId(res.data.user.id)
      setUser(res.data.user)
      setTechs(res.data.user.techs)
      localStorage.setItem("@Kenziehub:token", JSON.stringify(res.data.token))
      localStorage.setItem("@Kenziehub:id", JSON.stringify(res.data.user.id))
    })
    .then((_) => history.push("/dashboard"))
    .catch((err) => console.log(err))
  }

  function handleGoRegister() {
    history.push("/register")
  }
  
  return(
    <Container>
      <h1>Kenzie Hub</h1>
      <FormLogin onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Login</h2>
        <InputContainer>
          <label>Email<span> {errors.email?.message}</span></label>
          <ThemeInput 
            placeholder="Email"
            {...register("email")}
          />
        </InputContainer>
        <InputContainer>
          <label>Senha <span> {errors.password?.message}</span> </label>
          <ThemeInput 
            placeholder="Senha"
            type={"password"}
            {...register("password")}
          />
        </InputContainer>
        <ThemeButton onClick={handleSubmit} background={"color-primary"}>Entrar</ThemeButton>
        <Link to="/register">Ainda não possui uma conta?</Link>
        <ThemeButton onClick={handleGoRegister}>Cadastre-se</ThemeButton>
      </FormLogin>
    </Container>
  );
}

export default Login;