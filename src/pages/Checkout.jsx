import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { useBasket } from "../context/BaskentContext";

const Checkout = () => {
  const { checked } = useBasket();
  return (
    <Box>
      <Container maxW={"1440px"} p={"25px"} w={"100%"}>
        <Accordion allowMultiple>
          <AccordionItem className="accardion_checkount">
            <AccordionButton className="accardion_checkount">
              <Text flex="1" textAlign="left">
                Section 1 title
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel className="accardion_checkount" pb={4}>
              <Flex direction={"column"}>
                {checked.map((el) => {
                  return (
                    <Box key={el.id}>
                      <Image src={el.img} w={"80px"} />
                    </Box>
                  );
                })}
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Box>
  );
};

export default Checkout;
