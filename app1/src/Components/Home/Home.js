import React from './Home'
import './Home.css'
import imran from '../Images/imran.jpg'
import Button from '../Button/Button'
import { FcCommandLine} from "react-icons/fc";
import Card from '../Card/Card';
// import function to register Swiper custom elements
// import { register } from 'swiper/element/bundle';
// register Swiper custom elements
// register();


const Home=()=>{


    return(
      <>
      <div className="hero-section">
            <div className="text-section">
                <h2 className='underline'>To Working </h2>
                <h2>As a Frontend developer </h2>
                <p>For the making futur in web development <br/>
                you will be need hardworking in your filed<br/>
                Lets Go And start your Working from Now!
                </p>

                <Button text={'download cv'} />
            </div>
            <div className="img-section">
                <img src={imran} alt="" className="img1" />
            </div>

        </div>
        
            {/* design.............card..................... */}
        

<div className="card">
<Card/>
</div>



        

      </>
    )
}
export default Home;