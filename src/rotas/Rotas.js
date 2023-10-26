import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../paginas/login/Login"

function Rotas(){

    return(
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    )
}

export default Rotas