import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

const App=()=>{
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
        </Routes>
    );


};
export default App;