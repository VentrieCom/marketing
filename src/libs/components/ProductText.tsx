import { Button, Text, VStack } from "@chakra-ui/react";

const ProductText: React.FC = () => {
  return (
    <VStack w={"full"} ml={"6%"} mr={"5%"} alignItems={"flex-start"}>
      <Text
        fontSize={40}
        fontWeight={700}
        fontFamily={"Roboto-Slab"}
        align={"start"}
        justifyContent={"start"}
        ml={40}
        py={5}
      >
        Products
      </Text>
      <Text
        w={"60%"}
        fontSize={20}
        ml={40}
        fontFamily={"Poppins"}
        fontWeight={400}
      >
        Lorem ipsum dolor sit amet consectetur. Imperdiet laoreet odio eu elit
        sed odio. Blandit. Lorem ipsum dolor sit amet consectetur. Imperdiet
        laoreet odio eu elit sed odio. Blandit. Lorem ipsum dolor sit amet
        consectetur. Imperdiet laoreet odio eu elit sed odio. Blandit. Lorem
        ipsum dolor sit amet consectetur. Imperdiet laoreet odio eu elit sed
        odio. Blandit.
      </Text>
      <Button w={"140px"} mt={8}>
        Learn More
      </Button>
    </VStack>
  );
};

export default ProductText;
