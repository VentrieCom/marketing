import { Text, VStack, Image, HStack } from "@chakra-ui/react";
import ProductImg from "./../../../assets/Product grid view3.png";
import SocialIcons from "./../../../assets/Socialicons.png";

const WelcomeScreen: React.FC = () => {
  return (
    <VStack>
      <Text
        fontSize={60}
        fontWeight={700}
        fontFamily={"Roboto-Slab"}
        textAlign={"center"}
        mt={8}
        w={"500px"}
        lineHeight={"60px"}
        color={"#FFFFFF"}
      >
        Munshee Desktop Application
      </Text>
      <Text
        w={"800px"}
        textAlign={"center"}
        fontSize={25}
        fontWeight={400}
        fontFamily={"Poppins"}
        mt={8}
        letterSpacing={2}
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
