/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const SliderImage = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
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
        onAutoplayTimeLeft={onAutoplayTimeLeft}
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
        <div 
       
        className="autoplay-progress" slot="container-end">
          <svg
          
          viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default SliderImage;
