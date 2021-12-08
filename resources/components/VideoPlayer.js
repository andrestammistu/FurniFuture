export default function VideoPlayer(props){
  return (
    <div style={{paddingTop: "100px"}}>
        <h1 id="tooted">Meie tooted</h1>
        <iframe src={props.src}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{width:"100%", height:"500px", alignContent: "center", paddingTop:"50px"}}
            title={props.title}>
        </iframe>
    </div>
  );
};