import React, {useState,useEffect} from 'react';
import countriesApi from '../api/countries';
import Table from 'react-bootstrap/Table';

const Countries=()=>{
    const [countries, setCountries]= useState([])
    const getCountries = async() => {
    try{
        const {data} = await countriesApi.get('/')
        setCountries(data)
        console.log(data)
    }catch(error){
        console.log(error)
    }

 }


    useEffect(()=>{
        getCountries()
    },[])


    return(
    <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Continent</th>
          <th>Sub region</th>
          <th>Country</th>
          <th>Capital</th> 
        </tr>
      </thead>
      {
        countries.map((country)=>{
            return(
              <tbody>
                <tr>
                  <td>{country.continents}</td>
                  <td>{country.subregion}</td>
                  <td>{country.name.official}</td>
                  <td>{country.capital}</td>
                  
                </tr>  
              </tbody>
            )
        })
      }
      
    </Table>  

    </div>
    )
}

export default Countries