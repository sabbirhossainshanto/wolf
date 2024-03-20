/* eslint-disable react/no-unknown-property */
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  useEffect(() => {
    const leftArrow = document.getElementsByClassName("swiper-button-prev");
    Array?.from(leftArrow)?.forEach((item) => {
      item?.remove();
    });
    const rightArrow = document.getElementsByClassName("swiper-button-next");
    Array?.from(rightArrow)?.forEach((item) => {
      item?.remove();
    });
  }, []);
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={2}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide style={{ borderRadius: "10px", overflow: "hidden" }}>
        {" "}
        <div _ngcontent-jfw-c80="">
          <img
            _ngcontent-jfw-c112=""
            apptrackclick=""
            trackswipe=""
            className="banner"
            alt="Instant Games"
            src="/public/assets/img/banner1.png"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ borderRadius: "10px", overflow: "hidden" }}>
        {" "}
        <div _ngcontent-jfw-c80="">
          <img
            _ngcontent-jfw-c112=""
            apptrackclick=""
            trackswipe=""
            className="banner"
            alt="Instant Games"
            src="/public/assets/img/banner1.png"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ borderRadius: "10px", overflow: "hidden" }}>
        {" "}
        <div _ngcontent-jfw-c80="">
          <img
            _ngcontent-jfw-c112=""
            apptrackclick=""
            trackswipe=""
            className="banner"
            alt="Instant Games"
            src="/public/assets/img/banner1.png"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
