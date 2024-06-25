import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useFavourites } from "../context/FavouritesProvider";
import { ModalContexts } from "../context/ModalContexts";
import MainModal from "../modal/MainModal";

const Category = () => {
  const { SetOpen } = useContext(ModalContexts);
  const { checkFavourite, deleteFavourites, addFavourite } = useFavourites();
  const [products, setProducts] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const [checkend, setCheckend] = useState(false);
  const handleCheckend = (e) => {
    console.log(e.target.checked);
    console.log(e.target.name);
  };
  const title = searchParams.get("title");

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL)
      .then((res) => setProducts(res.data.data));
  }, []);

  useEffect(() => {
    const category = products.filter((items) => {
      return items.category_slug === title;
    }, []);
    setCategoryProducts(category);
  }, [products]);
  console.log(products);

  function handleFavourite(product) {
    if (checkFavourite(product.id)) {
      deleteFavourites(product.id);
    } else {
      addFavourite(product);
    }
  }

  const card = [
    <Box
      display={"block"}
      w={"100%"}
      borderRadius={"5px"}
      padding="4"
      bg="white"
    >
      <SkeletonCircle
        h={"180px"}
        borderRadius={"5px"}
        display={"flex"}
        justifyContent={"center"}
        w={"200px"}
      />
      <SkeletonText w={"100%"} noOfLines={8} spacing="4" skeletonHeight="2" />
    </Box>,
  ];
  const arr = Array(4).fill(card);
  const navigate = useNavigate();
  const [brends, setBrends] = useState([]);

  useEffect(() => {
    const arr = [];
    categoryProducts.map((el) => {
      if (arr.includes(el.brand_name)) {
        return null;
      }
      arr.push(el.brand_name);
      setBrends(arr);
    });
  }, [categoryProducts]);

  return (
    <Container p={"20px"} maxW={"1440px"}>
      <Grid gap={"10px"} templateColumns={"repeat(2,1fr)"}>
        <Grid>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton className="AccordionButton">
                  <Box as="span" flex="1" textAlign="left">
                    Title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel bg={"white"} borderRadius={"5px"} pb={4}>
                <Box mb={"10px"}>
                  <Input placeholder="Search" />
                </Box>
                {brends.map((item) => {
                  return (
                    <Box w={"100%"} key={item.id}>
                      <Flex align={"center"} gap={"10px"}>
                        <Box>
                          <input
                            defaultChecked={checkend}
                            onChange={handleCheckend}
                            name={item}
                            className="checkbox"
                            type="checkbox"
                          />
                        </Box>
                        <Box>
                          <Text fontSize={"22px"}>{item}</Text>
                        </Box>
                      </Flex>
                    </Box>
                  );
                })}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Grid>
        <Grid>
          {!products.length ? (
            <Grid templateColumns={"repeat(4,1fr)"} gap={"10px"}>
              {arr.map((items) => {
                return items;
              })}
            </Grid>
          ) : (
            <Grid
              alignItems={"center"}
              gap={"10px"}
              templateColumns={"repeat(4,1fr)"}
            >
              {categoryProducts.map((item) => (
                <GridItem
                  bg={"white"}
                  key={item.id}
                  p={"10px"}
                  className="chakra-image.css-1ywmljq"
                  w={"100%"}
                  borderRadius={"6px"}
                  minHeight={"100%"}
                >
                  <Flex onClick={() => handleFavourite(item)} justify={"end"}>
                    {checkFavourite(item.id) ? (
                      <FaHeart color="red" size={30} cursor={"pointer"} />
                    ) : (
                      <CiHeart size={30} cursor={"pointer"} />
                    )}
                  </Flex>
                  <Image
                    cursor={"pointer"}
                    onClick={() =>
                      navigate(`/products/${item.id} -${item.slug}`)
                    }
                    w={"100%"}
                    objectFit={"cover"}
                    src={item.img}
                  />
                  <Text color={"#dd1470"} fontSize={"25px"} fontWeight={600}>
                    {item.current_price.toLocaleString("US")} сум
                  </Text>
                  <Text
                    _hover={{ color: "#dd1470" }}
                    transition={"all 1s"}
                    cursor={"pointer"}
                    fontSize={"16px"}
                    className="name"
                    onClick={() =>
                      navigate(`/products/${item.id} -${item.slug}  `)
                    }
                  >
                    {item.title_name}
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
                        {item.brand_name}
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
                        _hover={{
                          bg: "#d81474",
                          color: "white",
                        }}
                        color={"black"}
                        fontSize={"22px"}
                      >
                        Buy now
                      </Button>
                    </Box>
                    <Box className="button_btn">
                      <Button onClick={() => SetOpen(item)} variant={"uns"}>
                        <LuShoppingBag size={19} />
                      </Button>
                    </Box>
                  </Flex>
                </GridItem>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
      <MainModal />
    </Container>
  );
};

export default Category;
