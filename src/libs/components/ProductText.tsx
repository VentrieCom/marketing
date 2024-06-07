import { Button, Heading, Text, VStack } from "@chakra-ui/react";

const ProductText: React.FC = () => {
  return (
    <VStack
      w={{ md: "full", lg: "40%", "2xl": "40%" }}
      mt={{ base: 20, sm: 32, md: 24, lg: -4, xl: -8 }}
      alignItems={"flex-start"}
      spacing={{ base: 2, sm: 2, md: 4, lg: 4, xl: 4, "2xl": 10 }}
      zIndex={3}
    >
      <Heading as={"h3"} fontSize={40} fontWeight={700}>
        Products
      </Heading>
      <Text fontSize={{ xl: 20, "2xl": 24 }} fontWeight={400}>
        Munshee offers comprehensive warehouse services, including storage,
        inventory management, and distribution for a wide range of products. Our
        efficient solutions ensure your goods are handled with care and
        delivered on time, streamlining your logistics operations.
      </Text>
      <Button
        variant={"solid"}
        minW={"140px"}
        mt={{ base: 8, sm: 6, md: 2, lg: 2, xl: 5 }}
        fontSize={16}
      >
        Learn More
      </Button>
    </VStack>
  );
};

export default ProductText;
