import galleryStyles from '../styles/gallery.module.css'
import Card from 'react-bootstrap/Card';
import React from 'react';

export default function Gallery(props){
        return(
            <a href={props.url} style={{textDecoration:"none", color:"black"}}>
                <div className="col">
                <Card className={galleryStyles.main_gallery}>
                    <Card.Img variant="top" src={props.image}/>
                    <Card.Body>
                        <Card.Title>{props.heading}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
            </a>
        )
}