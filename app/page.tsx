import Discover from "./component/discover/Discover"
import Footer from "./component/footer/Footer"
import Header from "./component/header/Header"
import MainContent from "./component/mainContent/MainContent"
import axios from "axios"

export default async function Home() {
  const response = await axios.get('https://fakestoreapi.com/products')
  const productData = response.data
  return <>
    <Header/>
    <Discover/>
    <MainContent productData={productData}/>
    <Footer/>
  </>
}