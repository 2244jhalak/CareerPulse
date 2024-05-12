import { Link, useRouteError } from "react-router-dom";
import Error from '../../../src/assets/images/404-error-page-svg-animation.gif'


const ErrorPage = () => {
    const error=useRouteError();
    return (
        <div className="text-center mt-20 font-semibold">
    
    <img className="mx-auto" src={Error} alt="404" />
   
    <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <h3>{error.status===404 && <h3>You are in wrong way bro!!!!</h3>}</h3>
    <div className="animate-bounce mt-6">
      <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
      </svg>
    </div>
    
    <div className="text-center my-2 font-semibold space-y-3">
            
      <Link to="/"><button className="text-white bg-green-500 btn">Go Back</button></Link>
            
        </div>
  
</div>
    
  

    );
};

export default ErrorPage;