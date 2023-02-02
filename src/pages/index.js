import Head from 'next/head'
import Header from '../components/HomeLayout/Header/index';
import Banner from '../components/Sections/Banner/index';
import About from '../components/Sections/About/index'
import Service from '../components/Sections/Service/index'
import Recommendation from '../components/Sections/Recommendation/index'
import Tutor from '../components/Sections/Tutor/index'
import Footer from '../components/HomeLayout/Footer/index'


export default function Home() {
  return (
    <>
      <Head>
        <title>Learnhall</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>  
      <Header/>
      <Banner/>
      <About/>
      <Service/>
      <Recommendation/>
      <Tutor/>
      <Footer/>
    </>
  )
}
