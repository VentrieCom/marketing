import { Card, HStack, Text, Image, Button, Box, Flex } from "@chakra-ui/react";
import Ellipse from "./../../assets/Ellipse 2008.png";

const Subscribe = () => {
  return (
    <Flex
      w={"full"}
      alignItems="center"
      py={4}
      bgColor={"#0f161b"}
      px={"10%"}
      mt={40}
    >
      <Card
        w={"full"}
        h={"300px"}
        borderRadius={"var(--chakra-radii-lg)"}
        bgColor={"#38db7d"}
      >
        <Flex
          flex={1}
          mx={20}
          // bgColor={"gray"}
        >
          <Text
            flex={1}
            // ml={20}
            fontSize={60}
            fontFamily={"roboto-slab"}
            fontWeight={700}
            color={"#0F161B"}
            mt={10}
          >
            Subscribe to get updated
          </Text>
          {/* TODO : Align it properly */}
          <Button
            size={"lg"}
            maxW={"280px"}
            flex={1}
            alignSelf={"flex-end"}
            variant={"outline"}
            color={"secondary.800"}
            borderColor={"secondary.800"}
          >
            Get Started
          </Button>
        </Flex>
        <Text
          w={"50%"}
          fontSize={18}
          fontFamily={"Poppins"}
          py={10}
          ml={20}
          color={"#0F161B"}
        >
          Lorem ipsum dolor sit amet consectetur. Imperdiet laoreet odio eu elit
          sed odio. Blandit. Lorem ipsum dolor sit amet consectetur. Imperdiet
          laoreet odio eu elit sed odio. Blandit. Lorem ipsum dolor sit amet
          consectetur.
        </Text>
        <HStack w={"full"} justifyContent={"end"}>
          <Image
            src={Ellipse}
            w={"100px"}
            transform={"rotate(270deg)"}
            mt={"-148px"}
            mr={20}
          />
        </HStack>
      </Card>
    </Flex>
  );
};

export default Subscribe;
