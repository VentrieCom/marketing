import { Box, HStack, Img } from "@chakra-ui/react";
import ProductGrid from "./../../assets/Product grid view.png";

const AttendenceSec = () => {
  return (
    <HStack w={"100%"} justifyContent={"space-between"}>
      <Box
        pos="absolute"
        w={"400px"}
        h={"650px"}
        bgColor={"#38d87d"}
        ml={40}
        marginTop={"170px"}
      />
      <Img
        pos="relative"
        top={"90px"}
        left={"80px"}
        src={ProductGrid}
        w={"900px"}
      />
    </HStack>
  );
};

export default AttendenceSec;
