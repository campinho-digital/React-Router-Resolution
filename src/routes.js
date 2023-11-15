import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Infos from "./Pages/Infos/Infos";
const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/info" element={<Infos />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
