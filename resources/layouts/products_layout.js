import Header from "../components/header.js"
import NavItems from "../components/nav.js"
import React from "react"
import Footer from "../components/footer.js"
import Filter from "../components/filter.js"
import { useRouter } from "next/dist/client/router"
import ProductsGallery from "../components/products_gallery"


export default function Layout(){
    const router = useRouter();
    return(
        <div>
            <Header/>
            <div style={{display:"flex", marginTop:"30px"}}>
                <NavItems/>
                <div style={{width:"80%", marginLeft:"20px"}}>
                    <h1>{router.query.subcategory}</h1>
                    <Filter/>
                    <div className="row row-cols-1 row-cols-md-3 g-6" >
                        <ProductsGallery price="11.4" body="Kalea pakub ülimat mugavust." image={"/images/sofa.png"} heading="Tool" url={'/product/1'}/>
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