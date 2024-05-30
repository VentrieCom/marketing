import { Button, VStack, Text } from "@chakra-ui/react";

const StockText: React.FC = () => {
  return (
    <VStack w={"full"} ml={"6%"} mr={"5%"} alignItems={"flex-start"}>
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
        w={"50%"}
        fontSize={20}
        fontWeight={400}
        fontFamily={"Poppins"}
        ml={40}
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

export default StockText;
