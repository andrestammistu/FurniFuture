import Image from 'next/image'
import Link from 'next/link'
import footerStyles from '../styles/footer.module.css'


export default function Footer(){
    return(
        
        <footer id={footerStyles.footer}>

            <div className={footerStyles.footerClass}>

                <div class="padding-top-50">
                    <a className="navbar-brand" href="#">
                    <Image 
                        src="/images/logo.png" 
                        alt="FurniFuture" 
                        height="100"
                        width="100%" />
                    </a>
                </div>

                <div className="padding-top-50">
                    <h3>MEIE TOOTED</h3>
                    <Link href="#"><a>Elutuba</a></Link><br/>
                    <Link href="#"><a>Magamistuba</a></Link><br/>
                    <Link href="#"><a>Kontor</a></Link><br/>
                    <Link href="#"><a>Köök</a></Link><br/>
                    <Link href="#"><a>Vannituba</a></Link><br/>
                    <Link href="#"><a>Sisekujundus</a></Link><br/>
                </div>

                <div className="padding-top-50">
                    <h3>OLULINE TEAVE</h3>
                    <Link href="#"><a>Privaatsuspoliitika</a></Link><br/>
                    <Link href="#"><a>Tingimused</a></Link><br/>
                    
                </div>

                <form id="contact_form" className="padding-top-50">
                    <h3>KONTAKT</h3><br/>
                    <p><strong>FurniFuture laohoone</strong></p>
                    <p><strong>E-R 10.00-18.00</strong></p>
                    <p><strong>L 10.00-16.00</strong></p>
                    <p><strong>P suletud</strong></p>
                    <p>(Address)</p>
                    <p>ladu@furnifuture.ee</p>
                    <p>Tel : +372 (Number)</p>
                    <p><strong>Üldinfo :</strong></p>
                    <p>+372 (Number)</p> 
                    <p>info@furnifuture.ee</p>
                </form>
            
            </div> 

        </footer>
  
    )
}
