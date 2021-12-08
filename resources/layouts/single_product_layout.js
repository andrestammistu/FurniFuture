import ProductsGallery from "../components/products_gallery"
import Header from "../components/header"
import Footer from "../components/footer"
import Image from 'react-bootstrap/Image'
import { Container, Row, Col } from "react-bootstrap"
import styles from '../../styles/singleproduct.module.css'
import buttonStyles from '../../styles/button.module.css'
import Link from 'next/link'

export default function Layout(){
    return(
        <div>
            <Header/>
            <Container fluid>
                <Row>
                    <Col>
                        <Image src="/images/sofa.png" fluid />
                    </Col>
                    <Col xs={7} style={{padding: '50px', boxSizing: 'border-box'}}>
                        <h1 className={styles.padding}>Tugitool</h1>
                        <p className={styles.padding}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Cursus eget nunc scelerisque viverra mauris in aliquam sem. Libero justo laoreet sit amet. 
                            Nulla at volutpat diam ut venenatis tellus in. Euismod lacinia at quis risus sed. 
                            Eget magna fermentum iaculis eu non. Purus non enim praesent elementum facilisis leo vel fringilla est. Enim ut sem viverra aliquet eget sit amet. 
                            Sit amet aliquam id diam maecenas ultricies mi eget mauris. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Ut etiam sit amet nisl. 
                            Nulla malesuada pellentesque elit eget gravida cum. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Rhoncus urna neque viverra justo. 
                            Quisque non tellus orci ac auctor augue mauris. Neque vitae tempus quam pellentesque nec nam aliquam sem. 
                            Convallis convallis tellus id interdum velit laoreet id donec.
                        </p>
                        <h3 className={styles.padding}>HIND: 1000€</h3>

                        <Link href="#">
                            <a className={buttonStyles.primary}>Lisa ostukorvi</a>
                        </Link>
                    
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}