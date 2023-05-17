import React, {useState} from 'react';

const UseStateComponent=() =>{
    const [counter, setCounter]= useState(0)
    const [name, setName]= useState('')
    const [lastname, setName2] =useState('') 
    const [userDetails, setUserDetails]= useState({
        firstName: '', lastName:'', email:'', phoneNumber:'', password:'', country:''
    })
    const addCounter = () =>{
        setCounter(counter+1)
    }
    const minusCounter = () =>{
        setCounter(counter-1)
    }
    return(
        <div>
      <button onClick={addCounter}>+</button>
      <p>{counter}</p>
      <button onClick={minusCounter}>-</button>
      <form>
        <input placeholder='Add name' type='text' onChange= {(e)=>{
          setName(e.target.value)
        }}/>
        <input placeholder='last name' type='text' onChange= {(e)=>{
            setName2(e.target.value)
        }}/>
        <p>Hello {name} {lastname}</p>
      </form>
      <form>
      <input placeholder='First name' type='text'
      onChange={(e)=> setUserDetails({...userDetails, firstName:e.target.value})
      }/> 
      <p>{userDetails.firstName}</p>
      <input placeholder='Last name' type='text'
      onChange={(e)=> setUserDetails({...userDetails, lastName:e.target.value})
    }/>
    <p>{userDetails.lastName}</p>
      <input placeholder='Email' type='email'
      onChange={(e)=> setUserDetails({...userDetails, email:e.target.value})}
      />
      <p>{userDetails.email}</p>
      <input placeholder='Phone number' type='number'
      onChange={(e)=> setUserDetails({...userDetails, phoneNumber:e.target.value})}
       />
       <p>{userDetails.phoneNumber}</p>
      <input placeholder='Password' type='text'
      onChange={(e)=> setUserDetails({...userDetails, password:e.target.value})}
      />
      <p>{userDetails.password}</p>
      <input placeholder='Country' type='text'
      onChange={(e)=> setUserDetails({...userDetails, country:e.target.value})}
      />
      <p>{userDetails.country}</p>
      </form>
        </div>
    )
}

export default UseStateComponent