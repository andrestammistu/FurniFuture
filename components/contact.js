import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Contact(){
    return(
        <div className="gallerymargin">
            <div className="about-section padding-top-50">
                <h1 id="">Meie liikmed</h1> {/*style="text-align:center*/}
                <p>&nbsp;</p>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <Card className="card contactcard h-100">
                            <Card.Img variant="top" src="/images/icon.jpg" alt="Harri"/>
                            <Card.Body>
                                <Card.Text>Harri Liiman</Card.Text>
                                <Card.Title>Arhitekt</Card.Title>
                                <Card.Text>harri.liimann@furnifuture.com</Card.Text>
                                <Button variant="primary">Contact</Button>
                            </Card.Body>
                        </Card>
                    </div>              
                                
                    <div className="col">
                        <Card className="card contactcard h-100">
                            <Card.Img variant="top" src="/images/icon.jpg" alt="Andres"/>
                            <Card.Body>
                                <Card.Text>Andres Tammistu</Card.Text>
                                <Card.Title>Analüütik</Card.Title>
                                <Card.Text>andres.tammistu@furnifuture.com</Card.Text>
                                <Button variant="primary">Contact</Button>
                            </Card.Body>
                        </Card>
                    </div>
        
                    <div className="col">
                        <Card className="card contactcard h-100">
                            <Card.Img variant="top" src="/images/icon.jpg" alt="Ingela"/>
                            <Card.Body>
                                <Card.Text>Ingela Rohusaar</Card.Text>
                                <Card.Title>Arendaja</Card.Title>
                                <Card.Text>ingela.rohusaar@furnifuture.com</Card.Text>
                                <Button variant="primary">Contact</Button>
                            </Card.Body>
                        </Card>
                    </div>
        
                    
                    <div className="col">
                        <Card className="card contactcard h-100">
                            <Card.Img variant="top" src="/images/icon.jpg" alt="Rasmus"/>
                            <Card.Body>
                                <Card.Text>Rasmus Sokk</Card.Text>
                                <Card.Title>Arenduse praktikant</Card.Title>
                                <Card.Text>rasmus.sokk@furnifuture.com</Card.Text>
                                <Button variant="primary">Contact</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}