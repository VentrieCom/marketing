import { Box, HStack, Img } from "@chakra-ui/react";
import ProductGrid from "./../../assets/Product grid view.png";

const ProductSec = () => {
  return (
    <HStack 
    // bgColor={"khaki"} 
    w={{ sm: "full", xl: "60%" }}>
      <Box
        pos="absolute"
        w={{
          base: "33%",
          sm: "40%",
          md: "38%",
          lg: "25%",
          xl: "26%",
          "2xl": "22.7%",
        }}
        h={{
          base: "1.5%",
          sm: "2.7%",
          md: "3.9%",
          lg: "5.2%",
          xl: "6.7%",
          "2xl": "7.5%",
        }}
        bgColor={"#38d87d"}
        ml={{ base: "5%", md: "7%", lg: "4.3%", xl: "3%", "2xl": "3.9%" }}
      />
      <Img pos="relative" src={ProductGrid} w={"900px"} />
    </HStack>
  );
};

export default ProductSec;
