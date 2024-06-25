import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CiSignpostR1 } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";
const Kotigoriya = () => {
  return (
    <Box>
      <Container maxW={"1440px"} w={"100%"}>
        <Flex p={"8px"} align={"center"} justify={"space-between"}>
          <Box>
            <Link to={"/brand"}>
              <Flex align={"center"} gap={"10px"}>
                <Box>
                  <Text color={"black"} fontWeight={700} fontSize={"25px"}>
                    Популярное
                  </Text>
                </Box>
                <Box>
                  <FaAngleRight size={22} />
                </Box>
              </Flex>
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Kotigoriya;
