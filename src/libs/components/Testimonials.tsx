import {
  Avatar,
  Card,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Ahmed from "./../../assets/Images/Ahmed.png";
import Kabir from "./../../assets/Images/Kabir Noor.png";
import Wajeeh from "./../../assets/Images/Wajeeh.png";
import Waqar from "./../../assets/Images/Waqar.png";
import React from "react";

const Testimonials: React.FC<any> = ({ testimonials }) => {
  const userReview = [
    {
      userName: "Ahmed Khan",
      remarks:
        "“I've been using Munshee's software for my business for over a year now, and I couldn't be happier. It's intuitive, reliable, and has helped streamline my operations significantly.”",
      designation: "Software Engineer",
      img: Ahmed,
    },
    {
      userName: "Kabir Noor",
      remarks:
        "“The Munshee team consistently goes above and beyond to ensure their products meet my needs. Their attention to detail and commitment to customer satisfaction are commendable.”",
      designation: "Operations Director",
      img: Kabir,
    },
    {
      userName: "Wajeeh Arain",
      remarks:
        "“Munshee's customer support is outstanding! They resolved my technical issue quickly and professionally, leaving me impressed with their service.”",
      designation: "Technology Manager",
      img: Wajeeh,
    },
    {
      userName: "Waqar Shaikh ",
      remarks:
        "“Munshee's commitment to innovation shines through in their products. The continuous updates and improvements demonstrate their dedication to providing the best solutions for their customers.”",
      designation: "IT Specialist",
      img: Waqar,
    },
  ];
  return (
    <VStack
      ref={testimonials}
      w={"full"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      my={{ sm: 20, md: 24, lg: 20, "2xl": 28 }}
      zIndex={2}
    >
      <Text
        fontSize={{ base: 40, sm: 44, md: 48, lg: 52 }}
        fontWeight={700}
        fontFamily={"Roboto Slab"}
        textAlign={"center"}
      >
        Testimonials
      </Text>
      <Text
        textAlign={"center"}
        my={{ base: 2, sm: 4, md: 8, lg: 18 }}
        fontSize={{ base: 14, sm: 18, md: 20, lg: 22 }}
        w={{ base: "75%", sm: "75%", md: "75%", lg: "60%", "2xl": "55%" }}
        fontFamily={"Poppins"}
        fontWeight={400}
      >
        Discover how Munshee has made a difference , our clients share their
        positive feedback and the significant impact our solutions have had on
        their businesses.
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
        {userReview.map((_, index) => (
          <Card
            key={index}
            w={"full"}
            bgColor={"#2c3b46"}
            borderRadius={15}
            px={2}
            py={6}
            justifyContent={"space-between"}
          >
            <Text
              w={"full"}
              fontSize={24}
              fontFamily={"Poppins"}
              fontWeight={400}
              px={3}
            >
              {_.remarks}
            </Text>
            <HStack mt={2}>
              <Avatar
                size="xl"
                name="Kola Tioluwani"
                src={_.img}
                ml={5}
                color={"#D9D9D9"}
              />
              <VStack spacing={0} alignItems={"flex-start"}>
                <Text fontFamily={"Poppins"} fontWeight={600} fontSize={24}>
                  {_.userName}
                </Text>
                <Text
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  fontSize={15}
                  px={1}
                >
                  {_.designation}
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

