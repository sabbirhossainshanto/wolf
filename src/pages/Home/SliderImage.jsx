/* eslint-disable react/no-unknown-property */
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const SliderImage = () => {
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
        <SwiperSlide>
          {" "}
          <div _ngcontent-jfw-c80="">
            <img
              _ngcontent-jfw-c112=""
              apptrackclick=""
              trackswipe=""
              className="banner"
              alt="Instant Games"
              src="https://d2eb1cys5jgnub.cloudfront.net/b/a/instant-games.webp"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div _ngcontent-jfw-c80="">
            <img
              _ngcontent-jfw-c112=""
              apptrackclick=""
              trackswipe=""
              className="banner"
              alt="Aviator"
              src="https://d2eb1cys5jgnub.cloudfront.net/b/a/casino-aviator.webp"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div _ngcontent-jfw-c80="">
            <img
              _ngcontent-jfw-c112=""
              apptrackclick=""
              trackswipe=""
              className="banner"
              alt="Ludo"
              src="https://d2eb1cys5jgnub.cloudfront.net/b/a/ludo.webp"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div _ngcontent-jfw-c80="">
            <img
              _ngcontent-jfw-c112=""
              apptrackclick=""
              trackswipe=""
              className="banner"
              alt="Teen Patti"
              src="https://d2eb1cys5jgnub.cloudfront.net/b/a/casino-teen-patti.webp"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div _ngcontent-jfw-c80="">
            <img
              _ngcontent-jfw-c112=""
              apptrackclick=""
              trackswipe=""
              className="banner"
              alt="Virtual Sports"
              src="https://d2eb1cys5jgnub.cloudfront.net/b/a/virtual_sports.webp"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div _ngcontent-jfw-c80="">
            <img
              _ngcontent-jfw-c112=""
              apptrackclick=""
              trackswipe=""
              className="banner"
              alt="Cricket"
              src="https://d2eb1cys5jgnub.cloudfront.net/b/a/cricket.webp"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div _ngcontent-jfw-c80="">
            <img
              _ngcontent-jfw-c112=""
              apptrackclick=""
              trackswipe=""
              className="banner"
              alt="Football"
              src="https://d2eb1cys5jgnub.cloudfront.net/b/a/football.webp"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div _ngcontent-jfw-c80="">
            <img
              _ngcontent-jfw-c112=""
              apptrackclick=""
              trackswipe=""
              className="banner"
              alt="Horse Racing"
              src="https://d2eb1cys5jgnub.cloudfront.net/b/a/horse-racing.webp"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div _ngcontent-jfw-c80="">
            <img
              _ngcontent-jfw-c112=""
              apptrackclick=""
              trackswipe=""
              className="banner"
              alt="Live casino"
              src="https://d2eb1cys5jgnub.cloudfront.net/b/live-casino-1.webp"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SliderImage;
