import Header from "./header.js"
import NavItems from "./nav.js"
import Gallery from "./gallery.js"
import galleryStyles from '../styles/gallery.module.css'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from 'react-bootstrap/Card';
import React from "react"
import Footer from "./footer.js"
import Filter from "./filter.js"
import { useRouter } from "next/dist/client/router"


export default function Layout(){
    const router = useRouter();
    return(
        <div>
            <Header/>
            <div style={{display:"flex", marginTop:"30px"}}>
                <NavItems/>
                <div style={{width:"80%", marginLeft:"20px"}}>
                    <h1>{router.query.category}</h1>
                    <Filter/>
                    {/* <div className="row row-cols-1 row-cols-md-3 g-6">
                            <Gallery image={"/images/sofa.png"} heading="Elutuba"/>
                            <Gallery image={"/images/sofa.png"} heading="Magamistuba"/>
                            <Gallery image={"/images/table.png"} heading="Kontor"/>
                            <Gallery image={"/images/chair-example.png"} heading="Köök"/>
                            <Gallery image={"/images/sofa.png"} heading="Vannituba"/>
                            <Gallery image={"/images/sofa.png"} heading="Sisekujundus"/>
                    </div> */}
                    
                </div>
            </div>
            <Footer/>

        </div>
    )
}