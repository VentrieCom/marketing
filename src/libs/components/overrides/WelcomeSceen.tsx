import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";

import Attendance from "../../../assets/Images/Attendance.png";
import Product from "../../../assets/Images/Product grid view.png";
import Stocks from "../../../assets/Images/Stocks.png";

const WelcomeScreen: React.FC = () => {
  return (
    <VStack>
      <Heading>Munshee Desktop Application</Heading>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
        exercitationem id aliquam quae consequatur.
      </Text>
      {/* <Box position={"relative"}>
        <Image src={Attendance} alt="stocks screen" w={"800px"} />
        <Image src={Product} alt="products screen"  />
        <Image src={Stocks} alt="leaves screen" w={"800px"} />
      </Box> */}
    </VStack>
  );
};

export default WelcomeScreen;
