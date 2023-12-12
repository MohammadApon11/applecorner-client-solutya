import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";

export default function MainCarousel() {
    return (
        <div>
            <div className="w-full flex justify-center py-2 lg:py-5 items-center bg-white">
                <h1 className="text-sm lg:text-7xl font-bold"> Apple </h1>
                <img className="h-[50px] lg:h-[80px] " src="/app-store.png" alt="" srcset="" />
                <h1 className="text-sm lg:text-7xl font-bold">Corner </h1>
            </div>
            <>
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    pagination={{
                        dynamicBullets: true,
                    }}

                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide className="relative"><img className="bannerImg" src="/1.png" alt="" srcset="" />
                        <Link to="/">
                            <h1 className="absolute top-[250px] w-[300px] text-center py-2 border-4 uppercase border-white bg-transparent text-black text-2xl font-bold z-50 left-[280px] carouselText1"> Shop Now </h1>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="relative"><img className="bannerImg" src="/5.png" alt="" srcset="" />
                        <div className="absolute top-[250px] text-center text-black text-6xl font-semibold capitalize text-md z-50 right-[250px] carouselText2"> <h1> Everyone gets best </h1> <h1 className="my-3"> deal in our shop </h1> </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative"><img className="bannerImg" src="/3.png" alt="" srcset="" />
                        <Link to="/">
                            <h1 className="absolute top-[250px] w-[300px] text-center py-2 border-4 uppercase border-white bg-[#DDA232] text-black text-2xl font-bold z-50 right-[280px] carouselText3"> Shop Now </h1>
                        </Link>
                        <h1 className="absolute top-[320px] text-center text-[#DDA232] text-xl font-thin z-50 right-[340px] carouselWebLink"> From Apple Corner </h1>
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    )
}
