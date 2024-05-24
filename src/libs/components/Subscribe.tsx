import { Card, HStack, Text, Image } from "@chakra-ui/react";
import Ellipse from "./../../assets/Ellipse 2008.png";

const Subscribe = () => {
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
      <Card w={"100%"} h={"300px"} borderRadius={5} bgColor={"#38db7d"}>
        <HStack>
          <Text
            ml={20}
            fontSize={60}
            fontFamily={"roboto-slab"}
            fontWeight={700}
            color={"#0F161B"}
            mt={10}
          >
            Subscribe to get updated
          </Text>
          {/* Add button */}
        </HStack>
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
          consectetur.{" "}
        </Text>
        <HStack w={"100%"} justifyContent={"end"}>
          <Image
            src={Ellipse}
            w={"100px"}
            transform={"rotate(270deg)"}
            mt={"-148px"}
            mr={20}
          />
        </HStack>
      </Card>
    </Card>
  );
};

export default Subscribe;
