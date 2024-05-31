import { Box, HStack, Img } from "@chakra-ui/react";
import StockImg from "./../../assets/Stocks.png";

const StockSec = () => {
  return (
    <HStack
      order={{ base: 1, sm: 1, xl: 2 }}
      w={{ sm: "full", xl: "60%" }}
      justifyContent={"space-between"}
    >
      <Box
        w={{
          base: "33%",
          sm: "40%",
          md: "40%",
          lg: "25%",
          xl: "25%",
          "2xl": "22.7%",
        }}
        h={{
          base: "2%",
          sm: "5.9%",
          md: "6%",
          lg: "6%",
          xl: "6.4%",
          "2xl": "8%",
        }}
        bgColor={"#38d87d"}
        right={0}
        mr={{
          base: "17%",
          sm: "12%",
          md: "11%",
          lg: "8.5%",
          xl: "10%",
          "2xl": "13%",
        }}
        pos="absolute"
      />
      <Img pos="relative" left={0} src={StockImg} w={"900px"} />
    </HStack>
  );
};

export default StockSec;
// top={"85px"}// w={"400px"}
// h={"600px"}
// bgColor={"#38d87d"}
// ml={"15%"}
// marginTop={"170px"}
