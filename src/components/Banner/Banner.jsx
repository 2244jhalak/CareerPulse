import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Cover1 from '../../../src/assets/images/banner1.gif'
import Cover2 from '../../../src/assets/images/banner2.gif'
import Cover3 from '../../../src/assets/images/banner3.gif'



const Banner = () => {
    return (
        <div className='z-30'>
            <div className='w-full'>
            
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                      <SwiperSlide>
                               <div className='relative'>
                               <img className='w-full lg:h-[600px] h-[270px] md:h-[450px] rounded-b-lg' src={Cover1} alt="" />
                              
                              <div className='absolute top-0 lg:h-[600px] left-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
                              <div className='my-44 mx-20 space-y-5'>
                              <h3 className='text-4xl font-semibold'>Discover Your Next Opportunity</h3>
                              <p className='w-3/4'>Are you ready to take the next step in your career journey? Look no further than CareerPulse, your premier destination for finding exciting job opportunities tailored to your skills, interests, and aspirations.</p>
                              
                              </div>
                              </div>
                               </div>
                    
                               
                      </SwiperSlide>
                      <SwiperSlide>
                      <div className='relative'>
                               <img className='w-full lg:h-[600px] h-[270px] md:h-[450px] rounded-b-lg' src={Cover2} alt="" />
                              
                              <div className='absolute top-0 lg:h-[600px] left-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
                              <div className='my-44 mx-20 space-y-5'>
                              <h3 className='text-4xl font-semibold'>Discover Your Next Opportunity</h3>
                              <p className='w-3/4'>Are you ready to take the next step in your career journey? Look no further than CareerPulse, your premier destination for finding exciting job opportunities tailored to your skills, interests, and aspirations.</p>
                              
                              </div>
                              </div>
                               </div>
                                
                               
                      </SwiperSlide>
                      <SwiperSlide>
                      <div className='relative'>
                               <img className='w-full lg:h-[600px] h-[270px] md:h-[450px] rounded-b-lg' src={Cover3} alt="" />
                              
                              <div className='absolute top-0 lg:h-[600px] left-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
                              <div className='my-44 mx-20 space-y-5'>
                              <h3 className='text-4xl font-semibold'>Discover Your Next Opportunity</h3>
                              <p className='w-3/4'>Are you ready to take the next step in your career journey? Look no further than CareerPulse, your premier destination for finding exciting job opportunities tailored to your skills, interests, and aspirations.</p>
                              
                              </div>
                              </div>
                               </div>
                                
                      
                      </SwiperSlide>
                      
                     
                      
                      
                </Swiper>
                
                
            </div>
            
        </div>
    );
};

export default Banner;