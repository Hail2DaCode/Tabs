import React, { useState } from 'react';
import StyledBtn from './StyleBtn';

const Tabs = (props) => {
    const [content, setContent] = useState("");
    const [id, setId] = useState("set");
    const handleClick = (e, val) => {setId(val);setContent(e.target.value) }

    
    return (
        <>
            <div className="tabBar">
            {
                props.items.map((item,index) => <StyledBtn bgColor={id==index? "black": "blueviolet"} animation={id==index?"clicked":""} duration={id==index?"4s":""} key={index} value={item.content} onClick={ (e) => { handleClick (e,index)}} >{item.label}</StyledBtn>)
                // <StyledBtn bgColor="blueviolet" animation="" duration="" key={index} value={item.content} onClick={ (e) => { handleClick (e,index)}}>{item.label}</StyledBtn>})
                // <button type="button" className="btn" style={index == id? {backgroundColor:"black"}: {backgroundColor:"blueviolet"}} key={index} value={item.content} onClick={ (e) => { handleClick (e,index)}}>{item.label}</button>)
            }
        </div>
        <div className="contentBar" >
            { content != ""? <p>{content}</p>: <p>Please select a tab!</p>}
            
            
        </div>
        </>
        
    );
}

export default Tabs;