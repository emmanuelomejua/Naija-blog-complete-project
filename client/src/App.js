import { Routes, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import About from "./pages/about/About";
import Contact from './pages/contact/Contact'
import { useContext } from "react";
import { context } from "./context/Context";


function App() {
  const {user} = useContext(context);

  return (
    <>
       <Topbar/>
       <Routes>
          <Route exact path="/" element={!user ? <Login/> : <Home/>}/>
          <Route exact path="/login" element={!user ? <Login/>: <Home/>}/>
          <Route exact path="/register" element={!user ? <Register/> : <Home/>}/>
          <Route exact path="/settings" element={<Settings/>}/>
          <Route exact path="/write" element={!user ? <Login/> : <Write/>}/>
          <Route exact path="/post/:postId" element={!user ? <Login/> :<Single/>}/>
          <Route exact path="/about" element={!user ? <Login/> :<About/>}/>
          <Route exact path="/contact" element={!user ? <Login/> :<Contact/>}/>
       </Routes>
    </>
  );
}

export default App;
