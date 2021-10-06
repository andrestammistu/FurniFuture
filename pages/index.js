


export default function Home(){
  return(
    <Head>
        <title>
            FurniFuture
        </title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="../styles/styles.css">
        
    </Head>


        <Header>
        </Header>


        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" 
            style="height: calc(100vh - 70px);
                    overflow: hidden;">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <Image src="../public/images/living-room.jpg" class="d-block w-100 carouselimages" alt="Esimene"/>
                  </div>
                  <div class="carousel-item">
                    <Image src="../public/images/dog_couch.jpg" class="d-block w-100 carouselimages" alt="Teine"/>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
        </div>

        <div class="container gallerymargin">
            <div class="row row-cols-1 row-cols-md-3 g-6">
                <div class="col">
                <div>
                    <Image src="../public/images/sofa.png" class="card-img-top main_gallery" alt="#"/>
                    <div class="card-body">
                    <h5 class="card-title">Elutuba</h5>
                    </div>
                </div>
                </div>
                <div class="col">
                <div>
                    <Image src="../public/images/esimene.jpg" class="card-img-top main_gallery" alt="#"/>
                    <div class="card-body">
                    <h5 class="card-title">Magamistuba</h5>
                    </div>
                </div>
                </div>
                <div class="col">
                <div>
                    <Image src="../public/images/table.png" class="card-img-top main_gallery" alt="laud"/>
                    <div class="card-body">
                    <h5 class="card-title">Kontor</h5>
                    </div>
                </div>
                </div>
                <div class="col">
                    <div>
                    <Image src="../public/images/chair-example.png" class="card-img-top main_gallery" alt="tool"/>
                    <div class="card-body">
                        <h5 class="card-title">Köök</h5>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div>
                    <Image src="../public/images/esimene.jpg" class="card-img-top main_gallery" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Vannituba</h5>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div>
                    <Image src="../public/images/esimene.jpg" class="card-img-top main_gallery" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Sisekujundus</h5>
                    </div>
                    </div>
                </div>
            </div>



            <div class="about-section padding-top-50">
                  
              <h1 style="text-align:center" id="">Meie liikmed</h1>
              <p>&nbsp;</p>
            <div class="row row-cols-1 row-cols-md-4 g-4">
              <div class="col">
                <div class="card contactcard h-100">
                  <Image src="../public/images/icon.jpg" alt="Harri"/>
                  <div class="container">
                    <h2>Harri Liimann</h2>
                    <p class="title">Arhitekt</p>
                    <p>harri.liimann@furnifuture.com</p>
                    <p><button class="button">Contact</button></p>
                  </div>
                </div>
              </div>              
                            
              <div class="col">
                <div class="card contactcard h-100">
                  <Image src="../public/images/icon.jpg" alt="Andres"/>
                  <div class="container">
                    <h2>Andres Tammistu</h2>
                    <p class="title">Analüütik</p>
                    <p>andres.tammistu@furnifuture.com</p>
                    <p><button class="button">Contact</button></p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card contactcard h-100">
                  <Image src="../public/images/icon.jpg" alt="Ingela"/>
                  <div class="container">
                    <h2>Ingela Rohusaar</h2>
                    <p class="title">Programmeerija</p>
                    <p>ingela.rohusaar@furnifuture.com</p>
                    <p><button class="button">Contact</button></p>
                  </div>
                </div>
              </div>

              
              <div class="col">
                <div class="card contactcard h-100">
                  <Image src="../public/images/icon.jpg" alt="Rasmus"/>
                  <div class="container">
                    <h2>Rasmus Sokk</h2>
                    <p class="title">Programeerija praktikant</p>
                    <p>rasmus.sokk@furnifuture.com</p>
                    <p><button class="button">Contact</button></p>
                  </div>
                </div>
              </div>
        </div>
      </div>




      <div id="popup-form">
        <h1>LOGI SISSE</h1>
        <form>
            <label for="email">Email</label><br/>
            <input type="email" name="email"><br/><br/>
            <label for="parool">Parool</label><br/>
            <input type="password" name="parool"><br/><br/>
            <input type="submit">
        </form>
        <button>Või registreeri</button>
    </div>

    <div class="padding-top-50">
      <h1 id="tooted" href="#tooted" style="text-align:center">Meie Tooted</h1>
      <div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/611482353?h=ce441b7891&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479;autoplay:1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:50%;align-content: center;" title="Trailer.mp4"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
      </div>
    </div>


    {/* <script>
        function open_form(){
            document.getElementById("popup-form").style.display ="block";
            //document.body.style.opacity = 0.5;
        }
    </script> */}



      <Footer>
      </Footer>

  )
}
    
