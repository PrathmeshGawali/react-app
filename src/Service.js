import logo from './logo.svg';
import './App.css';
import bgvideo from "./video/bg_video.mp4"
import Nav from "./Navbar.js"
import TwoButtons from './Components/TwoButtons.js';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaStar } from "react-icons/fa";
import Product from './carousel.jsx'


function App() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const productData = [
    {
      id: 1,
      imageurl: "./images/mahesh.png",
      name: "Mahesh Driving School ",
      rating: "4.5",
      linkurl: "https://maheshmotordrivingschool.com/"
    },
    {
      id: 2,
      imageurl: "./images/uday.png",
      name: "Uday Driving School ",
      rating: "4.2",
      linkurl: "https://drivingshed.com/schools/pune/uday-driving-school-uds"
    },
    {
      id: 3,
      imageurl: "./images/pragati.png",
      name: "Pragati Driving School ",
      rating: "4.6",
      linkurl: "https://pragatidrivingschool.wixsite.com/pragatidrivingschool"
    },
    {
      id: 4,
      imageurl: "./images/signal.png",
      name: "Signal Driving School ",
      rating: "4.7",
      linkurl: "https://www.signaldriving.com/"
    },
    {
      id: 5,
      imageurl: "./images/maruti.png",
      name: "Maruti Suzuki Driving School ",
      rating: "4.4",
      linkurl: "https://www.marutisuzukidrivingschool.com/"
    },
    {
      id: 6,
      imageurl: "./images/yogi.png",
      name: "Yogiraj Driving School ",
      rating: "4.5",
      linkurl: "https://yogiraj-driving-school-driving-school.business.site/"
    }

  ]

  const product = productData.map(item => (
    <Product 
    name = {item.name} 
    url = {item.imageurl} 
    rating = {item.rating} 
    linkurl = {item.linkurl}/>
  ))

  return (
    <div className="App">
    <img className='wallpaper' src='./images/wallpaper.jpg'/>
        <div className='wrapperdiv'>
        <div className='textwrapper'>
          <p>AHEN is </p>
          <div className='words'>
            <span>Easy</span>
            <span>Faster</span>
            <span>Realiable</span>
            <span>Covinent</span>
            <span>Better</span>
          </div>
        </div>
        </div>
        <Nav />
        <div className='carousel_c'>
        <Carousel className = "carousel" responsive={responsive}>
        {product}
        </Carousel>
        <h2 className='recomendation'>SCHOOLS NEAREST TO YOU </h2>
        </div>;
        <TwoButtons />
        <div class = "footer">
          <img src="./images/footer.png"/>
        </div>
    </div>
  );
}

export default App;
