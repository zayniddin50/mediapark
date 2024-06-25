import React, { useEffect, useState } from "react";

import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};

export default function SearchMaps(props) {
  const { setSelectPosition } = props;
  const [searchText, setSearchText] = useState("");

  const [listPlace, setListPlace] = useState([]);

  return (
    <Box>
      <Flex gap={"10px"} justify={"space-between"} m={"8px"}>
        <Box w={"100%"}>
          <Input
            placeholder="Search"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
        </Box>
        <Box>
          <Button
            className="search_btn"
            onClick={() => {
              const params = {
                q: searchText,
                format: "json",
                addressdetails: 1,
                polygon_geojson: 0,
              };
              const queryString = new URLSearchParams(params).toString();
              const requestOptions = {
                method: "GET",
                redirect: "follow",
              };
              fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
                .then((response) => response.text())
                .then((result) => {
                  console.log(JSON.parse(result));
                  setListPlace(JSON.parse(result));
                })
                .catch((err) => console.log("err: ", err));
            }}
          >
            Search
          </Button>
        </Box>
      </Flex>
      {listPlace.map((item) => {
        return (
          <Box key={item?.place_id}>
            <ul
              onClick={() => {
                setSelectPosition(item);
              }}
            >
              <Flex align={"center"}>
                <Image
                  src="https://e7.pngegg.com/pngimages/146/313/png-clipart-gps-navigation-systems-global-positioning-system-computer-icons-transparency-placeholder-gps-navigation-systems-global-positioning-system-thumbnail.png"
                  alt="Placeholder"
                  style={{ width: "38px", height: "38px" }}
                />
                <Box overflowX={"scroll"}>
                  <Text cursor={"pointer"} fontSize={"15px"}>
                    {item?.display_name}
                  </Text>
                </Box>
              </Flex>
            </ul>
          </Box>
        );
      })}
    </Box>
  );
}
