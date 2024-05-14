import Image from '../../../src/assets/images/img.png'

const Notification = () => {
    const backgroundStyle = {
        backgroundImage: `url(${Image})`,
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        /* You can add more background properties here if needed */
      };
    return (
        <div style={backgroundStyle} className="flex lg:flex-row md:flex-col flex-col items-center bg-[#3b3a3a] rounded-lg lg:py-56 lg:px-32 md:pt-5 pt-5 md:pb-96 pb-96 my-10">
            <div className="text-white lg:flex-1 lg:pb-20">
                <h3 className="lg:text-2xl md:text-2xl text-xl font-semibold">Get New Jobs Notification!</h3>
                <p>Subscribe & get all related jobs notification</p>
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col">
            
                 <input id="search" type="text" placeholder="Enter your email" className="input input-bordered lg:w-[250px] w-[200px] mb-2 lg:mb-0 md:mb-0 max-w-xs" />
                 <button className="btn btn-primary text-white font-bold">Subscribe</button>
 


            </div>
            
        </div>
    );
};

export default Notification;