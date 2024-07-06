
import './App.css';

import Nav from "./Navbar.js"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Slider from './slider.jsx'


function App() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const productData = [
    {
      id: 1,
      img: "./images/5.png",

    },
    {
      id: 2,
      img: "./images/1.png",

    },
    {
      id: 3,
      img: "./images/3.png",

    },
    {
      id: 4,
      img: "./images/2.png",

    },
    {
      id: 5,
      img: "./images/4.png",

    },
    {
      id: 6,
      img: "./images/6.png",

    }

  ]
  const product = productData.map(item => (
    <Slider
    img = {item.img}  
    />
  ))
  
  return (
    <div className="App">
    <Nav />
    <Carousel className = "slider_c" responsive={responsive}>
      {product}
    </Carousel>
      <a href = "Service"><button  className='service_router' >Explore More </button></a>
    <div class = "footer_c">
          <img src="./images/footer.png"/>
        </div>
    </div>
  );
}

export default App;
