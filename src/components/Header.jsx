import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import mediapark from "../assets/mediapark.png";
import "../index.css";
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { Link } from "react-router-dom";
import Katolog from "../components/Katolog";
import { CiSearch } from "react-icons/ci";
import { useFavourites } from "../context/FavouritesProvider";
import { BackentContexts } from "../context/BaskentContext";
import { useContext, useState } from "react";
const Header = () => {
  const [IsActive, setIsActive] = useState(false);
  const { state } = useContext(BackentContexts);

  const { favourites } = useFavourites();
  return (
    <Box>
      <Container maxW={"1440px"} w={"100%"} p={"5px"}>
        <Flex mt={"20px"} align={"center"} justify={"space-between"}>
          <Flex align={"center"}>
            <Box>
              <Link to={"/"}>
                <Image
                  w={"175px"}
                  h={"65px"}
                  src={mediapark}
                  alt="rasm"
                  objectFit={"cover"}
                />
              </Link>
            </Box>
            <Flex
              borderRadius={"8px"}
              bg={"#dd1470"}
              onClick={() => setIsActive(!IsActive)}
              m={"0 auto"}
              align={"center"}
              justify={"center"}
              w={"150px"}
              h={"43px"}
              gap={"15px"}
              p={"12px"}
              border={"none"}
              outline={"none"}
              cursor={"pointer"}
            >
              <Box>
                <Text color={"white"} fontSize={"22px"}>
                  Katalog
                </Text>
              </Box>
              <Box>
                {IsActive ? (
                  <IoMdClose fontSize={"22px"} color="white" />
                ) : (
                  <CiMenuBurger fontSize={"22px"} color="white" />
                )}
              </Box>
              <Box
                className={`sidber-wrap_item ${IsActive ? "open" : "close"}`}
              >
                <Katolog />
              </Box>
            </Flex>
          </Flex>
          <Flex align={"center"}>
            <Box>
              <Input h={51} w={"400px"} placeholder="Search" />
            </Box>
            <Box
              bg={"#d92e15"}
              ml={"-50px"}
              color={"white"}
              borderRadius={"8px"}
              p={"10px"}
            >
              <CiSearch size={30} />
            </Box>
          </Flex>
          <Flex align={"center"} gap={"10px"}>
            <Link to={"/basket"}>
              <Flex direction={"column"} align={"center"}>
                <Box
                  position={"relative"}
                  display={"flex"}
                  alignContent={"center"}
                >
                  <Box>
                    <CiShoppingBasket size={30} />
                  </Box>
                  <Box
                    left={"27px"}
                    top={"-5px"}
                    bg={"#d82e14"}
                    color={"white"}
                    borderRadius={"10px"}
                    p={"5px"}
                    h={"20px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    position={"absolute"}
                  >
                    {state.length}
                  </Box>
                </Box>
                <Box>
                  <Text fontSize={"20px"} fontWeight={600}>
                    Корзина
                  </Text>
                </Box>
              </Flex>
            </Link>
            <Link to={"/chosen"}>
              <Flex direction={"column"} align={"center"}>
                <Box
                  position={"relative"}
                  display={"flex"}
                  alignContent={"center"}
                >
                  <Box>
                    <CiHeart size={30} />
                  </Box>
                  <Box
                    left={"27px"}
                    top={"-5px"}
                    bg={"#d82e14"}
                    color={"white"}
                    borderRadius={"10px"}
                    p={"5px"}
                    h={"20px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    position={"absolute"}
                  >
                    {favourites.length}
                  </Box>
                </Box>
                <Box>
                  <Text fontSize={"20px"} fontWeight={600}>
                    Избранное
                  </Text>
                </Box>
              </Flex>
            </Link>
            <Link to={"/account"}>
              <Flex direction={"column"} align={"center"}>
                <Box>
                  <LuUser size={30} />
                </Box>
                <Box>
                  <Text fontSize={"20px"} fontWeight={600}>
                    Войти
                  </Text>
                </Box>
              </Flex>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
