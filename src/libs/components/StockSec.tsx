import { Box, HStack, Img } from "@chakra-ui/react";
import StockImg from "./../../assets/Stocks.png";

const StockSec = () => {
  return (
    <HStack w={"100%"} justifyContent={"space-between"}>
      <Box
        pos="absolute"
        w={"400px"}
        h={"650px"}
        bgColor={"#38d87d"}
        ml={"15%"}
        marginTop={"170px"}
      />
      <Img pos="relative" top={"90px"} right={20} src={StockImg} w={"900px"} />
    </HStack>
  );
};

export default StockSec;
