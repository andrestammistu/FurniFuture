import styles from './layout.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from './header.js'
import Footer from './footer.js'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Gallery from './gallery.js';
import Contact from './contact.js'


export default function Layout(){
    return(
        <div>
            <Head>
                <title>FurniFuture</title>
                <link 
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
                    rel="stylesheet" 
                    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
                    crossorigin="anonymous">
                </link>
                <script 
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
                    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
                    crossorigin="anonymous">
                </script>
            </Head>


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
                        
                        <Gallery></Gallery>
                        <Contact></Contact>

                            {/* <div id="popup-form">
                                    <h1>LOGI SISSE</h1>
                                    <form>
                                        <label for="email">Email</label><br/>
                                        <input type="email" name="email"><br/><br/>
                                        <label for="parool">Parool</label><br/>
                                        <input type="password" name="parool"><br/><br/>
                                        <input type="submit">
                                    </form>
                                    <button>Või registreeri</button>
                                </div>
                            
                                <div className="padding-top-50">
                                <h1 id="tooted" href="#tooted" style="text-align:center">Meie Tooted</h1>
                                <div style="padding:75% 0 0 0;position:relative;">
                                        <iframe src="https://player.vimeo.com/video/611482353?h=ce441b7891&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479;autoplay:1" 
                                            frameborder="0" 
                                            allow="autoplay; fullscreen; picture-in-picture" 
                                            allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:50%;align-content: center;" 
                                            title="Trailer.mp4">
                                        </iframe>
                                    </div><script src="https://player.vimeo.com/api/player.js"></script>
                                </div>
                            
                            
                                {/* <script>
                                    function open_form(){
                                        document.getElementById("popup-form").style.display ="block";
                                        //document.body.style.opacity = 0.5;
                                    }
                                </script> */} 
                                
                    </Container>
            </main>


            <Footer></Footer>

        </div>
    )
}
