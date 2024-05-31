import { VStack, Button, Text } from "@chakra-ui/react";

const AttendenceText: React.FC = () => {
  return (
    <VStack
      w={{ md: "full", lg: "40%", "2xl": "40%" }}
      mt={{ base: 24, sm: 32, md: 24, lg: -4, xl: -8 }}
      alignItems={"flex-start"}
      spacing={{ base: 2, sm: 2, md: 4, lg: 4, xl: 4, "2xl": 10 }}
    >
      <Text
        fontSize={40}
        fontWeight={700}
        fontFamily={"Roboto-Slab"}
        align={"start"}
        justifyContent={"start"}
      >
        Attendance
      </Text>
      <Text
        textAlign={"justify"}
        fontSize={{ xl: 20, "2xl": 24 }}
        fontWeight={400}
        fontFamily={"Poppins"}
      >
        Lorem ipsum dolor sit amet consectetur. Imperdiet laoreet odio eu elit
        sed odio. Blandit. Lorem ipsum dolor sit amet consectetur. Imperdiet
        laoreet odio eu elit sed odio. Blandit. Lorem ipsum dolor sit amet
        consectetur. Imperdiet laoreet odio eu elit sed odio. Blandit. Lorem
        ipsum dolor sit amet consectetur. Imperdiet laoreet odio eu elit sed
        odio. Blandit.
      </Text>
      <Button
        w={"140px"}
        mt={{ base: 8, sm: 6, md: 2, lg: 2, xl: 5 }}
        textAlign={"center"}
      >
        Learn More
      </Button>
    </VStack>
  );
};

export default AttendenceText;
//  w={"140px"} mt={5} textAlign={"center"} ml={40}
