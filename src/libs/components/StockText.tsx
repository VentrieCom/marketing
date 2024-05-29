import { Button, VStack, Text } from "@chakra-ui/react";

const StockText: React.FC = () => {
  return (
    <VStack w={"full"} ml={"6%"} mr={"5%"} alignItems={"flex-start"}>
      <Text
        fontSize={60}
        fontWeight={600}
        fontFamily={"roboto-slab"}
        align={"start"}
        justifyContent={"start"}
      >
        Stocks
      </Text>
      <Text fontSize={22} textAlign={"justify"}>
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

export default StockText;
