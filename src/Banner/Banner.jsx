
import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import './Banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
      const progressCircle = useRef(null);
      const progressContent = useRef(null);
      const onAutoplayTimeLeft = (s, time, progress) => {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
      };

      return (
            <div>
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
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper"
                  >
                        <SwiperSlide >
                              <img src="https://i.ibb.co/6XTn8qp/beautiful-girl-making-drip-coffee-sunrise-viewpoint-pha-hi-village-chiang-rai-province-thailand.jpg" alt="Slide 1"
                                    className="  " />
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src="https://i.ibb.co/gz6K80p/temple-391074-1280.jpg" alt="Slide 2"
                                    className="  " />
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src="https://i.ibb.co/bQRVgbB/city-6599328-1280.jpg" alt="Slide 3"
                                    className="  " />
                        </SwiperSlide>
                        <SwiperSlide>
                              <img
                                    src="https://i.ibb.co/56kBKv1/river-calm-scenery.jpg" alt="Slide 4"
                                    className=" " />
                        </SwiperSlide>

                        <div className="autoplay-progress" slot="container-end">
                              <svg viewBox="0 0 48 48" ref={progressCircle}>
                                    <circle cx="24" cy="24" r="20"></circle>
                              </svg>
                              <span ref={progressContent}></span>
                        </div>
                  </Swiper>







                  {/* <div className="carousel  w-full">
                        <div id="slide1" className="carousel-item relative w-full h-[550px]">
                              <img
                                    src="https://i.ibb.co/6XTn8qp/beautiful-girl-making-drip-coffee-sunrise-viewpoint-pha-hi-village-chiang-rai-province-thailand.jpg" alt="Slide 1"
                                    className="w-full   " />
                              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#slide4" className="btn btn-circle">❮</a>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                              </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full h-[550px]  ">
                              <img
                                    src="https://i.ibb.co/gz6K80p/temple-391074-1280.jpg" alt="Slide 2"
                                    className="w-full   " />
                              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#slide1" className="btn btn-circle">❮</a>
                                    <a href="#slide3" className="btn btn-circle">❯</a>
                              </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full h-[550px]  ">
                              <img
                                    src="https://i.ibb.co/bQRVgbB/city-6599328-1280.jpg" alt="Slide 3"
                                    className="w-full   " />
                              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#slide2" className="btn btn-circle">❮</a>
                                    <a href="#slide4" className="btn btn-circle">❯</a>
                              </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full  h-[550px] ">
                              <img
                                    src="https://i.ibb.co/56kBKv1/river-calm-scenery.jpg" alt="Slide 4"
                                    className="w-full" />
                              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#slide3" className="btn btn-circle">❮</a>
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                              </div>
                        </div>
                  </div> */}
            </div>
      );
};

export default Banner;