import Header from "./header.js"
import NavItems from "./nav.js"
import Gallery from "./gallery.js"
import galleryStyles from '../styles/gallery.module.css'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from 'react-bootstrap/Card';
import React from "react"


export default class Layout extends React.Component{
    render(){
        return(
            <div>
                <Header></Header>
                <div style={{display:"flex", marginTop:"30px"}}>
                    <NavItems/>
                    <div style={{width:"80%", marginLeft:"20px"}}>
                        <h1>Uued tooted</h1>
                        <div className="row row-cols-1 row-cols-md-3 g-6">
                                <Gallery image={"/images/sofa.png"} heading="Elutuba"/>
                                <Gallery image={"/images/sofa.png"} heading="Magamistuba"/>
                                <Gallery image={"/images/table.png"} heading="Kontor"/>
                                <Gallery image={"/images/chair-example.png"} heading="Köök"/>
                                <Gallery image={"/images/sofa.png"} heading="Vannituba"/>
                                <Gallery image={"/images/sofa.png"} heading="Sisekujundus"/>
                        </div>
                    </div>
                </div>
    
            </div>
        )
    }
    
}