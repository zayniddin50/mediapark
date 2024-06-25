import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import { useFavourites } from "../context/FavouritesProvider";

import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
const Chosen = () => {
  const { favourites, checkFavourite, deleteFavourites, addFavourite } =
    useFavourites();
  function handleFavourite(product) {
    if (checkFavourite(product.id)) {
      deleteFavourites(product.id);
    } else {
      addFavourite(product);
    }
  }
  return (
    <Box>
      <Container maxW={"1440px"} w={"100%"}>
        {favourites.length ? (
          <Grid templateColumns={"repeat(5,1fr)"} gap={"10px"}>
            {favourites.map((product) => (
              <GridItem
                key={product.id}
                bg={"white"}
                w={"100%"}
                borderRadius={"5px"}
                p={"10px"}
              >
                <Box>
                  <Flex justify={"end"}>
                    <Button
                      backgroundColor={"transparent"}
                      onClick={() => handleFavourite(product)}
                    >
                      {checkFavourite(product.id) ? (
                        <FaHeart size={30} color="red" />
                      ) : (
                        <CiHeart size={30} cursor={"pointen"} />
                      )}
                    </Button>
                  </Flex>
                  <Image w={"100%"} objectFit={"cover"} src={product.img} />

                  <Text color={"#dd1470"} fontSize={"25px"} fontWeight={600}>
                    {product.current_price} сум
                  </Text>
                  <Text
                    _hover={{ color: "#dd1470" }}
                    transition={"all 1s"}
                    cursor={"pointer"}
                    fontSize={"21px"}
                    className="name"
                  >
                    {product.category_name}
                  </Text>
                  <Flex align={"center"} gap={"10px"}>
                    <Box>
                      <Text fontSize={"22px"} color={"silver"}>
                        Brand
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        _hover={{ color: "#dd1470" }}
                        cursor={"pointer"}
                        transition={"all 1s"}
                        color={"#828282"}
                        textDecoration={"underline"}
                        fontSize={"22px"}
                      >
                        {product.brand_name}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
                <Flex align={"center"} gap={"10px"}>
                  <Box>
                    <Button
                      mb={"10px"}
                      mt={"10px"}
                      w={"250px"}
                      transition={"all 1s"}
                      _hover={{ bg: "#d81474", color: "white" }}
                      color={"black"}
                      fontSize={"22px"}
                    >
                      Buy now
                    </Button>
                  </Box>
                </Flex>
              </GridItem>
            ))}
          </Grid>
        ) : (
          <Flex
            bg={"white"}
            justify={"center"}
            flexDirection={"column"}
            gap={"30px"}
            align={"center"}
            borderRadius={"10px"}
            p={"180px"}
          >
            <Box borderRadius={"5px"} bg={"#FDF5F3"}>
              <CiHeart color="#d92e15" size={50} />
            </Box>
            <Box>
              <Text color={"#1D242F"} fontSize={"25px"} fontWeight={600}>
                You don't have any favorites
              </Text>
            </Box>
            <Box color={"#6c7178"} fontSize={18} fontWeight={600}>
              Добавляйте товары в Избранное с помощью ❤️️
            </Box>
            <Box>
              <Link to={"/"}>
                <Button
                  p={"21px 80px"}
                  fontSize={"18px"}
                  style={{ background: "#D92E15" }}
                  color={"white"}
                  borderRadius={"8px"}
                >
                  Back
                </Button>
              </Link>
            </Box>
          </Flex>
        )}
      </Container>
    </Box>
  );
};

export default Chosen;
