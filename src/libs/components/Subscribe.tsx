import {
  Card,
  HStack,
  Text,
  Image,
  Button,
  Stack,
  Flex,
  VStack,
} from "@chakra-ui/react";
import Ellipse from "./../../assets/Ellipse 2008.png";

const Subscribe = () => {
  return (
    <Flex
      w={{
        base: "calc(100vw - 50px)",
        sm: "calc(100vw - 100px)",
        md: "calc(100vw - 200px)",
        lg: "calc(100vw - 200px)",
        "2xl": "calc(100vw - 200px)",
      }}
      bgColor={"blue.300"}
      pos={"relative"}
      mt={{ base: 12, md: 20, lg: 22, "2xl": 24 }}
    >
      <VStack
        px={{ base: 12, sm: 14, md: 14, lg: 16, xl: 20, "2xl": 28 }}
        py={{ base: 8, sm: 16, md: 12, lg: 14, xl: 20, "2xl": 24 }}
        pos={"relative"}
        w="full"
      >
        <Stack
          direction={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
            "2xl": "row",
          }}
          w={"full"}
          justifyContent={"space-between"}
        >
          <Text
            flex={1}
            fontSize={{ base: 42, "2xl": 60 }}
            fontFamily={"Roboto-Slab"}
            fontWeight={700}
            color={"#0F161B"}
          >
            Subscribe to get updated
          </Text>
          <Button
            w={{
              base: "full",
              sm: "full",
              md: "220px",
              lg: "280px",
              "2xl": "280px",
            }}
            my={{ base: 4, md: 0 }}
            alignSelf={{
              base: "flex-start",
              sm: "flex-start",
              md: "flex-end",
              lg: "flex-end",
              "2xl": "flex-end",
            }}
            variant={"outline"}
            color={"secondary.800"}
            borderColor={"secondary.800"}
            px={12}
            py={8}
            fontSize={20}
            fontFamily={"Poppins"}
            onClick={() => {}}
          >
            Get Started
          </Button>
        </Stack>
        <HStack alignContent={"flex-start"} w={"full"}>
          <Text
            w={{ sm: "80%", md: "80%", "2xl": "60%" }}
            fontSize={20}
            fontFamily={"Poppins"}
            fontWeight={400}
            color={"#0F161B"}
          >
            Lorem ipsum dolor sit amet consectetur. Imperdiet laoreet odio eu
            elit sed odio. Blandit. Lorem ipsum dolor sit amet consectetur
            Imperdiet laoreet odio eu elit sed odio. Blandit Lorem ipsum dolor
            sit amet consectetur. Lorem ipsum dolor sit amet consectetur
          </Text>
        </HStack>
      </VStack>
      <Image
        pos={"absolute"}
        bottom={{
          base: "-58px",
          sm: "-58px",
          md: "-64px",
          lg: "-76px",
          "2xl": "-71px",
        }}
        right={{ base: 20, lg: 24, "2xl": 28 }}
        src={Ellipse}
        w={{
          base: "100px",
          sm: "100px",
          md: "110px",
          lg: "130px",
          "2xl": "120px",
        }}
        transform={"rotate(270deg)"}
      />
    </Flex>
  );
};

export default Subscribe;
{
  /* <Card w={"100%"} h={"300px"} borderRadius={5} bgColor={"#38db7d"}> */
}
{
  /* </Card> */
}
// alignItems="center"
// py={4}
// px={"10%"}
{
  /* pos={"relative"} bottom={0} justifyContent={"end"} */
}
