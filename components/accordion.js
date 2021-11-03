import Accordion from 'react-bootstrap/Accordion'


export default function AccordionItems(){
    return(
        <div>
            <Accordion defaultActiveKey="0" style={{width:"15%", float:"left"}}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1</Accordion.Header>
                    <Accordion.Body>
                    Esimene
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2</Accordion.Header>
                    <Accordion.Body>
                    Teine
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3</Accordion.Header>
                    <Accordion.Body>
                    Kolmas
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>4</Accordion.Header>
                    <Accordion.Body>
                    Neljas
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>5</Accordion.Header>
                    <Accordion.Body>
                    Viies
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>6</Accordion.Header>
                    <Accordion.Body>
                    Kuues
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}