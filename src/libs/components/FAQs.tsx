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
  VStack,
} from "@chakra-ui/react";

import EllipseGreen from "./../../assets/EllipseGreen 2010.png";
import DesignImage from "./../../assets/Design Line.png";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useState } from "react";

const FAQs = () => {
  const [selected, setSelected] = useState(-1);
  const faqsArray = [
    {
      question: "How do I reset my password if I forget it?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas explicabo dolorum beatae? Numquam adipisci itaque magnam distinctio dolor facere, amet enim! Eos fugit atque culpa dignissimos hic ullam, et minima.",
    },
    {
      question: "Do you offer price matching?",
      answer:
        "Yes, we offer price matching for select products. If you find a lower price for the same product elsewhere, please contact our customer support team with the details, and we will do our best to match or beat the price.",
    },
    {
      question: "How do I unsubscribe from your newsletter?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas explicabo dolorum beatae? Numquam adipisci itaque magnam distinctio dolor facere, amet enim! Eos fugit atque culpa dignissimos hic ullam, et minima.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas explicabo dolorum beatae? Numquam adipisci itaque magnam distinctio dolor facere, amet enim! Eos fugit atque culpa dignissimos hic ullam, et minima.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas explicabo dolorum beatae? Numquam adipisci itaque magnam distinctio dolor facere, amet enim! Eos fugit atque culpa dignissimos hic ullam, et minima.",
    },
  ];
  return (
    <VStack w={"full"} mt={{ base: 14, md: 10 }}>
      <Image
        src={DesignImage}
        alt="design Line"
        pos={"absolute"}
        mt={-240}
        right={0}
      />
      <Text
        fontSize={{ base: 40, sm: 44, md: 48, lg: 52 }}
        fontWeight={700}
        fontFamily={"Roboto Slab"}
        textAlign={"center"}
        mb={{ base: 20, sm: 20, md: 10, lg: 14, "2xl": 20 }}
      >
        FAQ's
      </Text>
      <HStack
        pos={"absolute"}
        left={0}
        mt={{ base: 280, sm: 72, md: 80, lg: 80 }}
      >
        <Image
          src={EllipseGreen}
          w={{
            base: "100px",
            sm: "100px",
            md: "110px",
            lg: "130px",
            "2xl": "150px",
          }}
          pos={"relative"}
          transform={"rotate(180deg)"}
        />
      </HStack>
      <Box
        w={{
          base: "calc(100vw - 50px)",
          sm: "calc(100vw - 100px)",
          md: "70%",
          lg: "60%",
          "2xl": "45%",
        }}
      >
        <Accordion allowToggle={true}>
          {faqsArray.map((_, index) => {
            return (
              <AccordionItem
                w={"full"}
                mb={{ base: 4, sm: 6, md: 8 }}
                borderRadius={{ base: "var(--chakra-radii-md)" }}
                style={{
                  border:
                    selected === index
                      ? "3px solid #38db7d"
                      : "3px solid #1a262d",
                  borderRadius: "var(--chakra-radii-3xl)",
                  backgroundColor: "#202f36",
                  cursor: "pointer",
                }}
              >
                {({ isExpanded }) => (
                  <Card
                    zIndex={100}
                    onClick={() => setSelected(index)}
                    p={{ base: 2, md: 3, lg: 4, "2xl": 6 }}
                  >
                    <Flex textAlign={"left"} w={"full"} align="center">
                      <AccordionButton as={Flex} align="center" w="full">
                        <Center
                          boxSize={{ base: 8, md: 18 }}
                          mr={{ base: 6, sm: 8, md: 6, lg: 8 }}
                        >
                          {isExpanded ? (
                            <MinusIcon boxSize={6} color={"blue.300"} />
                          ) : (
                            <AddIcon boxSize={6} color={"blue.300"} />
                          )}
                        </Center>
                        <Heading
                          textAlign={"left"}
                          fontSize={{
                            base: 20,
                            sm: 22,
                            md: 24,
                            lg: 26,
                            "2xl": 26,
                          }}
                          fontWeight={400}
                          fontFamily={"Poppins"}
                        >
                          {_.question}
                        </Heading>
                      </AccordionButton>
                    </Flex>
                    <AccordionPanel pb={4}>
                      <Flex>
                        <Text
                          ml={{
                            base: "50px",
                            sm: "64px",
                            md: "42px",
                            lg: "48px",
                            xl: "6.4%",
                            "2xl": "50px",
                          }}
                          fontSize={{ base: 14, sm: 16, md: 18 }}
                          fontWeight={400}
                          fontFamily={"Poppins"}
                          w="full"
                        >
                          {_.answer}
                        </Text>
                      </Flex>
                    </AccordionPanel>
                  </Card>
                )}
              </AccordionItem>
            );
          })}
        </Accordion>
      </Box>
    </VStack>
  );
};

export default FAQs;
// justifyContent={"start"}
// <Card
//   onClick={() => setSelected(index)}
//   p={{ base: 2, md: 3, lg: 4, "2xl": 6 }}
// >
//   <Flex textAlign={"left"} w={"full"}>
//     <AccordionButton>
//       <Center
//         boxSize={{ base: 8, md: 18 }}
//         mr={{ base: 6, sm: 8, md: 6, lg: 8 }}
//       >
//         {isExpanded ? (
//           <MinusIcon boxSize={6} color={"blue.300"} />
//         ) : (
//           <AddIcon boxSize={6} color={"blue.300"} />
//         )}
//       </Center>
//       <Heading
//         textAlign={"left"}
//         // borderRadius={{
//         //   base: `var(--chakra-radii-sm)`,
//         //   md: `var(--chakra-radii-lg)`,
//         //   lg: `var(--chakra-radii-2xl)`,
//         // }}
//         fontSize={{
//           base: 20,
//           sm: 20,
//           md: 22,
//           lg: 24,
//           "2xl": 26,
//         }}
//         fontWeight={400}
//         fontFamily={"Poppins"}
//       >
//         Lorem, ipsum dolor sit amet consectetur?
//       </Heading>
//     </AccordionButton>
//   </Flex>
//   <AccordionPanel pb={4}>
//     <Flex>
//       {/* <Box flex={{ base: 1, sm: 4 }} /> */}
//       <Text
//         ml={{ base: "50px", sm: "56px", md: "60px" }}
//         // w={`calc(100% - 30px)`}
//         // flex={{ base: 7, sm: 22, md: 8, "2xl": 15 }}
//         fontSize={{ base: 14, sm: 16, md: 18 }}
//         fontWeight={400}
//         fontStyle={"Poppins"}
//       >
//         Lorem ipsum dolor sit amet consectetur adipisicing
//         elit. Voluptas explicabo dolorum beatae? Numquam
//         adipisci itaque magnam distinctio dolor facere, amet
//         enim! Eos fugit atque culpa dignissimos hic ullam, et
//         minima.
//       </Text>
//     </Flex>
//   </AccordionPanel>
// </Card>
