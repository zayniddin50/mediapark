import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Container, Image } from "@chakra-ui/react";
const BannerCorusel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box>
      <Container maxW={"1440px"} w={"100%"} p={"20px"}>
        <Box className="slider-container">
          <Slider {...settings}>
            <Box>
              <Image
                w={"100%"}
                borderRadius={"10px"}
                objectFit={"cover"}
                src={
                  "	https://cdn.mediapark.uz/imgs/91dca206-dd21-482d-ae98-fc86741ee967_%D1%80%D1%83%D1%81_-(3).webp"
                }
              />
            </Box>
            <Box>
              <Image
                w={"100%"}
                borderRadius={"10px"}
                objectFit={"cover"}
                src={
                  "	https://cdn.mediapark.uz/imgs/83f3ccdc-1dd4-4986-acc9-c01ebbdd212f_%D1%80%D1%83%D1%81-(2).webp"
                }
              />
            </Box>
            <Box>
              <Image
                w={"100%"}
                objectFit={"cover"}
                borderRadius={"10px"}
                src={
                  "	https://cdn.mediapark.uz/imgs/ed2f05b5-4a65-4e6f-b661-e28ba9e58bc1_%D1%80.webp"
                }
              />
            </Box>
            <Box>
              <Image
                w={"100%"}
                objectFit={"cover"}
                borderRadius={"10px"}
                src={
                  "	https://cdn.mediapark.uz/imgs/91dca206-dd21-482d-ae98-fc86741ee967_%D1%80%D1%83%D1%81_-(3).webp"
                }
              />
            </Box>
            <Box>
              <Image
                w={"100%"}
                objectFit={"cover"}
                borderRadius={"10px"}
                src={
                  "	https://cdn.mediapark.uz/imgs/83f3ccdc-1dd4-4986-acc9-c01ebbdd212f_%D1%80%D1%83%D1%81-(2).webp"
                }
              />
            </Box>
            <Box>
              <Image
                w={"100%"}
                objectFit={"cover"}
                borderRadius={"10px"}
                src={
                  "	https://cdn.mediapark.uz/imgs/ed2f05b5-4a65-4e6f-b661-e28ba9e58bc1_%D1%80.webp"
                }
              />
            </Box>
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default BannerCorusel;
