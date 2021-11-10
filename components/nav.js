import Accordion from 'react-bootstrap/Accordion'


export default function NavItems(){
    return(
        <div style={{width:"15%"}}>
            <Accordion flush>
                <Accordion.Item eventKey="0" disabled>
                    <Accordion.Header>Elutuba</Accordion.Header>
                    <Accordion.Body>
                        <input type="checkbox"/><br/>
                        <input type="checkbox"/><br/>
                        <input type="checkbox"/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
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
                        <input type="checkbox"/><br/>
                        <input type="checkbox"/><br/>
                        <input type="checkbox"/>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Köök</Accordion.Header>
                    <Accordion.Body>
                        <input type="checkbox"/><br/>
                        <input type="checkbox"/><br/>
                        <input type="checkbox"/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Vannituba</Accordion.Header>
                    <Accordion.Body>
                        <input type="checkbox"/><br/>
                        <input type="checkbox"/><br/>
                        <input type="checkbox"/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
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