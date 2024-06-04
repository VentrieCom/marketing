import { Button, Text, VStack } from "@chakra-ui/react";

const ProductText: React.FC = () => {
  return (
    <VStack
      w={{ md: "full", lg: "40%", "2xl": "40%" }}
      mt={{ base: 24, sm: 32, md: 24, lg: -4, xl: -8 }}
      alignItems={"flex-start"}
      spacing={{ base: 2, sm: 2, md: 4, lg: 4, xl: 4, "2xl": 10 }}
    >
      <Text
        fontSize={40}
        fontWeight={700}
        fontFamily={"Roboto-Slab"}
        align={"start"}
        justifyContent={"start"}
      >
        Products
      </Text>
      <Text
        textAlign={"justify"}
        fontSize={{ xl: 20, "2xl": 24 }}
        fontFamily={"Poppins"}
        fontWeight={400}
        mr={5}
      >
        Munshee offers comprehensive warehouse services, including storage,
        inventory management, and distribution for a wide range of products. Our
        efficient solutions ensure your goods are handled with care and
        delivered on time, streamlining your logistics operations.
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

export default ProductText;
