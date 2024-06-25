import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Box, Container, Image } from "@chakra-ui/react";
const DynamicCard = ({ gallery }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState();

  return (
    <Container className="container_modal">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={5}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {gallery?.map((item) => {
          return (
            <SwiperSlide key={item?.id}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                w={"100%"}
                bg={"white"}
              >
                <Image
                  w={"300px"}
                  cursor={"pointer"}
                  objectFit={"cover"}
                  src={item.original}
                />
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={5}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {gallery?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Box
                w={"100%"}
                bg={"white"}
                display={"flex"}
                flexDirection={"column"}
              >
                <Image cursor={"pointer"} src={item.original} />
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default DynamicCard;
