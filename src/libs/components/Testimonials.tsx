import {
  Avatar,
  Card,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

const Testimonials = () => {
  return (
    <VStack
      w={"full"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      my={{ sm: 20, md: 24, lg: 20, "2xl": 28 }}
      bgColor={"#0f161b"}
    >
      <Text
        fontSize={{ base: 40, sm: 44, md: 48, lg: 52 }}
        fontWeight={700}
        fontFamily={"Roboto-Slab"}
        textAlign={"center"}
      >
        Testimonials
      </Text>
      <Text
        textAlign={"center"}
        my={{ base: 2, sm: 4, md: 8, lg: 18 }}
        fontSize={{ base: 14, sm: 18, md: 20, lg: 22 }}
        w={{ base: "75%", sm: "75%", md: "75%", lg: "60%", "2xl": "35%" }}
        fontFamily={"Poppins"}
        fontWeight={400}
      >
        Lorem ipsum dolor sit amet consectetur. Imperdiet laoreet odio eu elit
        sed odio. Blandit.
      </Text>

      <SimpleGrid
      w={{
        base: "calc(100vw - 50px)",
        sm: "calc(100vw - 100px)",
        md: "calc(100vw - 200px)",
        lg: "calc(100vw - 200px)",
        "2xl": "calc(100vw - 200px)",
      }}
        spacing={{ base: 4, sm: 5, md: 5, lg: 7 }}
        columns={{ base: 1, sm: 1, md: 1, lg: 2, "2xl": 2 }}
        mt={{ base: 18, sm: 20, md: 22, lg: 10 }}
      >
        {[1, 1, 1, 1].map(() => (
          <Card w={"full"} bgColor={"#2c3b46"} borderRadius={15} px={2} py={6}>
            <Text
              w={"100%"}
              fontSize={20}
              fontFamily={"Poppins"}
              fontWeight={400}
              px={5}
              py={3}
            >
              Lorem ipsum dolor sit amet consectetur. Imperdiet laoreet odio eu
              elit sed odio. Blandit. Lorem ipsum dolor sit amet consectetur.
              Imperdiet laoreet odio eu elit sed odio. Blandit. Lorem ipsum
              dolor sit amet consectetur.
            </Text>
            <HStack mt={2}>
              <Avatar
                size="lg"
                name="Kola Tioluwani"
                src="https://bit.ly/code-beast"
                ml={5}
                color={"#D9D9D9"}
              />
              <VStack spacing={0}>
                <Text fontFamily={"Poppins"} fontWeight={600} fontSize={24}>
                  Najam Memon
                </Text>
                <Text
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  fontSize={15}
                  mr={"80px"}
                  px={1}
                >
                  Demo Card
                </Text>
              </VStack>
            </HStack>
          </Card>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default Testimonials;
// px={250}
