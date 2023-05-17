import React, {useState, useEffect} from 'react';
import axios from 'axios'

const UseEffectComponent=() =>{
    const[img, setImg]= useState('')
    const getDogImage=()=>{
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(({data})=> setImg(data.message))
        .catch((error)=> console.log(error))
    }
    


    const [name, setName]= useState('')
    const [img2, setImg2]= useState('')
    const getCharacters=()=>{ 
        axios.get(`https://api.disneyapi.dev/character/${Math.floor(Math.random()* 8000)}`)
         .then(({data}) => {
            setName(data.data.name)
            setImg2(data.data.imageUrl)}
            )
        .catch((error)=> console.log(error))
    }

    useEffect(()=>{
        getDogImage()
        getCharacters()
    }, [])

    return(
        <div >
            <div style={styles.dog}>
         <img alt="dog" src={img} style={styles.img}/>
         <button onClick={getDogImage}>Click here!</button> 
         </div>
         <p>{name}</p>
          <img alt="characters" src={img2}/> 
        </div>
    )
}
const styles={
    dog:{
    display: 'block'
    },
  img:{
    height: '300px',
    width: '250px',
    display: 'block'
  }
}

export default UseEffectComponent
