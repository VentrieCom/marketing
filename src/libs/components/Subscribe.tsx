import { Card, HStack, Text, Image, Button, Flex } from "@chakra-ui/react";
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
      <Card w={"100%"} h={"300px"} borderRadius={5} bgColor={"#38db7d"}>
        <HStack w={"100%"} justifyContent={"space-between"}>
          <Text
            flex={1}
            // ml={20}
            fontSize={60}
            fontFamily={"Roboto-Slab"}
            fontWeight={700}
            color={"#0F161B"}
            mt={10}
          >
            Subscribe to get updated
          </Text>
          {/* TODO : Align it properly */}
          <HStack mr={10} mt={6}>
            <Button
              variant={"outline"}
              color={"secondary.800"}
              borderColor={"secondary.800"}
              px={10}
              fontSize={20}
              fontWeight={600}
              fontFamily={"Poppins"}
              onClick={() => {}}
            >
              Get Started
            </Button>
          </HStack>
        </HStack>
        <Text
          w={"50%"}
          fontSize={20}
          fontFamily={"Poppins"}
          py={10}
          ml={20}
          fontWeight={400}
          color={"#0F161B"}
        >
          Lorem ipsum dolor sit amet consectetur. Imperdiet laoreet odio eu elit
          sed odio. Blandit. Lorem ipsum dolor sit amet consectetur Imperdiet
          laoreet odio eu elit sed odio. Blandit Lorem ipsum dolor sit amet
          consectetur. Lorem ipsum dolor sit amet consectetur{" "}
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
