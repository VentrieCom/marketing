import { Stack, Text } from "@chakra-ui/react";

const ProductText = () => {
  return (
    <Stack w={"100%"}>
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
        odio. Blandit.{" "}
      </Text>
    </Stack>
  );
};

export default ProductText;
