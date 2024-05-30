import { Box, Text, VStack, Image } from "@chakra-ui/react";
import ProductImg from "./../../../assets/Product grid view3.png";

const WelcomeScreen: React.FC = () => {
  return (
    <VStack>
      <Text
        fontSize={60}
        fontWeight={700}
        fontFamily={"roboto-slab"}
        textAlign={"center"}
        mt={8}
        w={"500px"}
        lineHeight={"60px"}
      >
        Munshee Desktop Application
      </Text>
      <Text
        w={"800px"}
        textAlign={"center"}
        fontSize={25}
        fontWeight={400}
        fontFamily={"poppins"}
        mt={8}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
        exercitationem id aliquam quae consequatur.
      </Text>
      <Image
        src={ProductImg}
        alt="stocks screen"
        w={"100%"}
        mb={-410}
        zIndex={1000}
      />
    </VStack>
  );
};

export default WelcomeScreen;
