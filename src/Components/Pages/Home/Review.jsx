import { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Review = () => {
    const fedback = [
        {
            name: "Mehedi",
            message: "This id Good Website"
        },
        {
            name: "Rifat",
            message: "This id Good Website -2"
        },
        {
            name: "Tuhin",
            message: "This id Good Website -3"
        },
        {
            name: "Rdx Rifat",
            message: "This id Good Website -4"
        },
        {
            name: "Sobuj",
            message: "This id Good Website -5"
        },
        {
            name: "Mustak",
            message: "This id Good Website -6"
        },
        {
            name: "Habib",
            message: "This id Good Website -7"
        }
    ]
    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-4xl  text-[#B09CA9] font-platypi mb-5' >Students Feedback</h1>

            <Swiper
                modules={[Virtual, Autoplay, Navigation, Pagination]}
                // onSwiper={setSwiperRef}
                loop={true}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                virtual
            >
                {fedback.map((item, inx) => (
                    <SwiperSlide key={inx} >
                        <div className='bg-[#FeF3F0] w-[400px]  p-5 rounded-xl drop-shadow-md'>
                            <h2 className="text-2xl font-bold text-center">{item.name}</h2>
                            <p className="text-center mt-2">{item.message} </p>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>




        </div>
    );
};

export default Review;