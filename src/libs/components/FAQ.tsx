import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Collapse,
  Heading,
  Text,
  VStack,
  Box,
  Flex,
  Center,
} from "@chakra-ui/react";

import { useState } from "react";

const FAQ: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <VStack>
      <Heading fontSize={34} fontFamily={"roboto-slab"} mb={45}>
        FAQ's
      </Heading>
      <VStack w={"800px"}>
        <Collapse startingHeight={95} in={show}>
          <VStack
            borderWidth={4}
            borderColor={show ? "blue.300" : "secondary.300"}
            borderRadius={20}
            px={8}
            py={6}
            bgColor={"secondary.400"}
            cursor={"pointer"}
          >
            <Flex textAlign={"left"} w={"full"} onClick={() => setShow(!show)}>
              <Center boxSize={14} mr={8}>
                {show ? (
                  <MinusIcon boxSize={6} color={"blue.300"} />
                ) : (
                  <AddIcon boxSize={6} color={"blue.300"} />
                )}
              </Center>
              <Heading
                alignContent={"center"}
                borderRadius={20}
                fontSize={24}
                fontWeight={"light"}
              >
                Lorem, ipsum dolor sit amet consectetur?
              </Heading>
            </Flex>
            <Flex>
              <Box w={"240px"} />
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas explicabo dolorum beatae? Numquam adipisci itaque
                magnam distinctio dolor facere, amet enim! Eos fugit atque culpa
                dignissimos hic ullam, et minima.
              </Text>
            </Flex>
          </VStack>
        </Collapse>
      </VStack>
    </VStack>
  );
};

export default FAQ;
