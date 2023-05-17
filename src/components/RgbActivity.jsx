import React, {useState} from 'react';

const RbgActivity=()=>{
    const[red, setRed]= useState(0)
    const[green, setGreen]= useState(0)
    const[blue, setBlue]= useState(0)

    const addRed= ()=>{
        setRed(red+10)
    }
    const minusRed= ()=>{
        setRed(red-10)
    }

    const addGreen=()=>{
        setGreen(green+10)
    }
    const minusGreen=()=>{
        setGreen(green-10)
    }
    const addBlue=()=>{
        setBlue(blue+10)
    }
    const minusBlue=()=>{
        setBlue(blue-10)
    }
    return(
        <div >
        <div style={{height:'100px',width:'200px', backgroundColor:`rgb(${red},${green},${blue})`}}></div>
            <div style={styles.text2}>
            <div >
            <p style={styles.text}>Red</p>
            <button onClick={addRed}>+</button>
            <button onClick={minusRed}>-</button>
            </div>
            <div>
            <p style={styles.text}>Green</p>
            <button onClick={addGreen}>+</button>
            <button onClick={minusGreen}>-</button>
            </div>
            <div>
            <p style={styles.text}>Blue</p>
            <button onClick={addBlue}>+</button>
            <button onClick={minusBlue}>-</button>
            </div>
            </div>
        </div>
    )
}

const styles={
    text:{
        fontSize:'30px',
        color: 'black',
        display: 'block'
    },
    text2:{
        display:'flex',
        justifyContent:'spaceAround'
    }
}

export default RbgActivity