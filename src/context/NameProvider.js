import React from "react";
import NameContext from "./NameContext";

const NameProvider=(props)=>{
    const name="rohan";
    const logged="Yes";

    return(
        <NameContext.Provider value={{
            name:name,
            logged:logged
        }}>
            {props.children}
        </NameContext.Provider>
    )
}
export default NameProvider;