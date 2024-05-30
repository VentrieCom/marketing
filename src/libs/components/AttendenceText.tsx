import { VStack, Button, Text } from "@chakra-ui/react";

const AttendenceText: React.FC = () => {
  return (
    <VStack w={"full"} ml={"5%"} alignItems={"flex-start"}>
      <Text
        fontSize={40}
        fontWeight={700}
        fontFamily={"Roboto-Slab"}
        align={"start"}
        justifyContent={"start"}
        ml={40}
      >
        Attendance
      </Text>
      <Text
        w={"60%"}
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
      <Button w={"140px"} mt={5} textAlign={"center"} ml={40}>
        Learn More
      </Button>
    </VStack>
  );
};

export default AttendenceText;
