import Luis from '../../../src/assets/images/David_Luiz.jpg'
import Xavi from '../../../src/assets/images/Xavi-Lopez.jpg'
import Sarah from '../../../src/assets/images/Sarah-Taylor.jpg'
import Chelsea from '../../../src/assets/images/Chelsea-Green.jpg'



const Candidates = () => {
    
    return (
        <div className="my-10">
            <h3 className="text-center font-semibold text-4xl my-10">Happy Candidates</h3>
        <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <div className="text-center w-full space-y-4">
    <h4 className="text-3xl font-bold">Facebook</h4>
    <p className="lg:px-36">I can not thank CareerPulse enough for helping me land my dream job. The personalized job recommendations were spot on, and the application process was seamless. Highly recommend it to anyone serious about their career.</p>
    <h5 className="text-2xl font-semibold">David Luis</h5>
    <div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={Luis} />
  </div>
</div>
    </div>
    
  </div> 
  <div id="item2" className="carousel-item w-full">
  <div className="text-center w-full space-y-4">
    <h4 className="text-3xl font-bold">Twitter</h4>
    <p className="lg:px-36">CareerPulse made my job search journey a breeze! The interface is user-friendly, and I found relevant job listings within minutes. Kudos to the team behind this amazing platform!</p>
    <h5 className="text-2xl font-semibold">Xavi Lopez</h5>
    <div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={Xavi} />
  </div>
</div>
    </div>
    
  </div> 
  <div id="item3" className="carousel-item w-full">
  <div className="text-center w-full space-y-4">
    <h4 className="text-3xl font-bold">Whatsapp</h4>
    <p className="lg:px-36">CareerPulse helped me navigate a career change with ease. The platforms comprehensive search filters and detailed job descriptions allowed me to explore different industries and find the perfect fit for my skills. Could not be happier with the outcome!</p>
    <h5 className="text-2xl font-semibold">Sarah Taylor</h5>
    <div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={Sarah} />
  </div>
</div>
    </div>
    
  </div> 
  <div id="item4" className="carousel-item w-full">
  <div className="text-center w-full space-y-4">
    <h4 className="text-3xl font-bold">YouTube</h4>
    <p className="lg:px-36">I have been using CareerPulse for years now, and it never disappoints. The job alerts keep me updated on new opportunities, and the company profiles help me research potential employers. It is my go-to resource whenever I am considering a career move.</p>
    <h5 className="text-2xl font-semibold">Chelsea Green</h5>
    <div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={Chelsea} />
  </div>
</div>
    </div>
    
  </div>
</div> 
<div className="flex justify-center w-full py-16 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
            
        </div>
    );
};

export default Candidates;