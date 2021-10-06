import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';


function Tooted() {
    return (
      <>
      <Head>
        <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        />

        <script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
        crossorigin="anonymous"
        />
      </Head>
      <body>
        <h1>Test</h1>
      </body>
      </>
    );
  }
  
  export default Tooted;