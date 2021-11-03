import galleryStyles from '../styles/gallery.module.css'
import Card from 'react-bootstrap/Card';

export default function Gallery(){
    return(
        // <div className={galleryStyles.gallerymargin}>
        //     <div className="row row-cols-1 row-cols-md-3 g-6">
        //         <div className="col">
        //             <Card className={galleryStyles.main_gallery}>
        //                 <Card.Img variant="top" src="/images/esimene.jpg" />
        //                 <Card.Body>
        //                     <Card.Title>Magamistuba</Card.Title>
        //                 </Card.Body>
        //             </Card>
        //         </div>

        //         <div className="col">
        //             <Card className={galleryStyles.main_gallery}>
        //                 <Card.Img variant="top" src="/images/table.png" />
        //                 <Card.Body>
        //                     <Card.Title>Kontor</Card.Title>
        //                 </Card.Body>
        //             </Card>
        //         </div>

        //         <div className="col">
        //             <Card className={galleryStyles.main_gallery}>
        //                 <Card.Img variant="top" src="/images/chair-example.png" />
        //                 <Card.Body>
        //                     <Card.Title>Köök</Card.Title>
        //                 </Card.Body>
        //             </Card>
        //         </div>

        //         <div className="col">
        //             <Card className={galleryStyles.main_gallery}>
        //                 <Card.Img variant="top" src="/images/esimene.jpg" />
        //                 <Card.Body>
        //                     <Card.Title>Vannituba</Card.Title>
        //                 </Card.Body>
        //             </Card>
        //         </div>

        //         <div className="col">
        //             <Card className={galleryStyles.main_gallery}>
        //                 <Card.Img variant="top" src="/images/esimene.jpg" />
        //                 <Card.Body>
        //                     <Card.Title>Sisekujundus</Card.Title>
        //                 </Card.Body>
        //             </Card>
        //         </div>
        //     </div>
        // </div>
        <div className="col">
            <Card className={galleryStyles.main_gallery}>
                <Card.Img variant="top" src="/images/sofa.png"/>
                <Card.Body>
                    <Card.Title>Elutuba</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}