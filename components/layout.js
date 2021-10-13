import styles from './layout.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from './header.js'
import Footer from './footer.js'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';


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


                    <Carousel> {/*style="height: calc(100vh - 70px); overflow: hidden;" */}
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/images/living-room.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/images/dog_couch.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>


                    <Container>
                        <div class=" gallerymargin">
                            <div class="row row-cols-1 row-cols-md-3 g-6">
                                <div class="col">
                                    <div>
                                        <Image 
                                            src="/images/sofa.png" 
                                            class="card-img-top main_gallery" 
                                            width="100"
                                            height="100%"
                                            alt="#"/>
                                        <div class="card-body">
                                            <h5 class="card-title">Elutuba</h5>
                                        </div>
                                    </div>
                                </div>

                                <div class="col">
                                    <div>
                                        <Image 
                                            src="/images/esimene.jpg" 
                                            class="card-img-top main_gallery"
                                            width="100"
                                            height="100%" 
                                            alt="#"/>
                                        <div class="card-body">
                                            <h5 class="card-title">Magamistuba</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div>
                                        <Image 
                                            src="/images/table.png" 
                                            class="card-img-top main_gallery" 
                                            width="100"
                                            height="100%"
                                            alt="laud"/>
                                        <div class="card-body">
                                            <h5 class="card-title">Kontor</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div>
                                        <Image 
                                            src="/images/chair-example.png" 
                                            class="card-img-top main_gallery" 
                                            width="100"
                                            height="100%"
                                            alt="tool"/>
                                        <div class="card-body">
                                            <h5 class="card-title">Köök</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div>
                                        <Image 
                                            src="/images/esimene.jpg" 
                                            class="card-img-top main_gallery" 
                                            width="100"
                                            height="100%"
                                            alt="..."/>
                                        <div class="card-body">
                                            <h5 class="card-title">Vannituba</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div>
                                        <Image 
                                            src="/images/esimene.jpg" 
                                            class="card-img-top main_gallery" 
                                            width="100"
                                            height="100%"
                                            alt="..."/>
                                        <div class="card-body">
                                            <h5 class="card-title">Sisekujundus</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            


                            <div class="about-section padding-top-50">
                                <h1 id="">Meie liikmed</h1> {/*style="text-align:center*/}
                                <p>&nbsp;</p>
                                <div class="row row-cols-1 row-cols-md-4 g-4">
                                    <div class="col">
                                        <div class="card contactcard h-100">
                                            <Image 
                                                src="/images/icon.jpg" 
                                                width="100%"
                                                height="100%"
                                                alt="Harri"/>
                                            <div class="container">
                                                <h2>Harri Liimann</h2>
                                                <p class="title">Arhitekt</p>
                                                <p>harri.liimann@furnifuture.com</p>
                                                <p><button class="button">Contact</button></p>
                                            </div>
                                        </div>
                                    </div>              
                                                
                                    <div class="col">
                                        <div class="card contactcard h-100">
                                            <Image 
                                                src="/images/icon.jpg" 
                                                width="100%"
                                                height="100%"
                                                alt="Andres"/>
                                            <div class="container">
                                                <h2>Andres Tammistu</h2>
                                                <p class="title">Analüütik</p>
                                                <p>andres.tammistu@furnifuture.com</p>
                                                <p><button class="button">Contact</button></p>
                                            </div>
                                        </div>
                                    </div>
                        
                                    <div class="col">
                                        <div class="card contactcard h-100">
                                            <Image 
                                                src="/images/icon.jpg" 
                                                width="100%"
                                                height="100%"
                                                alt="Ingela"/>
                                            <div class="container">
                                                <h2>Ingela Rohusaar</h2>
                                                <p class="title">Programmeerija</p>
                                                <p>ingela.rohusaar@furnifuture.com</p>
                                                <p><button class="button">Contact</button></p>
                                            </div>
                                        </div>
                                    </div>
                        
                                    
                                    <div class="col">
                                        <div class="card contactcard h-100">
                                            <Image 
                                                src="/images/icon.jpg" 
                                                width="100%"
                                                height="100%"
                                                alt="Rasmus"/>
                                            <div class="container">
                                                <h2>Rasmus Sokk</h2>
                                                <p class="title">Programeerija praktikant</p>
                                                <p>rasmus.sokk@furnifuture.com</p>
                                                <p><button class="button">Contact</button></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Container>
            </main>


            <Footer></Footer>

        </div>
    )
}
