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
import ProductsGallery from "./products_gallery"


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
                    <div className="row row-cols-1 row-cols-md-3 g-6">
                        <ProductsGallery price="11.4" body="Kalea pakub ülimat mugavust." image={"/images/sofa.png"} heading="Tool"/>
                        <ProductsGallery price="11.4" body="Kalea pakub ülimat mugavust." image={"/images/sofa.png"} heading="Tool"/>
                        <ProductsGallery price="11.4" body="Kalea pakub ülimat mugavust." image={"/images/sofa.png"} heading="Tool"/>
                        <ProductsGallery price="11.4" body="Kalea pakub ülimat mugavust." image={"/images/sofa.png"} heading="Tool"/>
                        <ProductsGallery price="11.4" body="Kalea pakub ülimat mugavust." image={"/images/sofa.png"} heading="Tool"/>
                        <ProductsGallery price="11.4" body="Kalea pakub ülimat mugavust." image={"/images/sofa.png"} heading="Tool"/>
                    </div>
                </div>
            </div>
            <Footer/>

        </div>
    )
}