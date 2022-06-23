import Routes from "./routes";
import { GlobalStyle } from "./styles/global.js";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useState } from "react";

function App() {
  const CloseButton = ({ closeToast }) => (
   <button style={{color: "#868E96", border: "none", height: "10px", backgroundColor: "#343B41"}}>X</button>
  );

  const [ user, setUser ] = useState(false);

  const [ token, setToken ] = useState(JSON.parse(localStorage.getItem("@Kenziehub:token")) || false);

  const [ userId, setUserId ] = useState(localStorage.getItem("@Kenziehub:id") || false);

  const [ techs, setTechs ] = useState([])

  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer
        closeButton={CloseButton}
        toastStyle={{ backgroundColor: "#343B41", color: "#F8F9FA", fontWeight: "700"}}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes techs={techs} setTechs={setTechs} user={user} token={token} userId={userId} setUser={setUser} setToken={setToken} setUserId={setUserId}/>
    </div>
  );
}

export default App;
