import React,{useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import restaurantsApi from '../api/restaurants';
import SearchIcon from '@mui/icons-material/Search';
import RestaurantCards from '../components/RestaurantCards';

const Home =() =>{
    const [restaurants, setRestaurants]= useState([])
    const getRestaurants= async() => {
        try{
            const {data} =await restaurantsApi.get('/')
            setRestaurants(data.businesses)
            console.log(data)
        }catch(error){
            console.log(error)
        }
       
    }
    const filterByPrice = (price) =>{
      return restaurants.filter((restaurant) => restaurant.price ===price)
    }

    useEffect(()=>{
        getRestaurants()
    },[])

    return(
    <div style={styles.container}>
        <h1 style={styles.text1}>Kwetu Lounge</h1>
        <img style={styles.img1} src='Rectangle 5.png' alt='food'/>

        <div style={styles.icon}>
            <input style={styles.text2} placeholder="Search restaurant name" type='text'/>
            <SearchIcon  style={styles.searchicon}/>
        </div>

        <Container>
            <RestaurantCards restaurants={filterByPrice('$')} categoryName='Pocket friendly'/> 
            <RestaurantCards restaurants={filterByPrice('$$')} categoryName='Moderate'/>
            <RestaurantCards restaurants={filterByPrice('$$$')} categoryName='Pricey'/> 
      </Container> 
    
    </div>
    )
} 

const styles={
    text1:{
        marginLeft: '50px',
        paddingTop: '15px'
    },
    img1:{
        height: '400px',
        width: '1250px',
        marginLeft: '50px',
        marginRight: '50px'
    },
    text2:{
        marginTop: '-30px',
        border: '2px solid grey',
        padding: '10px 15px',
        width: '80%',
        fontSize: '20px',
        borderRadius: '8px'
     },
    text3:{
        marginLeft: '50px',
        fontWeight: '400',
        fontSize: '25px',
        paddingTop: '35px'
    },
    categories:{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '20px'
    },
    icon:{
        display: 'flex',
        justifyContent: 'center'
    },
    searchicon:{
        display: 'block',
        marginLeft: '-42px',
        marginTop: '-15px',
        height: '30px'
    }
    
}

export default Home