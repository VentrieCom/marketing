import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Drawer,
  Text,
  VStack,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Stack,
  Heading,
  Link,
} from "@chakra-ui/react";

import Attendance from "../../../assets/Images/Attendance.png";
import Product from "../../../assets/Images/Product grid view.png";
import Stocks from "../../../assets/Images/Stocks.png";
import WelcomeBG from "../../../assets/Images/WelcomeBG.png";
import InstagramIcon from "./../../../assets/Images/Instagram Icon.png";
import LinkedInIcon from "./../../../assets/Images/LinkedIn.png";
import FacebookIcon from "./../../../assets/Images/Facebook Icon.png";

import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
const WelcomeScreen: React.FC<any> = ({ scrollToSection }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hamburgerRef = React.useRef(null);

  const handleButtonClick = (section: string) => {
    scrollToSection(section);
    onClose();
  };

  return (
    <Box
      bgImage={`url(${WelcomeBG})`}
      bgPosition={{ sm: "top", md: "top" }}
      bgRepeat="no-repeat"
      objectFit={"cover"}
      bgColor={"#0f161b"}
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
              ref={hamburgerRef}
              cursor={"pointer"}
              onClick={onOpen}
              boxSize={{ base: 6, sm: 6, md: 6, lg: 8 }}
              display={{ sm: "flex", md: "none", lg: "none" }}
            />
            <Drawer
              isOpen={isOpen}
              placement="left"
              size={"full"}
              onClose={onClose}
              finalFocusRef={hamburgerRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody bgColor={"secondary.500"}>
                  <Stack mt={10} spacing={4}>
                    <Button
                      variant="link"
                      fontSize={{ base: 26, lg: 20, xl: 22, "2xl": 24 }}
                      fontWeight={400}
                      color={"secondary.200"}
                    >
                      Home
                    </Button>
                    <Button
                      variant="link"
                      fontSize={{ base: 26, lg: 20, xl: 22, "2xl": 24 }}
                      fontWeight={400}
                      color={"secondary.200"}
                      onClick={() => handleButtonClick("about")}
                    >
                      About
                    </Button>
                    <Button
                      variant="link"
                      fontSize={{ base: 26, lg: 20, xl: 22, "2xl": 24 }}
                      fontWeight={400}
                      color={"secondary.200"}
                      onClick={() => handleButtonClick("features")}
                    >
                      Features
                    </Button>
                    <Button
                      variant="link"
                      fontSize={{ base: 26, lg: 20, xl: 22, "2xl": 24 }}
                      fontWeight={400}
                      color={"secondary.200"}
                      onClick={() => handleButtonClick("contact")}
                    >
                      Contact
                    </Button>
                  </Stack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>

            <Text
              fontSize={{ base: 28, md: 38, lg: 40 }}
              fontFamily={"jost"}
              fontWeight={600}
            >
              MUNSHEE
            </Text>
            <HStack
              spacing={{ base: 0, md: 3, lg: 3, xl: 4, "2xl": 6 }}
              display={{
                base: "none",
                sm: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
              }}
            >
              <Button
                variant="link"
                fontSize={{ md: 20, lg: 20, xl: 22, "2xl": 24 }}
                fontWeight={400}
                color={"secondary.200"}
              >
                Home
              </Button>
              <Button
                variant="link"
                fontSize={{ md: 20, lg: 20, xl: 22, "2xl": 24 }}
                fontWeight={400}
                color={"secondary.200"}
                onClick={() => scrollToSection("about")}
              >
                About
              </Button>
              <Button
                variant="link"
                fontSize={{ md: 20, lg: 20, xl: 22, "2xl": 24 }}
                fontWeight={400}
                color={"secondary.200"}
                onClick={() => scrollToSection("features")}
              >
                Features
              </Button>
              <Button
                variant="link"
                fontSize={{ md: 20, lg: 20, xl: 22, "2xl": 24 }}
                fontWeight={400}
                color={"secondary.200"}
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </Button>
            </HStack>
            <HStack
              display={{ base: "flex", sm: "flex", md: "flex" }}
              flex={{ base: 1, sm: 1, md: 0, lg: 0, "2xl": 0 }}
              justifyContent={{ base: "flex-end", sm: "flex-end" }}
            >
              <Button
                variant="link"
                px={4}
                color={"secondary.200"}
                fontSize={{ sm: 20, md: 20, lg: 20, xl: 22, "2xl": 24 }}
                fontWeight={400}
              >
                Log In
              </Button>
            </HStack>
          </HStack>
        </HStack>
      </VStack>
      <VStack spacing={12}>
        <VStack
          w={{ base: "80%", sm: "80%", md: "80%", lg: "65%" }}
          spacing={{ base: 12, sm: 8 }}
          textAlign="center"
        >
          <Heading
            as={"h1"}
            fontSize={{
              base: "4xl",
              sm: "5xl",
              md: "5xl",
              lg: "6xl",
              xl: "6xl",
              "2xl": "6xl",
            }}
            mt={{ base: 28, sm: 28, md: 24, lg: 14 }}
            fontWeight={700}
            w={{
              base: `calc(100vw - 75px)`,
              sm: `calc(100vw - 200px)`,
              md: "90%",
              lg: "75%",
              "2xl": "75%",
            }}
          >
            Munshee Desktop Application
          </Heading>
          <Text
            fontSize={{ sm: 18, md: 18, lg: 20, xl: 24, "2xl": 24 }}
            fontWeight={400}
            py={5}
          >
            We offers a wide range of services including Web/Mobile Application
            development, Warehousing/Logistics, Marketing, Employee Management,
            and Auditing, delivering tailored solutions to enhance your business
            efficiency and growth.
          </Text>
        </VStack>
        <Flex
          display={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "flex",
            "2xl": "flex",
          }}
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
          <Link
            href="https://www.linkedin.com/showcase/103609724/admin/dashboard/"
            isExternal
          >
            <Image src={LinkedInIcon} boxSize={"30px"} />
          </Link>
          <Link href="https://www.facebook.com/officialmunsheeapp" isExternal>
            <Image src={FacebookIcon} boxSize={"30px"} />
          </Link>

          <Link href="https://www.instagram.com/officialmunsheeapp/" isExternal>
            <Image src={InstagramIcon} boxSize={"30px"} />
          </Link>
        </Flex>
        <Stack
          mt={{ base: 0, sm: 0, md: 0, lg: 18, "2xl": 2 }}
          direction={{
            base: "column",
            sm: "column",
            md: "row",
            lg: "row",
            "2xl": "row",
          }}
          position={{
            base: "static",
            sm: "static",
            md: "relative",
            lg: "relative",
            "2xl": "relative",
          }}
          w={{
            base: "calc(100vw - 50px)",
            sm: "calc(100vw - 100px)",
            md: "calc(100vw - 100px)",
            lg: "calc(100vw - 200px)",
            "2xl": "calc(100vw - 200px)",
          }}
          minH={{
            base: "max-content",
            sm: "max-content",
            md: "64vh",
            lg: "68vh",
            "2xl": "70vh",
          }}
          spacing={{ base: 6, sm: 8 }}
        >
          <Image
            src={Stocks}
            w={{ md: "335px", lg: "450px", xl: "530px", "2xl": "600px" }}
            alt="stocks screen"
            position={{
              base: "static",
              sm: "static",
              md: "absolute",
              lg: "absolute",
              "2xl": "absolute",
            }}
            left={{ base: "none", sm: "none", md: 0, lg: 0, "2xl": 0 }}
            bottom={{ base: "none", sm: "none", md: 0, lg: 0, "2xl": 0 }}
            zIndex={8}
          />
          <Image
            src={Product}
            alt="products screen"
            w={{
              md: "650px",
              lg: "850px",
              xl: "950px",
              "2xl": "1100px",
            }}
            position={{
              base: "static",
              sm: "static",
              md: "absolute",
              lg: "absolute",
              "2xl": "absolute",
            }}
            top={{
              base: "none",
              sm: "none",
              md: "50%",
              lg: "50%",
              "2xl": "50%",
            }}
            left={{
              base: "none",
              sm: "none",
              md: "50%",
              lg: "50%",
              "2xl": "50%",
            }}
            transform={{
              base: "none",
              sm: "none",
              md: "translate(-50%, -50%)",
              lg: "translate(-50%, -50%)",
              "2xl": "translate(-50%, -50%)",
            }}
            boxShadow="rgba(15, 22, 27, 0.2) 0px 8px 24px"
            zIndex={4}
          />
          <Image
            src={Attendance}
            w={{ md: "335px", lg: "450px", xl: "530px", "2xl": "600px" }}
            alt="attendance screen"
            position={{
              base: "static",
              sm: "static",
              md: "absolute",
              lg: "absolute",
              "2xl": "absolute",
            }}
            right={{ base: "none", sm: "none", md: 0, lg: 0, "2xl": 0 }}
            bottom={{ base: "none", sm: "none", md: 0, lg: 0, "2xl": 0 }}
            zIndex={8}
          />
        </Stack>
      </VStack>
    </Box>
  );
};

export default WelcomeScreen;
