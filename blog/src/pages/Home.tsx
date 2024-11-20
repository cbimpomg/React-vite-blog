import Nav from "../components/Nav"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SinglePost from "../components/SinglePost"


const Home = () => {
    return (

        <>
        
        <Nav/>
        <Header title="Clean Blog" bgImage="home-bg.jpg" subTitle= "The Home Page "/>

    <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
           <div className="col-md-10 col-lg-8 col-xl-7">
         <SinglePost/>

         <SinglePost/>

           </div>
       </div>
    </div>      

        <Footer/>
   
   
   
   </>
    )
}

export default Home