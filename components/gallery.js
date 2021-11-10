import galleryStyles from '../styles/gallery.module.css'
import Card from 'react-bootstrap/Card';
import React from 'react';

export default class Gallery extends React.Component{
    render(){
        return(
            <a href={this.props.url} style={{textDecoration:"none", color:"black"}}>
                <div className="col">
                <Card className={galleryStyles.main_gallery}>
                    <Card.Img variant="top" src={this.props.image}/>
                    <Card.Body>
                        <Card.Title>{this.props.heading}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
            </a>
        )
    }
    
}