
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Bannar = () => {
    return (
        <div className='container mx-auto mt-10'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='md:flex md:h-[500px] bg-[#333] text-white rounded-xl p-10 md:p-20'>
                        <img src="https://i.ibb.co/9cHwFHZ/slider-3.webp" className=' object-contain' alt="" />
                        <div className='my-auto'>
                            <h2 className='text-2xl md:text-4xl font-platypi font-bold'>Exploring the World Through Reading</h2>
                            <p className='text-base font-poppins my-5 md:my-10'>Money, an essential aspect of modern life, serves as more than just a medium of exchange. It embodies power, security, and opportunity. Understanding its intricacies is crucial for financial stability and personal growth. Explore its influence on economics, psychology, and society, and learn to navigate its complexities with confidence.</p>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div style={{ backgroundImage: "url('https://i.ibb.co/xMVN8HT/slider-1.jpg')" }} className=' text-white md:bg-center md:h-[500px] rounded-xl'>
                        {/* <img src="https://i.ibb.co/xMVN8HT/slider-1.jpg" alt="" /> */}
                        <div className='p-10 md:p-20'>
                            <h2 className='text-4xl font-platypi font-bold'>Unveiling the Secrets of Learning</h2>
                            <h2 className='text-3xl font-platypi font-bold'>A Comprehensive Study</h2>
                            <p className='font-poppins text-base my-10 w-[400px]'>
                                Delve into the depths of human cognition and education with our study, exploring the intricate processes of learning. From cognitive psychology to pedagogical methodologies, unlock insights that illuminate the path to effective and fulfilling education."
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='md:flex md:h-[500px] bg-[#333] text-white rounded-xl p-10 md:p-20'>
                        <img src="https://i.ibb.co/StqgJQt/slider.png" className='object-contain md:w-[50%]' alt="" />
                        <div className='md:w-[50%]'>
                            <h2 className='text-2xl md:text-4xl font-platypi font-bold'>Understanding Its Role <br /> in Our Lives</h2>
                            <p className='font-poppins text-base md my-10:my-10'>Money, an essential aspect of modern life, serves as more than just a medium of exchange. It embodies power, security, and opportunity. Understanding its intricacies is crucial for financial stability and personal growth. Explore its influence on economics, psychology, and society, and learn to navigate its complexities with confidence.</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Bannar;