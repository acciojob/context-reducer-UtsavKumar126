import React from "react";
import { useContext,useState } from "react";
import NameContext from "../context/NameContext";


const ContextReducer=()=>{

    const {name,logged}=useContext(NameContext);
    const [login,setLogin]=useState(false);
    const [item,setItem]=useState("");
    const [list,setList]=useState([]);

    function addItem(){
        setList([...list,item]),
        setItem("");
    }
    function remove(e){
        setList(list.filter((ele)=>ele!=e))
    }

    return(
        <div>
            {
              login?<h2 id="current-user">Current user:{name}, isAuthenticated: {logged}</h2>:<h2 id="current-user">Current user:, isAuthenticated: No</h2>
            }
            <button id="login-btn" onClick={()=>setLogin(true)}>Login</button>
            <button id="signout" onClick={()=>setLogin(false)}>SignOut</button>
            <input id="shopping-input" onChange={(e)=>setItem(e.target.value)} value={item}/>
            <button onClick={addItem}>Add</button>
            <div>
                {
                    list.map((ele)=>
                    <div>
                        <p id={`item-${ele}`}>{ele}</p>
                        <button id={`remove-${ele}`} onClick={()=>remove(ele)}>Delete</button>
                    </div>    
                    )
                }
            </div>
            <button id="clear-list" onClick={()=>setList([])}>Clear List</button>

        </div>
    )
}
export default ContextReducer;