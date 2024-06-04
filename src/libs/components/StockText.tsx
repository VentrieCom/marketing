import { Button, VStack, Text } from "@chakra-ui/react";

const StockText: React.FC = () => {
  return (
    <VStack
      order={{ base: 2, md: 2, lg: 1 }}
      w={{ md: "full", lg: "40%", "2xl": "40%" }}
      mt={{ base: 24, sm: 32, md: 24, lg: -2, xl: -8 }}
      alignItems={"flex-start"}
      spacing={{ base: 2, sm: 2, md: 4, lg: 4, xl: 4, "2xl": 8 }}
    >
      <Text
        fontSize={40}
        fontWeight={700}
        fontFamily={"Roboto-Slab"}
        align={"start"}
        justifyContent={"start"}
      >
        Stocks
      </Text>
      <Text
        textAlign={"justify"}
        fontSize={{ xl: 20, "2xl": 24 }}
        fontFamily={"Poppins"}
        fontWeight={400}
      >
        Munshee offers top-tier warehousing services designed to optimize your
        stock management. Our secure facilities ensure your products are stored
        safely, with advanced inventory tracking systems providing real-time
        updates on stock levels. We handle a wide variety of products, ensuring
        accurate categorization and organization for easy retrieval.
      </Text>
      <Button
        w={"140px"}
        mt={{ base: 8, sm: 6, md: 2, lg: 2, xl: 5 }}
        textAlign={"center"}
        fontSize={16}
        fontWeight={600}
        fontFamily={"Poppins"}
      >
        Learn More
      </Button>
    </VStack>
  );
};

export default StockText;
//  w={"140px"} mt={5} textAlign={"center"} ml={40}
// w={"60%"}
// fontSize={20}
// fontWeight={400}
// fontFamily={"Poppins"}
// ml={40}
