import { Stack, Text } from "@chakra-ui/react";

const AttendenceText = () => {
  return (
    <Stack w={"100%"}>
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
        w={"50%"}
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
        odio. Blandit.{" "}
      </Text>
    </Stack>
  );
};

export default AttendenceText;
