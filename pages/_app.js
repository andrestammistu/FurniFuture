import Head from 'next/head'
import Script from 'next/script'
import '../styles/globals.css'


export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Script 
          id="bootstrap-script"
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
          crossOrigin="anonymous">
      </Script>
      
      
      <Component {...pageProps} />

    </div>
  )
}