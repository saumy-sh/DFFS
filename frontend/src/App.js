import {Register} from "./components/Register"
import {SignUp} from "./components/signUp"
import { Login } from "./components/LogIn";
import { Firs } from "./components/Records";
import { Navbar } from "./components/Navbar";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Register/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/firs" element={<Firs/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
