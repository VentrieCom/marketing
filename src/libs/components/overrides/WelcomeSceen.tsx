import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import Attendance from "../../../assets/Images/Attendance.png";
import Product from "../../../assets/Images/Product grid view.png";
import Stocks from "../../../assets/Images/Stocks.png";
import WelcomeBG from "../../../assets/Images/WelcomeBG.png";
import {
  HamburgerIcon,
  RepeatClockIcon,
  StarIcon,
  UnlockIcon,
} from "@chakra-ui/icons";
const WelcomeScreen: React.FC = () => {
  return (
    <Box
      bgImage={`url(${WelcomeBG})`}
      bgPosition={"top"}
      bgRepeat="no-repeat"
      bgSize={{
        base: "cover",
        sm: "contain",
        md: "cover",
        lg: "100vw auto",
        "2xl": "contain",
      }}
      bgColor={"secondary.900"}
    >
      <VStack w={"full"} py={2}>
        <HStack
          w={{
            base: `calc(100% - 50px)`,
            sm: `calc(100% - 50px)`,
            md: `calc(100% - 75px)`,
            lg: `calc(100% - 100px)`,
            xl: `calc(100% - 200px)`,
            "2xl": `calc(100% - 300px)`,
          }}
          justifyContent={"space-between"}
          mt={3}
        >
          <HStack
            w={"full"}
            justifyContent={{
              base: "flex-start",
              sm: "flex-start",
              md: "space-between",
            }}
          >
            <HamburgerIcon
              boxSize={{ base: 6, sm: 6, md: 6, lg: 8 }}
              display={{ base: "flex", sm: "flex", md: "flex", lg: "none" }}
            />
            <HStack
              spacing={{ base: 0, lg: 3, xl: 4, "2xl": 6 }}
              display={{
                base: "none",
                sm: "none",
                md: "none",
                lg: "flex",
                xl: "flex",
              }}
            >
              <Button
                variant="link"
                fontSize={{ lg: 20, xl: 22, "2xl": 24 }}
                fontFamily={"Roboto slab"}
                fontWeight={400}
                color={"#6F7D7F"}
              >
                Home
              </Button>
              <Button
                variant="link"
                fontSize={{ lg: 20, xl: 22, "2xl": 24 }}
                fontFamily={"Roboto slab"}
                fontWeight={400}
                color={"#6F7D7F"}
              >
                About
              </Button>
              <Button
                variant="link"
                fontSize={{ lg: 20, xl: 22, "2xl": 24 }}
                fontFamily={"Roboto slab"}
                fontWeight={400}
                color={"#6F7D7F"}
              >
                Testimonials
              </Button>
              <Button
                variant="link"
                fontSize={{ lg: 20, xl: 22, "2xl": 24 }}
                fontFamily={"Roboto slab"}
                fontWeight={400}
                color={"#6F7D7F"}
              >
                Contact
              </Button>
            </HStack>
            <Text
              fontSize={{ base: 28, lg: 40 }}
              fontFamily={"jost"}
              fontWeight={600}
              mr={{ md: -24, lg: 2, xl: 10, "2xl": 140 }}
            >
              MUNSHEE
            </Text>
            <HStack
              flex={{ base: 1, sm: 1, md: 0, lg: 0, "2xl": 0 }}
              justifyContent={{ base: "flex-end", sm: "flex-end" }}
            >
              <Button
                variant="link"
                px={4}
                color={"#6F7D7F"}
                fontFamily={"Roboto slab"}
                fontSize={{ md: 18, lg: 20, xl: 22, "2xl": 24 }}
                fontWeight={400}
              >
                Log In
              </Button>
              <Button
                variant="solid"
                color={"secondary.900"}
                px={{ base: 2, sm: 3, md: 4, xl: 6, "2xl": 10 }}
                fontFamily={"poppins"}
                fontSize={{ md: 18, lg: 20, xl: 22, "2xl": 24 }}
                fontWeight={600}
                textAlign={"center"}
              >
                Sign Up
              </Button>
            </HStack>
          </HStack>
        </HStack>
      </VStack>
      <VStack spacing={12}>
        <VStack
          // bgColor={"rebeccapurple"}
          w={{ base: "80%", sm: "80%", md: "80%", lg: "50%" }}
          spacing={{ base: 12, sm: 14 }}
          textAlign="center"
        >
          <Heading
            fontFamily="mono"
            fontSize={{
              base: "4xl",
              sm: "5xl",
              md: "5xl",
              lg: "6xl",
              xl: "6xl",
              "2xl": "6xl",
            }}
            mt={{ base: 28, sm: 28, md: 24, lg: 14 }}
          >
            Munshee Desktop Application
          </Heading>
          <Text fontSize={{ sm: 18, md: 18, lg: 20, xl: 24, "2xl": 24 }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            exercitationem id aliquam quae consequatur.
          </Text>
        </VStack>
        <Flex
          direction="column"
          justify="space-between"
          align="center"
          h="120px"
          w="40px"
          position="absolute"
          left={8}
          top="7.5%"
          zIndex={100}
        >
          <RepeatClockIcon boxSize="20px" color="secondary.200" />
          <UnlockIcon boxSize="20px" color="secondary.200" />
          <StarIcon boxSize="20px" color="secondary.200" />
        </Flex>
        <HStack position="relative" w="90%" minH="65vh">
          <Image
            src={Stocks}
            w={{ md: "450px", lg: "450px", xl: "530px", "2xl": "600px" }}
            alt="stocks screen"
            position="absolute"
            left={0}
            bottom={0}
            zIndex={2}
          />
          <Image
            src={Product}
            alt="products screen"
            w={{ md: "700px", lg: "850px", xl: "950px", "2xl": "1100px" }}
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            boxShadow="rgba(15, 22, 27, 0.2) 0px 8px 24px"
          />
          <Image
            src={Attendance}
            w={{ lg: "450px", xl: "530px", "2xl": "600px" }}
            alt="attendance screen"
            position="absolute"
            right={0}
            bottom={0}
            zIndex={2}
          />
        </HStack>
      </VStack>
    </Box>
  );
};

export default WelcomeScreen;
