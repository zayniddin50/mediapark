import { Box, Container, Flex } from "@chakra-ui/react";
import BannerCorusel from "./banner/BannerCprusel";
import Kotigoriya from "./kotigoriya/Kotigoriya";
import CategoryProducts from "./components/categoryProducts";
import MainModal from "./modal/MainModal";
import Maps from "./components/Maps";
import { useState } from "react";
import SearchMaps from "./pages/SearchMap";
const App = () => {
  const [selectPosition, setSelectPosition] = useState(null);

  return (
    <Box>
      <BannerCorusel />
      <Kotigoriya />
      <CategoryProducts />
      <MainModal />
      <Container maxW={"1440px"}>
        <Flex gap={"10px"} justify={"space-between"}>
          <Box h={"30vh"} w={"50vw"}>
            <Maps selectPosition={selectPosition} />
          </Box>
          <Box h={"30vh"} border={"1px solid gray"} w={"50%"}>
            <SearchMaps
              selectPosition={selectPosition}
              setSelectPosition={setSelectPosition}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default App;
