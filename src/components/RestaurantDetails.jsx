import React, {useEffect, useState} from 'react';
import {useParams } from 'react-router-dom';
import restaurantsApi from '../api/restaurants';
import Carousel from 'react-bootstrap/Carousel';

const RestaurantDetails=()=> {
    let { id }= useParams();
    const[restaurant,setRestaurants]=useState({})
    console.log(id)

     
        const getRestaurants = async()=> {
            const {data} = await restaurantsApi.get( `/${id}`)
            console.log(data);
            setRestaurants(data)
        }
        const getDay=(day)=>{
            if(day===0){
                return 'Sunday'}
            if(day===1){
                return 'Monday'}
            if(day===2){
                return 'Tuesday'}  
            if(day===3){
                return 'Wednesday'}
            if(day===4){
                return 'Thursday'} 
            if(day===5){
                return 'Friday'}  
            if(day===6){
               return 'Saturday'}               
            
        }
        const getTime=(time)=>{
            return time.replace(/(..)/g, '$1:').slice(0,-1)
        }


    useEffect(()=>{
        getRestaurants()
    },[])
  if(!restaurant.photos){
    return(
        <p>Loading</p>
    )
   }

    return(
        <div>
    <Carousel style={styles.img}>
        <Carousel.Item>
            <img
            
             className="d-block w-100"
            src={restaurant.photos[0]}
            alt="First slide"
            />
            <Carousel.Caption>
                <h3>{restaurant.name}</h3>
                <p>
                    {
                        restaurant.categories.map((category)=>category.title + ', ')
                    }
                </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={restaurant.photos[1]}
            alt="Second slide"
            />

            <Carousel.Caption>
                <h3>{restaurant.name}</h3>
                <p>
                {
                        restaurant.categories.map((category)=>category.title + ', ')
                    }
                </p>
            </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
            <img
            className="d-block w-100"
            src={restaurant.photos[2]}
            alt="Third slide"
            />

            <Carousel.Caption>
                <h3>{restaurant.name}</h3>
                <p>
                {
                        restaurant.categories.map((category)=>category.title + ', ')
                    }   
                </p>
            </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div style={styles.time}>
        {
         restaurant.hours[0].open.map((opn)=>{
            return(
            <div style={styles.box}>
                    <p>{getDay(opn.day)}</p>
                    <div style={styles.time2}>
                    <p>{getTime(opn.start)} - {getTime(opn.end)}</p>
                    </div>
            </div> 
                )
            })
        }
       
        

    </div>
        </div>
    )
} 
const styles={
    time:{
        display:'flex',
        justifyContent: 'space-around',
        backgroundColor: 'grey'
    },
    box:{
        border:'2px solid black',
        // height: '45px',
        width: '150px',
        borderRadius: '20px',
        display: 'block',
        backgroundColor: 'white',
        textAlign: 'center'
    },
    time2:{
     display: 'flex',
     justifyContent: 'center'
    },
    img:{
        height:'100vh'
    }
}

export default RestaurantDetails