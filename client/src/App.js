import { Routes, Route } from "react-router-dom";
import { Topbar } from "./components";
import { Login, Register, Settings, Write, Home, Single, About, Contact } from "./pages";
import { useContext } from "react";
import { context } from "./context/Context";


function App() {
  const { user } = useContext(context);

  return (
    <>
       <Topbar/>
       <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={user ? <Home/> :<Login/>}/>
          <Route exact path="/register" element={user ? <Home/> : <Register/> }/>
          <Route exact path="/settings" element={!user ? <Login/> :<Settings/>}/>
          <Route exact path="/write" element={!user ? <Login/> : <Write/>}/>
          <Route exact path="/post/:postId" element={!user ? <Login/> :<Single/>}/>
          <Route exact path="/about" element={!user ? <Login/> :<About/>}/>
          <Route exact path="/contact" element={!user ? <Login/> :<Contact/>}/>
       </Routes>
    </>
  );
}

export default App;
