import {
  Card,
  HStack,
  Text,
  Image,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Accordion,
  Flex,
  Center,
  Heading,
} from "@chakra-ui/react";

import EllipseGreen from "./../../assets/EllipseGreen 2010.png";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const FAQs = () => {
  return (
    <Card
      w={"100%"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={10}
      bgColor={"#0f161b"}
    >
      <Text
        fontSize={60}
        fontWeight={400}
        fontFamily={"roboto-slab"}
        textAlign={"center"}
        mt={10}
        // py={10}
      >
        FAQ's
      </Text>
      <HStack
        justifyContent={"start"}
        pos={"absolute"}
        display={"inline-block"}
        left={0}
      >
        <Image
          src={EllipseGreen}
          w={"150px"}
          pos={"relative"}
          transform={"rotate(180deg)"}
        />
      </HStack>
      <HStack borderRadius={"20px"}>
        <Box w={"800px"}>
          <Accordion allowToggle={true} zIndex={100}>
            <AccordionItem
              style={{
                border: "3px solid #38db7d",
                borderRadius: "var(--chakra-radii-xl)",
                backgroundColor: "#202f36",
                marginBottom: "30px",
              }}
            >
              {({ isExpanded }) => (
                <>
                  <Flex textAlign={"left"} w={"full"}>
                    <AccordionButton>
                      <Center boxSize={14} mr={8}>
                        {isExpanded ? (
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
                    </AccordionButton>
                  </Flex>
                  <AccordionPanel pb={4}>
                    <Flex>
                      <Box w={"230px"} />
                      <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptas explicabo dolorum beatae? Numquam adipisci
                        itaque magnam distinctio dolor facere, amet enim! Eos
                        fugit atque culpa dignissimos hic ullam, et minima.
                      </Text>
                    </Flex>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem
              style={{
                border: "3px solid #38db7d",
                borderRadius: "var(--chakra-radii-xl)",
                backgroundColor: "#202f36",
                marginBottom: "30px",
              }}
            >
              {({ isExpanded }) => (
                <>
                  <Flex textAlign={"left"} w={"full"}>
                    <AccordionButton>
                      <Center boxSize={14} mr={8}>
                        {isExpanded ? (
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
                    </AccordionButton>
                  </Flex>
                  <AccordionPanel pb={4}>
                    <Flex>
                      <Box w={"230px"} />
                      <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptas explicabo dolorum beatae? Numquam adipisci
                        itaque magnam distinctio dolor facere, amet enim! Eos
                        fugit atque culpa dignissimos hic ullam, et minima.
                      </Text>
                    </Flex>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem
              style={{
                border: "3px solid #38db7d",
                borderRadius: "var(--chakra-radii-xl)",
                backgroundColor: "#202f36",
                marginBottom: "30px",
              }}
            >
              {({ isExpanded }) => (
                <>
                  <Flex textAlign={"left"} w={"full"}>
                    <AccordionButton>
                      <Center boxSize={14} mr={8}>
                        {isExpanded ? (
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
                    </AccordionButton>
                  </Flex>
                  <AccordionPanel pb={4}>
                    <Flex>
                      <Box w={"230px"} />
                      <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptas explicabo dolorum beatae? Numquam adipisci
                        itaque magnam distinctio dolor facere, amet enim! Eos
                        fugit atque culpa dignissimos hic ullam, et minima.
                      </Text>
                    </Flex>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem
              style={{
                border: "3px solid #38db7d",
                borderRadius: "var(--chakra-radii-xl)",
                backgroundColor: "#202f36",
                marginBottom: "30px",
              }}
            >
              {({ isExpanded }) => (
                <>
                  <Flex textAlign={"left"} w={"full"}>
                    <AccordionButton>
                      <Center boxSize={14} mr={8}>
                        {isExpanded ? (
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
                    </AccordionButton>
                  </Flex>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Box>
      </HStack>
    </Card>
  );
};

export default FAQs;
