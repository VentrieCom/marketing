import { Stack, Text } from "@chakra-ui/react";

const ProductText = () => {
  return (
    <Stack w={"100%"}>
      <Text
        fontSize={60}
        fontWeight={400}
        fontFamily={"roboto-slab"}
        align={"start"}
        justifyContent={"start"}
        ml={40}
      >
        Products
      </Text>
      <Text w={"60%"} fontSize={22} ml={40}>
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
