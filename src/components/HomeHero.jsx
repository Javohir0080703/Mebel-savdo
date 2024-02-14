import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const HomeHero = () => {
    const [custom_swiper, set_swiper] = useState({});
    const nextSlide = () => {
        custom_swiper.slideNext();
    };
    const prevSlide = () => {
        custom_swiper.slidePrev();
    };
    return (
        <section>
            <div className='containerb'>
                <Swiper
                    slidesPerView={1}
                    // spaceBetween={40}
                    pagination={{
                        type: "progressbar",
                    }}
                    autoplay={{
                        delay: 2000,
                        // disableOnInteraction: false,
                    }}
                    onInit={(ev) => {
                        set_swiper(ev);
                    }}
                    breakpoints={{
                        500: {
                            slidesPerView: 1
                        },
                        1024: {
                            slidesPerView: 1
                        }
                    }}
                    className="mySwiper relative "
                    navigation={true} modules={[Navigation, Autoplay]}
                >

                    <SwiperSlide>
                        <div className='bg-homebg1 bg-whidth w-full max-w-[1140px] h-[450px] pl-[120px] pt-[100px]'>
                            <h3 className='font-bold text-[50px] leading-[52px] tracking-[2%] text-#3C3C3C mb-4'>loft <br /> мебель</h3>
                            <p className='text-base leading-[22px] tracking-[2%] mb-5'>Современная и удобная мебель в Анапе</p>
                            <Link className='px-6 py-3.5 bg-white font-bold text-xs leading-4'>СМОТРЕТЬ КАТАЛОГ</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-homebg2 bg-whidth w-full max-w-[1140px] h-[450px] pl-[120px] pt-[100px] mr-auto'>
                            <h3 className='font-bold text-[50px] leading-[52px] tracking-[2%] text-[#3b06aec2] mb-4'>loft <br /> мебель</h3>
                            <p className='text-base text-[#8147ffa9]  leading-[22px] tracking-[2%] mb-5'>Современная и удобная мебель в Анапе</p>
                            <Link className='px-6 py-3.5 bg-white font-bold text-xs leading-4'>СМОТРЕТЬ КАТАЛОГ</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-homebg1 bg-whidth w-full max-w-[1140px] h-[450px] pl-[120px] pt-[100px]'>
                            <h3 className='font-bold text-[50px] leading-[52px] tracking-[2%] text-#3C3C3C mb-4'>loft <br /> мебель</h3>
                            <p className='text-base leading-[22px] tracking-[2%] mb-5'>Современная и удобная мебель в Анапе</p>
                            <Link className='px-6 py-3.5 bg-white font-bold text-xs leading-4'>СМОТРЕТЬ КАТАЛОГ</Link>
                        </div>
                    </SwiperSlide>
                    <button onClick={prevSlide} className='absolute top-[210px] z-50  left-6'>
                    <img width="50" height="50" src="https://img.icons8.com/ios/50/left-squared--v1.png" alt="left-squared--v1"/>
                    </button>
                    <button onClick={nextSlide} className='absolute top-[210px] z-50  right-6'>
                    <img className='' width="50" height="50" src="https://img.icons8.com/ios/50/right-squared--v1.png" alt="right-squared--v1"/>
                    </button>

                </Swiper>
            </div>
        </section>
    )
}

export default HomeHero