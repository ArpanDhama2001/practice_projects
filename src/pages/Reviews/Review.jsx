import React, { useState } from "react";
import people from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Avatar, Button, Flex, Text } from "@chakra-ui/react";

const Review = () => {
  const dataLength = people.length;
  const [personNumber, setPersonNumber] = useState(0);
  const person = people[personNumber];

  function generateRandom(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num === personNumber ? generateRandom(min, max) : num;
  }

  function leftChange() {
    let num = personNumber === 0 ? dataLength - 1 : personNumber - 1;
    setPersonNumber(num);
  }

  function rightChange() {
    let num = personNumber === dataLength - 1 ? 0 : personNumber + 1;
    setPersonNumber(num);
  }

  return (
    <>
      <Flex
        flexDir="column"
        width={{ base: "100%", sm: "90%", md: "600px" }}
        align="center"
        justify="center"
        p={6}
        boxShadow="5px 5px 15px rgba(0,0,0,0.1)"
      >
        <Flex
          position="relative"
          top="50px"
          left="-60px"
          align="center"
          justify="center"
          zIndex="100"
          h={10}
          w={10}
          borderRadius="50%"
          bg="crimson"
          color="white"
        >
          <FaQuoteRight />
        </Flex>
        <Avatar
          w="150px"
          h="150px"
          boxShadow="5px -5px crimson"
          name={person.name}
          src={person.image}
        />
        <Text
          casing="capitalize"
          as="h2"
          fontWeight="bold"
          letterSpacing={2}
          mt={4}
        >
          {person.name}
        </Text>
        <Text
          as="h2"
          fontWeight="light"
          color="crimson"
          casing="uppercase"
          fontSize="sm"
          mb={4}
        >
          {person.job}
        </Text>
        <Text as="h2" align="center" color="#617d98" mb={4}>
          {person.text}
        </Text>
        <Flex gap={4} mb={4}>
          <ChevronLeftIcon
            fontSize={28}
            color="crimson"
            _hover={{ cursor: "pointer" }}
            onClick={leftChange}
          />
          <ChevronRightIcon
            fontSize={28}
            color="crimson"
            _hover={{ cursor: "pointer" }}
            onClick={rightChange}
          />
        </Flex>
        <Button
          bg="#f4e9eb"
          color="crimson"
          _hover={{ bg: "#e6bdc4" }}
          onClick={() => setPersonNumber(generateRandom(0, dataLength - 1))}
        >
          Surprise Me
        </Button>
      </Flex>
    </>
  );
};

export default Review;
