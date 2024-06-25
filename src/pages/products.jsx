import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import DynamicCard from "../corusel/DynamicCard";
import { BackentContexts } from "../context/BaskentContext";
import { useFavourites } from "../context/FavouritesProvider";
const Products = () => {
  const { addToStorage } = useContext(BackentContexts);
  const { checkFavourite, deleteFavourites, addFavourite } = useFavourites();

  const [products, setProducts] = useState({});

  const params = useParams();
  const ProductPage = (product) => {
    addToStorage(product, 1);
  };
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/${params.id} `)
      .then((res) => setProducts(res.data.data));
  }, [params.id]);

  return (
    <Box>
      <Container maxW={"1440px"} w={"100%"}>
        {!products?.id ? (
          <Flex gap={"10px"} justifyContent={"center"} m={"0 auto"}>
            <Image
              src={"https://loading.io/assets/mod/spinner/rolling/lg.gif"}
            />
          </Flex>
        ) : (
          <Flex justify={"space-between"} gap={"10px"}>
            <Flex
              justify={"space-between"}
              p={"30px"}
              w={"75%"}
              bg={"white"}
              borderRadius={"10px"}
            >
              <Box>
                <Box>
                  <Heading mb={"10px"} fontWeight={800} fontSize={"27px"}>
                    {products.title_name}
                  </Heading>
                </Box>
                <Flex align={"center"} gap={"10px"}>
                  <Box>
                    <CiHeart fontSize={"25px"} />
                  </Box>
                  <Box>
                    <Text fontSize={"20px"}>В избранном</Text>
                  </Box>
                </Flex>
                <DynamicCard gallery={products.gallery} />
              </Box>
              <Flex direction={"column"} gap={"5px"}>
                <Box gap={"3px"} display={"flex"}>
                  <Text fontWeight={400} color={"#828282"} fontSize={"20px"}>
                    Brand:
                  </Text>
                  <Box>
                    <Link
                      to={`/productlist/?title=${products.category_slug}  `}
                    >
                      <Text
                        fontSize={"21px"}
                        fontWeight={700}
                        color={"#dd1470"}
                      >
                        {products.brand_name}
                      </Text>
                    </Link>
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                  <Box>
                    <Text fontSize={"17px"}>SKU</Text>
                  </Box>
                  <Box>
                    <Text fontSize={"18px"} fontWeight={500}>
                      {products.unique_code}
                    </Text>
                  </Box>
                </Box>
              </Flex>
            </Flex>
            <Box
              className="box_item_products"
              w={"25%"}
              bg={"white"}
              borderRadius={"10px"}
              p={"20px"}
            >
              <Flex direction={"column"} gap={"10px"}>
                <Box>
                  <Text color={"#282c3f"} fontWeight={600} fontSize={"22px"}>
                    Цена товара
                  </Text>
                </Box>
                <Box>
                  <Box>
                    <Text color={"#dd1470"} fontSize={"26px"} fontWeight={600}>
                      {products.current_price?.toLocaleString("US")} сум
                    </Text>
                  </Box>
                </Box>
                <Box>
                  <Button
                    onClick={() => ProductPage(products)}
                    variant={"unset"}
                    className="button_btn_products"
                  >
                    Add to Basket
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Flex>
        )}
      </Container>
    </Box>
  );
};

export default Products;
