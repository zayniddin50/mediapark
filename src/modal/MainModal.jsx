import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ModalContexts } from "../context/ModalContexts";
import DynamicCard from "../corusel/DynamicCard";
import { BackentContexts } from "../context/BaskentContext";

const MainModal = () => {
  const { addToStorage } = useContext(BackentContexts);
  const { open, CloseOpen, product } = useContext(ModalContexts);
  const addToKorzinka = (products) => {
    addToStorage(products, count);
    CloseOpen();
  };
  const [count, setCount] = useState(1);
  const decrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const increment = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const counter = parseInt(product.current_price) * count;
  return (
    <Box>
      <Modal isOpen={open} onClose={CloseOpen} isCentered>
        <ModalOverlay />
        <ModalContent className="modalContent">
          <ModalCloseButton />
          <ModalBody>
            <Flex className="modal" align={"center"} justify={"space-between"}>
              <Box>
                <DynamicCard key={product.id} gallery={product.gallery} />
              </Box>
              <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
                <Box>
                  <Text
                    fontSize={"10px"}
                    _hover={{ color: "#dd1470" }}
                    fontWeight={800}
                    className="name"
                    transition={"all 0.5s"}
                    cursor={"pointer"}
                  >
                    {product.title_name}
                  </Text>
                </Box>
                <Text fontWeight={700} fontSize={"13px"} color={"#1f2026"}>
                  Количество:
                </Text>
                <Box
                  display={"flex"}
                  gap={"10px"}
                  w={"125px"}
                  borderRadius={"5px"}
                  border={"1px solid silver"}
                  justifyContent={"center"}
                >
                  <Button
                    fontSize={"25px"}
                    variant={"unset"}
                    onClick={increment}
                  >
                    -
                  </Button>
                  <Button fontSize={"22px"} variant={"unset"}>
                    {count}
                  </Button>

                  <Button
                    fontSize={"25px"}
                    variant={"unset"}
                    onClick={decrement}
                  >
                    +
                  </Button>
                </Box>
                <Box>
                  <Text fontWeight={700} color={"#dd1470"} fontSize={"17px"}>
                    {counter.toLocaleString("US")} сум
                  </Text>
                </Box>
                <Box
                  onClick={() => {
                    addToKorzinka(product);
                  }}
                >
                  <Button
                    color={"white"}
                    variant={"unset"}
                    bg={"blue"}
                    p={"10px"}
                  >
                    qoshildi
                  </Button>
                </Box>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default MainModal;
