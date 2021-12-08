import Gallery from "./gallery";
import buttonStyles from '../../styles/button.module.css'
import Link from 'next/link'

export default function ProductsGallery(props){
    return(
        <div style={{padding: '10px'
        }}>
            <Gallery image={props.image} heading={props.heading} url={props.url}/>
            <div>
                <p className="text">{props.body}</p>
                <p>{props.price}</p>
                <Link href="#">
                    <a className={buttonStyles.primary}>Lisa ostukorvi</a>
                </Link>
            </div>
        </div>
    )
}