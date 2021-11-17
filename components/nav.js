import Accordion from 'react-bootstrap/Accordion'
import Link from 'next/link'


export default function NavItems(){
    return(
        <div style={{width:"15%"}}>
            <Accordion flush>
                <Accordion.Item eventKey="0" style={{pointerEvents: "none"}}>
                    <Accordion.Header>Elutuba</Accordion.Header>
                    <Accordion.Body>
                        <input type="checkbox"/><br/>
                        <input type="checkbox"/><br/>
                        <input type="checkbox"/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" style={{pointerEvents: "none"}}>
                    <Accordion.Header>Magamistuba</Accordion.Header>
                    <Accordion.Body>
                        <input type="checkbox"/><br/>
                        <input type="checkbox"/><br/>
                        <input type="checkbox"/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Kontor</Accordion.Header>
                    <Accordion.Body>
                        {/* <input type="checkbox" name="tables"/>
                        <label for="tables">Lauad</label><br/>
                        <input type="checkbox" name="chaires"/>
                        <label for="chaires">Toolid</label><br/>
                        <input type="checkbox" name="other"/>
                        <label for="other">Muu</label> */}
                        <Link href="/products/lauad">
                            <a>Lauad</a>
                        </Link><br/>
                        <Link href="/products/toolid">
                            <a>Toolid</a>
                        </Link><br/>
                        <Link href="/products/muu">
                            <a>Muu</a>
                        </Link>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" style={{pointerEvents: "none"}}>
                    <Accordion.Header>Köök</Accordion.Header>
                    <Accordion.Body>
                        <input type="checkbox"/><br/>
                        <input type="checkbox"/><br/>
                        <input type="checkbox"/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" style={{pointerEvents: "none"}}>
                    <Accordion.Header>Vannituba</Accordion.Header>
                    <Accordion.Body>
                        <input type="checkbox"/><br/>
                        <input type="checkbox"/><br/>
                        <input type="checkbox"/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" style={{pointerEvents: "none"}}>
                    <Accordion.Header>Sisekujundus</Accordion.Header>
                    <Accordion.Body>
                        <input type="checkbox"/><br/>
                        <input type="checkbox"/><br/>
                        <input type="checkbox"/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}