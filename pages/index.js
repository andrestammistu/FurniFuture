import Footer from "../resources/components/footer.js";
import Layout from "../resources/components/index_layout.js";
import Head from "next/head";



export default function Home(){
  return (
    <div>
      <Head>
        <title>FurniFuture</title>
      </Head>
      <div>
        <Layout></Layout>
      </div>
    </div>

  )
}
    
