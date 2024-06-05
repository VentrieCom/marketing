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
        fontFamily={"Roboto Slab"}
        align={"start"}
        justifyContent={"start"}
      >
        Attendance
      </Text>
      <Text
        fontSize={{ xl: 20, "2xl": 24 }}
        fontWeight={400}
        fontFamily={"Poppins"}
      >
        Munshee provides a robust Employee Attendance Management service that
        streamlines workforce operations with automated time tracking, leave
        management, and real-time attendance analytics. Our user-friendly system
        ensures accurate tracking, compliance with policies, and detailed
        reporting, helping you manage employee productivity efficiently and
        maintain a well-organized, productive workforce.
      </Text>
      <Button
        w={"140px"}
        mt={{ base: 8, sm: 6, md: 2, lg: 2, xl: 5 }}
        textAlign={"center"}
        fontSize={16}
        fontWeight={600}
        fontFamily={"Poppins"}
      >
        Learn More
      </Button>
    </VStack>
  );
};

export default AttendenceText;
//  w={"140px"} mt={5} textAlign={"center"} ml={40}
