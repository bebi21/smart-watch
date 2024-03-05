import { Route, Routes } from "react-router-dom";
import "./App.css";
//import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Menu from "./pages/Menu/Menu";
import Event from "./pages/Event/Event";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Index from "./layout/Index";
import ButtonCustom from "./components/Button/Button";

function App() {
  return (
    <>
      {" "}
      <Routes>
        <Route path='/begin' element={<ButtonCustom />} />
        <Route path='/' element={<Index />}>
          <Route path='about' element={<About />}></Route>
          <Route path='services' element={<Services />}></Route>
          <Route path='event' element={<Event />}></Route>
          <Route path='menu' element={<Menu />}></Route>
          <Route path='contact' element={<Contact />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
