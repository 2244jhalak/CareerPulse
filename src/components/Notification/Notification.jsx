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
            <div className="text-white lg:flex-1">
                <h3 className="text-2xl font-semibold">Get New Jobs Notification!</h3>
                <p>Subscribe & get all related jobs notification</p>
            </div>
            <div className="flex">
            
                 <input id="search" type="text" placeholder="Enter your email" className="input input-bordered w-[250px] max-w-xs" />
                 <button className="btn btn-primary text-white font-semibold">Search</button>
 


            </div>
            
        </div>
    );
};

export default Notification;