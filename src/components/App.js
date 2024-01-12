import React from "react";
import ContextReducer from "./ContextReducer";
import NameProvider from "../context/NameProvider";


const App=()=>{
    return(
        <NameProvider>
            <ContextReducer/>
        </NameProvider>   
    )
}
export default App

