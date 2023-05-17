import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useNavigate} from 'react-router-dom'


const RestaurantCards = ({restaurants, categoryName}) =>{
    let navigate = useNavigate();
    
    return(
        <div>
            <h2>{categoryName}</h2>
            <Row xs={1} md={3} className="g-4">
            {
                restaurants.map((restaurant) =>{
                    return(
                    <Col key={restaurant.id} onClick={()=>navigate(`/${restaurant.id}`)}>
                        <Card>
                        <Card.Img variant="top" src={restaurant.image_url} style={styles.img2} />
                        <Card.Body>
                            <Card.Title>{restaurant.name}</Card.Title>
                            <div style={styles.categories}>
                                <p>{restaurant.rating} Stars</p>
                                <p>{restaurant.review_count} reviews</p>
                            </div>
                        </Card.Body>
                        </Card>
                    </Col>
                    )
                })
            }
            </Row>
        </div>
    )
    
}
const styles={
    img2:{
        height:'200px'
    }
}
export default RestaurantCards