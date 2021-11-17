import Gallery from "./gallery";

export default function ProductsGallery(props){
    return(
        <div style={{
        }}>
            <Gallery image={props.image} heading={props.heading}/>
            <div>
                <p>{props.price}</p>
                <p class ="text">{props.body}</p>
                <button>Lisa ostukorvi</button>
            </div>
        </div>
    )
}