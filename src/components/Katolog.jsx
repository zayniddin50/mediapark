import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa";
const Katolog = () => {
  const [hoverHoverKatolog, setHoverKatolog] = useState(true);
  const [hoveredKampyuterlar, setHoveredKampyuterlar] = useState(false);
  return (
    <Box position={"relative"}>
      <Container maxW={"1440px"} p={"10px"} w={"100%"}>
        <Box
          borderRadius={"6px"}
          m={" 0 10px"}
          p={" 0 5px"}
          display={"flex"}
          w={"100%"}
          bg={"white"}
          minH={"85vh"}
        >
          <Flex
            p={"0 8px 0 10px"}
            w={"20% "}
            borderRight={"1px solid gray"}
            direction={"column"}
          >
            <Box
              onMouseEnter={() => {
                setHoverKatolog(true);
                setHoveredKampyuterlar(false);
              }}
              style={{
                backgroundColor: hoverHoverKatolog ? "#ffedb7" : "transparent",
              }}
              justifyContent={"space-between"}
              display={"flex"}
            >
              <Box gap={"10px"} display={"flex"}>
                <Box pt={"10px"}>
                  <FaChevronLeft size={20} />
                </Box>
                <Box>
                  <Text fontSize={"25px"}>Telfon</Text>
                </Box>
              </Box>
              <Box pt={"5px"}>
                <MdKeyboardArrowRight size={30} />
              </Box>
            </Box>
            <Box
              onMouseEnter={() => {
                setHoverKatolog(false);
                setHoveredKampyuterlar(true);
              }}
              onMouseLeave={() => setHoveredKampyuterlar(true)}
              justifyContent={"space-between"}
              display={"flex"}
              style={{
                backgroundColor: hoveredKampyuterlar
                  ? "#ffedb7"
                  : "transparent",
              }}
            >
              <Box gap={"10px"} display={"flex"}>
                <Box pt={"10px"}>
                  <FaChevronLeft size={20} />
                </Box>
                <Box>
                  <Text fontSize={"25px"}>texnika</Text>
                </Box>
              </Box>
              <Box pt={"5px"}>
                <MdKeyboardArrowRight size={30} />
              </Box>
            </Box>
          </Flex>
          <Box w={"100%"}>
            {hoverHoverKatolog && (
              <Grid
                templateColumns={"repeat(3,1fr)"}
                w={"100%"}
                p={"20px"}
                gap={"10px"}
              >
                <GridItem>
                  <Text>Smartfonlar</Text>
                  <Text>samsung</Text>
                  <Text>xiamo</Text>
                  <Text>vivo</Text>
                  <Text>iphone</Text>
                  <Text>honor</Text>
                  <Text>huavei</Text>
                  <Text>infinix</Text>
                  <Text>oppo</Text>
                </GridItem>
                <GridItem>
                  <Text>Planshetlar</Text>
                  <Text>Samsung</Text>
                  <Text>Xiaomi</Text>
                  <Text>Huawei</Text>
                  <Text>Huawei</Text>
                  <Text>HONOR</Text>
                </GridItem>
                <GridItem>
                  <Text>ТЕЛЕФОН АКСЕССУАРЛАРИ</Text>
                  <Text>Ташқи батареялар</Text>
                  <Text>Смартфонлар учун ушлагичлар</Text>
                  <Text>Қувватлаш қурилмалари</Text>
                  <Text>Қувватлаш қурилмалари</Text>
                  <Text>Ўйин аксессуарлари</Text>
                  <Text>USB кабеллар</Text>
                  <Text>Хотира карталари</Text>
                  <Text>Селфи моноподлари</Text>
                  <Text>Қулоқчинлар</Text>
                </GridItem>
              </Grid>
            )}
            <Grid>
              {hoveredKampyuterlar && (
                <>
                  <Text fontSize={"22px"} fontWeight={800}>
                    Смартфонлар ва Гаджетлар
                  </Text>
                  <Grid
                    templateColumns={"repeat(3,1fr)"}
                    w={"100%"}
                    p={"20px"}
                    gap={"10px"}
                  >
                    <GridItem>
                      <Text>Smartfonlar</Text>
                      <Text>samsung</Text>
                      <Text>xiamo</Text>
                      <Text>vivo</Text>
                      <Text>iphone</Text>
                      <Text>honor</Text>
                      <Text>huavei</Text>
                      <Text>infinix</Text>
                      <Text>oppo</Text>
                    </GridItem>
                    <GridItem>
                      <Text>Planshetlar</Text>
                      <Text>Samsung</Text>
                      <Text>Xiaomi</Text>
                      <Text>Huawei</Text>
                      <Text>Huawei</Text>
                      <Text>HONOR</Text>
                    </GridItem>
                    <GridItem>
                      <Text>ТЕЛЕФОН АКСЕССУАРЛАРИ</Text>
                      <Text>Ташқи батареялар</Text>
                      <Text>Смартфонлар учун ушлагичлар</Text>
                      <Text>Қувватлаш қурилмалари</Text>
                      <Text>Қувватлаш қурилмалари</Text>
                      <Text>Ўйин аксессуарлари</Text>
                      <Text>USB кабеллар</Text>
                      <Text>Хотира карталари</Text>
                      <Text>Селфи моноподлари</Text>
                      <Text>Қулоқчинлар</Text>
                    </GridItem>
                  </Grid>
                </>
              )}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Katolog;
