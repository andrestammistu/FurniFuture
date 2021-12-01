export default function VideoPlayer(){
  return (
    <div style={{paddingTop: "100px"}}>
        <h1 id="tooted">Meie tooted</h1>
        <iframe src="https://player.vimeo.com/video/611482353?h=ce441b7891&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479;autoplay:1"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{width:"100%", height:"500px", alignContent: "center", paddingTop:"50px"}}
            title="Trailer.mp4">
        </iframe>
    </div>
  );
};