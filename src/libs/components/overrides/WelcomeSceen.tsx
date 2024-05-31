import { Flex, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";

import Attendance from "../../../assets/Images/Attendance.png";
import Product from "../../../assets/Images/Product grid view.png";
import Stocks from "../../../assets/Images/Stocks.png";
import { RepeatClockIcon, StarIcon, UnlockIcon } from "@chakra-ui/icons";
import About from "../About";
import Testimonials from "../Testimonials";
import Footer from "../Footer";

const WelcomeScreen: React.FC = () => {
  return (
    <VStack spacing={12} pos="relative">
      <VStack w="40%" textAlign="center">
        <Heading fontFamily="mono" fontSize="6xl" mt={12}>
          Munshee Desktop Application
        </Heading>
        <Text fontSize={24} my={12}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          exercitationem id aliquam quae consequatur.
        </Text>
      </VStack>
      <Flex
        direction="column"
        justify="space-between"
        align="center"
        h="120px"
        w="40px"
        position="absolute"
        left={8}
        top="50%"
      >
        <RepeatClockIcon boxSize="20px" color="secondary.200" />
        <UnlockIcon boxSize="20px" color="secondary.200" />
        <StarIcon boxSize="20px" color="secondary.200" />
      </Flex>
      <HStack position="relative" w="90%" minH="65vh">
        <Image
          src={Stocks}
          w="600px"
          alt="stocks screen"
          position="absolute"
          left={0}
          bottom={0}
          zIndex={2}
        />
        <Image
          src={Product}
          alt="products screen"
          w="1100px"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          boxShadow="rgba(15, 22, 27, 0.2) 0px 8px 24px"
        />
        <Image
          src={Attendance}
          w="600px"
          alt="attendance screen"
          position="absolute"
          right={0}
          bottom={0}
          zIndex={2}
        />
      </HStack>
      <About />
      <Testimonials />
      <Footer />
    </VStack>
  );
};

export default WelcomeScreen;
