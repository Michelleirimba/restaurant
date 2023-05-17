import React from 'react';

const StylesComponent=() =>{
    return(
        <div>
      <h1 style={{...styles.red, ...styles.fsl}}>hello world!</h1>
      <h3 style={styles.text}>some random text</h3>
      <img src='/pattern-background-desktop.svg' alt='pattern'/>
        </div>
    )
}

const styles = {
    red: {
      color: 'red',
      backgroundColor: 'black',
      border:' 5px solid red',
    },
    fsl:{
      fontSize: '12em'
    },
    text:{
      color:'green'
    }
  }

export default StylesComponent