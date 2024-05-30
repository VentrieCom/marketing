import { Box, HStack, Img } from "@chakra-ui/react";
import ProductGrid from "./../../assets/Product grid view.png";

const ProductSec = () => {
  return (
    <HStack w={"100%"} justifyContent={"space-between"}>
      <Box
        pos="absolute"
        w={"400px"}
        h={"570px"}
        bgColor={"#38d87d"}
        ml={40}
        marginTop={"170px"}
      ></Box>
      <Img
        pos="relative"
        top={"85px"}
        left={"80px"}
        src={ProductGrid}
        w={"900px"}
      />
    </HStack>
  );
};

export default ProductSec;
