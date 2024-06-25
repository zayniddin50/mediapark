import { Box, Button, Flex, GridItem, Image, Text } from "@chakra-ui/react";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useFavourites } from "../context/FavouritesProvider";
import { useBasket } from "../context/BaskentContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const BackentCard = ({ item }) => {
  const navigate = useNavigate();
  const { checkFavourite, deleteFavourites, addFavourite } = useFavourites();
  const { incrementItem, decrementItem, removeToStorage, checked, setChecked } =
    useBasket();
  const { pathname } = useLocation();

  function handleFavourite(product) {
    if (checkFavourite(product.id)) {
      deleteFavourites(product.id);
    } else {
      addFavourite(product);
    }
  }
  const Remove = (id) => {
    removeToStorage(id);
  };

  const counter = parseInt(item.current_price) * item.qty;
  const handelChecked = (item) => {
    setChecked((prev) => {
      return prev.some((items) => items.id == item.id)
        ? prev.filter((item1) => item1.id !== item.id)
        : [...prev, item];
    });
  };

  return (
    <Box>
      <GridItem>
        <Flex justify={"space-between"}>
          <Flex
            p={"5px"}
            borderRadius={"8px"}
            w={"100%"}
            bg={"white"}
            align={"center"}
            gap={"10px"}
            justify={"space-between"}
          >
            <Flex align={"center"} gap={"10px"}>
              <Box>
                <Box p={"10px"}>
                  <input
                    onChange={(e) => handelChecked(item)}
                    className="baskent_input"
                    checked={checked.some((product) => product.id == item.id)}
                    type="checkbox"
                  />
                </Box>
                <Image
                  w={"150px"}
                  h={"auto"}
                  objectFit={"cover"}
                  alt="rasm"
                  src={item.img}
                />
              </Box>
              <Flex direction={"column"} gap={"3px"}>
                <Box>
                  <Text fontSize={"22px"} color={"#dd1470"} fontWeight={500}>
                    {counter.toLocaleString("US")} сум
                  </Text>
                </Box>
                <Box onClick={() => navigate(`/products/${item.id}`)}>
                  <Text
                    cursor={"pointer"}
                    _hover={{ color: "#dd1470" }}
                    transition={"0.3s all"}
                    color={"#282f3c"}
                    fontSize={"13px"}
                    fontWeight={500}
                  >
                    {item.title_name}
                  </Text>
                </Box>
              </Flex>
            </Flex>
            <Flex gap={"10px"} align={"center"}>
              <Box
                onClick={() => Remove(item.id)}
                cursor={"pointer"}
                _hover={{ color: "#dd1470" }}
                transition={"all 0.5s"}
              >
                <FaRegTrashAlt size={30} />
              </Box>
              <Flex onClick={() => handleFavourite(item)}>
                {checkFavourite(item.id) ? (
                  <FaHeart color="red" size={40} cursor={"pointer"} />
                ) : (
                  <Box>
                    <CiHeart size={40} cursor={"pointer"} />
                  </Box>
                )}
              </Flex>
              <Box display={"flex"} gap={"10px"}>
                <Button
                  bg={"#f6f6f6"}
                  variant={"unset"}
                  onClick={() => decrementItem(item.id)}
                >
                  -
                </Button>
                <Button variant={"unset"}>{item.qty}</Button>
                <Button
                  bg={"#f6f6f6"}
                  variant={"unset"}
                  onClick={() => incrementItem(item.id)}
                >
                  +
                </Button>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </GridItem>
    </Box>
  );
};

export default BackentCard;
