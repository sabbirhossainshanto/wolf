/* eslint-disable react/no-unknown-property */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const Banner = ({ card }) => {
  const navigate = useNavigate();

  const handleNavigate = (item) => {
    if (item?.link) {
      navigate(`/game-details/${item?.link}`);
    }
  };
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView="auto"
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {card?.map((item, i) => {
        return (
          <SwiperSlide
            onClick={() => handleNavigate(item)}
            key={i}
            style={{ width: "270px", borderRadius: "10px", overflow: "hidden" }}
          >
            <div _ngcontent-jfw-c80="">
              <img
                _ngcontent-jfw-c112=""
                apptrackclick=""
                trackswipe=""
                className="banner"
                alt="Instant Games"
                src={item?.image}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Banner;
