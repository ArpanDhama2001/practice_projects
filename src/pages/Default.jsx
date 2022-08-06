import { Button, Flex, IconButton, Text, Tooltip } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

const Default = () => {
  return (
    <Flex
      align="center"
      justify="center"
      height="100vh"
      flexDir="column"
      gap={6}
    >
      <Text fontSize="6xl">
        comming soon
        <Text as="span" color="crimson">
          .
        </Text>
      </Text>
      <Link to="/">
        <Tooltip label="Back" placement="top" openDelay={500}>
          <IconButton aria-label="back" icon={<ArrowBackIcon />} />
        </Tooltip>
      </Link>
    </Flex>
  );
};

export default Default;
