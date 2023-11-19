import LoginPage from "./Pages/LoginPage";
import NotesPage from "./Pages/NotesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import SignUpPage from "./Pages/SignUpPage";
import LogoutPage from "./Pages/LogoutPage";import Header from "./components/Header";
;

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element = {<RequireAuth><NotesPage/></RequireAuth>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/logout" element={<LogoutPage/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;