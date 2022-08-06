import React from "react";
import { Flex, VStack, Text } from "@chakra-ui/react";
import questions from "./data.js";
import Qustions from "./Questions";

const Accordion = () => {
  return (
    <Flex h="100vh" w="100%" align="center" justifyContent="center" bg="purple">
      <Flex
        p={4}
        borderRadius="md"
        bg="white"
        align="start"
        justifyContent="start"
        w={{ sm: "90%", md: "80%", lg: "60%", xl: "40%" }}
      >
        <Flex w="30%" mr={5}>
          <Text fontSize="2xl">Questions And Answers About Login</Text>
        </Flex>
        <VStack
          wrap
          justify="space-around"
          align="space-around"
          spacing={4}
          width="70%"
        >
          {questions.map((question) => {
            return (
              <Qustions
                key={question.id}
                title={question.title}
                info={question.info}
              />
            );
          })}
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Accordion;
