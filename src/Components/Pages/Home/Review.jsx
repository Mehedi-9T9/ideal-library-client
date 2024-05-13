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
            message: "This id Good Website",
            img: "https://i.ibb.co/0sPq1PC/asian-man-1468032-640.jpg"
        },
        {
            name: "Rafiya Akter",
            message: "This is awesome learning site",
            img: "https://i.ibb.co/s1D1cks/blog-new-13.jpg"
        },
        {
            name: "Tuhin",
            message: "Wow amizing web site",
            img: "https://i.ibb.co/hDw3kzQ/download-1.jpg"
        },
        {
            name: "Sumaiya Akter",
            message: "This is Beuatiful Website",
            img: "https://i.ibb.co/hB9xjVC/slider2-image.png"
        },
        {
            name: "Sobuj",
            message: "This is student helpful site",
            img: "https://i.ibb.co/WPGZhbm/download.jpg"
        },
        {
            name: "Mukan Mim",
            message: "Lovely Library",
            img: "https://i.ibb.co/j60L9GN/download-3.jpg"
        },

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
                {fedback?.map((item, inx) => (
                    <SwiperSlide key={inx} >
                        <div className='bg-[#FeF3F0] w-[400px]  p-5 rounded-xl drop-shadow-md'>
                            <h2 className="text-2xl font-bold  ">{item?.name}</h2>
                            <div className="chat chat-start ">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS chat bubble component" className='w-20 h-20' src={item?.img} />
                                    </div>
                                </div>
                                <div className="chat-bubble bg-white">{item?.message}</div>
                            </div>
                            {/* <p className="text-center mt-2">{item.message} </p> */}

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>




        </div>
    );
};

export default Review;