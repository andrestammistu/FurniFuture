import Header from './header.js'
import Footer from './footer.js'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Gallery from './gallery.js';
import Contact from './contact.js'
import VideoPlayer from './VideoPlayer'
import galleryStyles from '../styles/gallery.module.css'



export default function Layout(){

    return(
        <div>
            <Header></Header>

            <main>
                <div style={{height: "calc(100vh - 70px)", overflow: "hidden"}}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/images/living-room.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/images/dog_couch.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>

                <Container>

                    
                    <div className={galleryStyles.gallerymargin}>
                        <div className="row row-cols-1 row-cols-md-3 g-6">
                                <Gallery></Gallery>
                        </div>
                    </div>

                    <Contact></Contact>
                    <VideoPlayer></VideoPlayer>
                        
                </Container>
            </main>

            <Footer></Footer>

        </div>
    )
}
