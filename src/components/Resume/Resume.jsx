import Agent from "../../../src/assets/images/agent.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Report = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS
    }, []);
    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
        });
    }, []);
      
    return (
        <div className=" bg-blue-950 rounded-lg space-y-2 flex lg:flex-row md:flex-col flex-col justify-between px-8 lg:mx-20 my-16">
            <div className="lg:py-16">
                <h3 className="text-xl text-orange-500">Are you job seeker?</h3>
              
                <div className="text-white text-3xl">
                  <p>At first build</p>
                  <p>your resume</p>
                  
                </div>

            </div>
            <div>
                <div className="flex lg:flex-row md:flex-col flex-col items-center">
                    <Link to="/resumeBuilder">
                        <button className="bg-orange-500 btn text-white border-0">Visit and build</button>
                    </Link>
                    <div data-aos="fade-bottom" data-aos-duration="4000" data-aos-delay="500">
                            <img className="h-64" src={Agent} alt="" />
                    </div>
                       
  
                </div>
            

            </div>          
        </div>
    );
};

export default Report;