import Header from '../components/header.js'
import Footer from '../components/footer.js'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Gallery from '../components/gallery.js';
import Contact from '../components/contact.js'
import VideoPlayer from '../components/VideoPlayer'
import galleryStyles from '../../styles/gallery.module.css'



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
                            <Gallery image={"/images/sofa.png"} heading="Elutuba" url="/products"/>
                            <Gallery image={"/images/esimene.jpg"} heading="Magamistuba" url="/products"/>
                            <Gallery image={"/images/table.png"} heading="Kontor" url="/products"/>
                            <Gallery image={"/images/chair-example.png"} heading="Köök" url="/products"/>
                            <Gallery image={"/images/esimene.jpg"} heading="Vannituba" url="/products"/>
                            <Gallery image={"/images/esimene.jpg"} heading="Sisekujundus" url="/products"/>
                        </div>
                    </div>

                    <Contact></Contact>
                    <VideoPlayer src={"https://player.vimeo.com/video/611482353?h=ce441b7891&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479;autoplay:1"} 
                                title="Furnifuture video">
                    </VideoPlayer>
                        
                </Container>
                
            </main>

            <Footer></Footer>

        </div>
    )
}
