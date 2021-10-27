import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'

export default function LoginForm(){
    return(
        <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label>Email</Form.Label>
                <Col sm="10">
                <Form.Control type="email" placeholder="Email" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label>Password</Form.Label>
                <Col sm="10">
                    <Form.Control type="password" placeholder="Password" />
                    <Link href="/">
                        <a>Unustasid parooli?</a>
                    </Link>
                </Col>
            </Form.Group>

            <Button variant="primary" type="submit">
                Logi sisse
            </Button>
        </Form>
    )
}