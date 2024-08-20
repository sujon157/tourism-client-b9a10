




const Banner = () => {

      return (
            <div>
                  <div className="carousel  w-full">
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
                  </div>
            </div>
      );
};

export default Banner;