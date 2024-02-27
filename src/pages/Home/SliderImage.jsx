/* eslint-disable react/no-unknown-property */
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const SliderImage = ({bannerImage}) => {
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
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {bannerImage?.map((image,i )=> {
          return (
            <SwiperSlide key={i}>
            {" "}
            <div _ngcontent-jfw-c80="">
              <img
                _ngcontent-jfw-c112=""
                apptrackclick=""
                trackswipe=""
                className="banner"
                alt="Instant Games"
                src={image}
              />
            </div>
          </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  );
};

export default SliderImage;
