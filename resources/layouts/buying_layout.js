import Header from "../components/header.js"
import Footer from "../components/footer.js"
import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'


export default function Buying(){
    return(
        <div>
            <Header/>
                <Container>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Kohaletoimetamise viis</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Kontaktinfo</Accordion.Header>
                            <Accordion.Body>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Maksmine</Accordion.Header>
                            <Accordion.Body>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            <Footer/>
        </div>
    )
}