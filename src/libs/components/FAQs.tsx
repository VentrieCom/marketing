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
  OrderedList,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

import EllipseGreen from "./../../assets/EllipseGreen 2010.png";
import DesignImage from "./../../assets/Design Line.png";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const FAQs: React.FC = () => {
  return (
    <VStack w={"full"} mt={{ base: 14, md: 10 }}>
      <Image
        src={DesignImage}
        alt="design Line"
        pos={"absolute"}
        mt={-240}
        right={0}
      />
      <Heading
        zIndex={2}
        as={"h2"}
        fontSize={{ base: 40, sm: 44, md: 48, lg: 52 }}
        mb={{ base: 20, sm: 20, md: 10, lg: 14, "2xl": 20 }}
      >
        FAQ's
      </Heading>
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
          <AccordionItem
            w={"full"}
            mb={{ base: 4, sm: 6, md: 8 }}
            borderRadius={"var(--chakra-radii-3xl)"}
            bgColor={"#1A262D"}
            cursor="pointer"
          >
            {({ isExpanded }) => (
              <Card
                bgColor={"#1A262D"}
                borderRadius="var(--chakra-radii-3xl)"
                border={isExpanded ? "3px solid #38db7d" : "3px solid #2C3B46"}
                zIndex={100}
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
                    <Text
                      fontSize={{
                        base: 20,
                        sm: 22,
                        md: 24,
                        lg: 26,
                        "2xl": 26,
                      }}
                      fontWeight={400}
                    >
                      How do I reset my password if I forget it?
                    </Text>
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
                      w="full"
                    >
                      To reset your password if you forget it:
                      <OrderedList spacing={1}>
                        <ListItem>Go to the login page.</ListItem>
                        <ListItem>Click "Forgot Password."</ListItem>
                        <ListItem>Enter your email address.</ListItem>
                        <ListItem>
                          Follow the instructions sent to your email to reset
                          your password.
                        </ListItem>
                      </OrderedList>
                    </Text>
                  </Flex>
                </AccordionPanel>
              </Card>
            )}
          </AccordionItem>
          <AccordionItem
            w={"full"}
            mb={{ base: 4, sm: 6, md: 8 }}
            borderRadius={"var(--chakra-radii-3xl)"}
            bgColor={"#1A262D"}
            cursor="pointer"
          >
            {({ isExpanded }) => (
              <Card
                bgColor={"#1A262D"}
                borderRadius="var(--chakra-radii-3xl)"
                border={isExpanded ? "3px solid #38db7d" : "3px solid #2C3B46"}
                zIndex={100}
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
                    <Text
                      fontSize={{
                        base: 20,
                        sm: 22,
                        md: 24,
                        lg: 26,
                        "2xl": 26,
                      }}
                      fontWeight={400}
                      // fontFamily={"Poppins"}
                    >
                      How do I unsubscribe from your newsletter?
                    </Text>
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
                      w="full"
                    >
                      To unsubscribe from our newsletter:
                      <OrderedList spacing={1}>
                        <ListItem>Open a recent newsletter email.</ListItem>
                        <ListItem>Scroll to the bottom.</ListItem>
                        <ListItem>Click the unsubscribe link.</ListItem>
                        <ListItem>Confirm your choice.</ListItem>
                      </OrderedList>
                      If you have any issues, contact our support team.
                    </Text>
                  </Flex>
                </AccordionPanel>
              </Card>
            )}
          </AccordionItem>
          <AccordionItem
            w={"full"}
            mb={{ base: 4, sm: 6, md: 8 }}
            borderRadius={"var(--chakra-radii-3xl)"}
            bgColor={"#1A262D"}
            cursor="pointer"
          >
            {({ isExpanded }) => (
              <Card
                bgColor={"#1A262D"}
                borderRadius="var(--chakra-radii-3xl)"
                border={isExpanded ? "3px solid #38db7d" : "3px solid #2C3B46"}
                zIndex={100}
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
                    <Text
                      fontSize={{
                        base: 20,
                        sm: 22,
                        md: 24,
                        lg: 26,
                        "2xl": 26,
                      }}
                      fontWeight={400}
                    >
                      What payment methods do you accept?
                    </Text>
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
                      w="full"
                    >
                      We accept the following payment methods:
                      <UnorderedList spacing={1}>
                        <ListItem>
                          Credit and Debit Cards (Visa, MasterCard, American
                          Express)
                        </ListItem>
                        <ListItem>PayPal</ListItem>
                        <ListItem>Bank Transfers</ListItem>
                        <ListItem>Apple Pay</ListItem>
                        <ListItem>Google Pay</ListItem>
                      </UnorderedList>
                    </Text>
                  </Flex>
                </AccordionPanel>
              </Card>
            )}
          </AccordionItem>
          <AccordionItem
            w={"full"}
            mb={{ base: 4, sm: 6, md: 8 }}
            borderRadius={"var(--chakra-radii-3xl)"}
            bgColor={"#1A262D"}
            cursor="pointer"
          >
            {({ isExpanded }) => (
              <Card
                bgColor={"#1A262D"}
                borderRadius="var(--chakra-radii-3xl)"
                border={isExpanded ? "3px solid #38db7d" : "3px solid #2C3B46"}
                zIndex={100}
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
                    <Text
                      textAlign={"left"}
                      fontSize={{
                        base: 20,
                        sm: 22,
                        md: 24,
                        lg: 26,
                        "2xl": 26,
                      }}
                      fontWeight={400}
                    >
                      How can I contact customer support?
                    </Text>
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
                      You can contact customer support via:
                      <UnorderedList spacing={1}>
                        <ListItem>Email: support@munshee.com</ListItem>
                        <ListItem>Phone: (123) 456-7890</ListItem>
                        <ListItem>Live Chat: On our website</ListItem>
                        <ListItem>Contact Form: On our support page</ListItem>
                      </UnorderedList>
                      We're here to help!
                    </Text>
                  </Flex>
                </AccordionPanel>
              </Card>
            )}
          </AccordionItem>
        </Accordion>
      </Box>
    </VStack>
  );
};

export default FAQs;
