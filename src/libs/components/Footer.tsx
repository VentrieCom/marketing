import { Card, HStack, VStack, Text, Stack, Input } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Card
      w={"100%"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={10}
      bgColor={"#0f161b"}
      px={"10%"}
      mt={40}
    >
      <HStack w={"100%"}>
        <Stack w={"100%"}>
          <Text
            fontSize={60}
            fontWeight={400}
            fontFamily={"Jost"}
            align={"start"}
            justifyContent={"start"}
            ml={40}
          >
            MUNSHEE
          </Text>
          <Text w={"30%"} fontSize={16} ml={40}>
            Lorem ipsum dolor sit amet consectetur. Imperdiet laoreet odio eu
            elit sed odio. Blandit. Lorem ipsum dolor sit amet consectetur.
            Imperdiet laoreet odio eu elit sed odio. Blandit. Lorem ipsum dolor
            sit amet consectetur.{" "}
          </Text>
        </Stack>
      </HStack>
    </Card>
  );
};

export default Footer;
