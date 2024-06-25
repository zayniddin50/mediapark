import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import Modal from "react-modal";
import { useContext, useEffect, useState } from "react";
import { LuShoppingBag } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useFavourites } from "../context/FavouritesProvider";
import { ModalContexts } from "../context/ModalContexts";
import { useNavigate } from "react-router-dom";
const CategoryProducts = () => {
  const { SetOpen } = useContext(ModalContexts);
  const { checkFavourite, deleteFavourites, addFavourite } = useFavourites();
  const [slice, setSlice] = useState(15);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL)
      .then((item) => setProduct(item.data.data));
  }, []);

  function handleFavourite(product) {
    if (checkFavourite(product.id)) {
      deleteFavourites(product.id);
    } else {
      addFavourite(product);
    }
  }
  const navigate = useNavigate();
  const card = [
    <Box
      display={"block"}
      w={"100%"}
      borderRadius={"5px"}
      padding="6"
      bg="white"
    >
      <SkeletonCircle
        h={"200px"}
        borderRadius={"5px"}
        display={"flex"}
        justifyContent={"center"}
        w={"100%"}
      />
      <SkeletonText
        w={"100%"}
        mt="4"
        noOfLines={10}
        spacing="4"
        skeletonHeight="2"
      />
    </Box>,
  ];
  const arr = Array(10).fill(card);
  return (
    <Box>
      <Container maxW={"1440px"}>
        {!product.length ? (
          <Grid minH={"100%"} templateColumns={"repeat(5,1fr)"} gap={"10px"}>
            {arr.map((item) => {
              return item;
            })}
          </Grid>
        ) : (
          <>
            <Grid templateColumns={"repeat(5,1fr)"} gap={"10px"}>
              {product.slice(0, slice).map((products) => {
                return (
                  <GridItem
                    bg={"white"}
                    key={products.id}
                    p={"20px"}
                    className="chakra-image.css-1ywmljq"
                    w={"100%"}
                    borderRadius={"6px"}
                    minHeight={"100%"}
                  >
                    <Flex
                      onClick={() => handleFavourite(products)}
                      justify={"end"}
                    >
                      {checkFavourite(products.id) ? (
                        <FaHeart color="red" size={24} cursor={"pointer"} />
                      ) : (
                        <CiHeart size={30} cursor={"pointer"} />
                      )}
                    </Flex>
                    <Image
                      cursor={"pointer"}
                      onClick={() =>
                        navigate(`/products/${products.id}-${products.slug}  `)
                      }
                      w={"100%"}
                      objectFit={"cover"}
                      src={products.img}
                    />
                    <Text color={"#dd1470"} fontSize={"25px"} fontWeight={600}>
                      {products.current_price.toLocaleString("US")} сум
                    </Text>
                    <Flex align={"center"}>
                      <Box>
                        <Text
                          onClick={() =>
                            navigate(
                              `/products/${products.id} - ${products.slug}  `
                            )
                          }
                          className="name"
                          _hover={{ color: "#dd1470" }}
                          transition={"all 1s"}
                          cursor={"pointer"}
                          fontSize={"16px"}
                        >
                          {products.title_name}
                        </Text>
                      </Box>
                    </Flex>
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
                          {products.brand_name}
                        </Text>
                      </Box>
                    </Flex>
                    <Flex align={"center"} gap={"10px"}>
                      <Box>
                        <Button
                          mb={"10px"}
                          mt={"10px"}
                          w={"166px"}
                          h={"48px"}
                          transition={"all 0.5s"}
                          _hover={{ bg: "#d81474", color: "white" }}
                          color={"black"}
                          fontSize={"22px"}
                        >
                          Buy now
                        </Button>
                      </Box>
                      <Box className="button_btn">
                        <Button
                          onClick={() => SetOpen(products)}
                          variant={"uns"}
                        >
                          <LuShoppingBag size={19} />
                        </Button>
                      </Box>
                    </Flex>
                  </GridItem>
                );
              })}
            </Grid>
            <Box
              mt={"10px"}
              mb={"15px"}
              display={"block"}
              textAlign={"center"}
              justifyContent={"center"}
            >
              <Button w={"50%"} onClick={() => setSlice(slice + 5)}>
                <Text variant={"unset"} className="product_btn">
                  Yanada ko'proq ko'rsatish
                </Text>
              </Button>
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
};

export default CategoryProducts;
