import Header from "./header.js"
import Accordion from "./accordion.js"
import Gallery from "./gallery.js"
import galleryStyles from '../styles/gallery.module.css'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


export default function Layout(){
    return(
        <div>
            <Header></Header>
            <div>
                <Accordion></Accordion>
                <div className={galleryStyles.gallerymargin} style={{width:"80%"}}>
                    <div className="row row-cols-1 row-cols-md-3 g-6">
                            <Gallery></Gallery>
                            <Gallery></Gallery>
                            <Gallery></Gallery>
                            <Gallery></Gallery>
                            <Gallery></Gallery>
                            <Gallery></Gallery>
                    </div>
                </div>
            </div>

        </div>
    )
}