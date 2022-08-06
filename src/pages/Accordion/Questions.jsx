import { Flex, IconButton, Text } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

const Qustions = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Flex
      flexDir="column"
      width="100%"
      align="space-around"
      justify="space-around"
      borderRadius="md"
      p={2}
      boxShadow="2px 5px 15px rgba(0,0,0,0.1)"
    >
      <Flex align="center" justify="space-between">
        <Text>{title}</Text>
        <IconButton
          aria-label="Show Info"
          icon={!showInfo ? <AddIcon /> : <MinusIcon />}
          onClick={() => setShowInfo(!showInfo)}
        ></IconButton>
      </Flex>
      {/* <Box d={showInfo ? "block" : "none"}>
        <Text> {info} </Text>
      </Box> */}
      {showInfo && <p>{info}</p>}
    </Flex>
  );
};

export default Qustions;
