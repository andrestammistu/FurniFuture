import Gallery from "./gallery";

export default function ProductsGallery(props){
    return(
        <div style={{padding: '10px'
        }}>
            <Gallery image={props.image} heading={props.heading} url={props.url}/>
            <div>
                <p className="text">{props.body}</p>
                <p>{props.price}</p>
                <button>Lisa ostukorvi</button>
            </div>
        </div>
    )
}