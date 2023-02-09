import {BrowserRouter,Routes,Route} from "react-router-dom"
import App from "./App"
import User17 from "./User17"
import User29App from "./User29App"
export default function User29(){
    return(
        <>
        <h1>29 React Route   </h1>
       
        <BrowserRouter> 
        <User29App/>
        <Routes>
            <Route path="/user17" element={User17}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}