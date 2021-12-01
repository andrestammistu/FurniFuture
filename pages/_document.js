// pages/_document.js
import Document, { Html, Main, Head, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html>
          <Head>
                <link 
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
                    rel="stylesheet" 
                    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
                    crossOrigin="anonymous">
                </link>
                <Script 
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
                    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
                    crossOrigin="anonymous">
                </Script>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
      </Html>
    )
  }
}

export default MyDocument