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
import { useContext } from "react";
import { BackentContexts, useBasket } from "../context/BaskentContext";
import { Link } from "react-router-dom";
import BackentCard from "../media/BasketCard";

const Basket = () => {
  const { checked } = useBasket();
  const { state } = useContext(BackentContexts);

  const calculatePrice = (items) => {
    items = checked;
    let sum = 0;
    if (items.length > 0) {
      for (let item of items) {
        sum += item.qty * item.current_price;
      }
    }
    return sum;
  };

  return (
    <Box>
      <Container maxW={"1440px"} p={"10px"} w={"100%"}>
        {!state.length ? (
          <Flex
            bg={"white"}
            justify={"center"}
            flexDirection={"column"}
            gap={"30px"}
            align={"center"}
            borderRadius={"10px"}
            p={"150px"}
          >
            <Box>
              <Image
                w={"200px"}
                alt="rasm"
                src={
                  "https://idea.uz/_next/image?url=%2Fimg%2Fothers%2Fbasket-empty.png&w=3840&q=75"
                }
              />
            </Box>
            <Box>
              <Text color={"#1D242F"} fontSize={"25px"} fontWeight={600}>
                There is nothing in the cart yet
              </Text>
            </Box>
            <Box color={"#6c7178"} fontSize={18} fontWeight={600}>
              You can start shopping from the home page or use the search if you
              are looking for something specific.
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
                  Go to main menu
                </Button>
              </Link>
            </Box>
          </Flex>
        ) : (
          <Grid
            templateColumns={"repeat(3,1fr)"}
            alignItems={"start"}
            gap={"10px"}
          >
            <GridItem display={"flex"} colSpan="2" flexDirection={"column"}>
              {state.map((items) => {
                return <BackentCard item={items} key={items.id} />;
              })}
            </GridItem>
            <GridItem
              position={"sticky"}
              bg={"white"}
              top={"3px"}
              w={"100%"}
              borderRadius={"10px"}
            >
              {" "}
              <Flex direction={"column"} p={"15px"} gap={"7px"}>
                {" "}
                <Box>
                  {" "}
                  <Text fontSize={"22px"}>Ваша корзина</Text>{" "}
                </Box>{" "}
                <Flex direction={"column"}>
                  {" "}
                  {state.map((product) => {
                    return (
                      <Box key={product.id}>
                        {" "}
                        <Flex direction={"column"} mt={"10px"} gap={"5px"}>
                          {" "}
                          <Flex gap={"5px"} align={"center"}>
                            {" "}
                            <Box>
                              {" "}
                              <Text
                                className="basket_title"
                                fontSize={"14px"}
                                fontWeight={700}
                              >
                                {" "}
                                {product.name}{" "}
                              </Text>{" "}
                            </Box>{" "}
                            <Flex align={"center"}>
                              {" "}
                              <Box>
                                {" "}
                                <Text fontWeight={500}>
                                  ({product.qty} шт)
                                </Text>{" "}
                              </Box>{" "}
                            </Flex>{" "}
                          </Flex>{" "}
                          <Flex>
                            {" "}
                            <Box>
                              {" "}
                              <Text fontSize={"14px"} fontWeight={600}>
                                {" "}
                                Цена{" "}
                              </Text>{" "}
                            </Box>{" "}
                            <Box>
                              {" "}
                              <Text fontSize={"15px"} fontWeight={700}>
                                {" "}
                                {product.current_price.toLocaleString(
                                  "Ru"
                                )} сум{" "}
                              </Text>{" "}
                            </Box>{" "}
                          </Flex>{" "}
                        </Flex>{" "}
                      </Box>
                    );
                  })}{" "}
                </Flex>{" "}
                <Flex justify={"space-between"} align={"center"}>
                  {" "}
                  <Box>
                    {" "}
                    <Text color={"#282f3c"} fontSize={"17px"} fontWeight={700}>
                      {" "}
                      {calculatePrice(state).toLocaleString("en-US")} сум{" "}
                    </Text>{" "}
                  </Box>{" "}
                </Flex>{" "}
                <Link to={"/checkout"}>
                  {" "}
                  <Button className="basket-btn" isDisabled={!checked.length}>
                    {" "}
                    Kengisi{" "}
                  </Button>{" "}
                </Link>{" "}
              </Flex>{" "}
            </GridItem>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Basket;
