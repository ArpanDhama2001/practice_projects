import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Review from "./Review";

const index = () => {
  return (
    <Flex align="center" justify="center" flexDir="column" h="100vh" gap={70}>
      <Text
        as="h1"
        fontSize="4xl"
        fontWeight="bold"
        borderBottom="3px solid crimson"
      >
        Our Reviews
      </Text>
      <Review />
    </Flex>
  );
};

export default index;
