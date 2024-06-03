import {
  HStack,
  Text,
  VStack,
  FormControl,
  Input,
  Button,
  Box,
  Stack,
  Link,
  Center,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Footer = () => {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w0egw75",
        "template_wajqz9i",
        form.current,
        "yn6idBxRBXrYjNWpk"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <Box w={"full"}>
      <VStack>
        <Stack
          py={{ base: 12, "2xl": 22 }}
          direction={{
            base: "column",
            sm: "column",
            md: "row",
            lg: "row",
            "2xl": "row",
          }}
          
          // flex={1}
          w={{
            base: "calc(100vw - 50px)",
            sm: "calc(100vw - 100px)",
            md: "calc(100vw - 200px)",
            lg: "calc(100vw - 200px)",
            "2xl": "calc(100vw - 200px)",
          }}
          // spacing={1}
          justifyContent={"space-evenly"}
        >
          {/* px={20}spacing={6} */}
          <VStack  align="start" >
            <Text fontWeight={600} fontSize={40} fontFamily={"Jost"}>
              MUNSHEE
            </Text>
            <Text
              w={"400px"}
              fontSize={16}
              fontWeight={400}
              fontFamily={"Poppins"}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              maiores rem eveniet veritatis nihil veniam! Labore doloremque
              optio veritatis autem modi fugit rem incidunt, sint molestiae,
              magnam accusantium dolores! Consequatur.
            </Text>
            <HStack as={FormControl} flex={1}>
              <HStack dir="row">
                <form ref={form} id="sendEmail" onSubmit={sendEmail}>
                  <HStack>
                    <Input
                      placeholder="Email Address"
                      size={"lg"}
                      name="user_email"
                    />

                    <Button
                      px={10}
                      fontSize={16}
                      fontWeight={600}
                      fontFamily={"Poppins"}
                      form={"sendEmail"}
                      type="submit"
                    >
                      Register
                    </Button>
                  </HStack>
                </form>
              </HStack>
            </HStack>
          </VStack>
          <VStack px={20} align="start" spacing={5}>
            <Text fontSize={30} fontWeight={400} fontFamily={"Roboto Slab"}>
              Categories
            </Text>
            <Link fontSize={16} fontWeight={400} fontFamily={"Roboto Slab"}>
              Web / Mobile Application
            </Link>
            <Link fontSize={16} fontWeight={400} fontFamily={"Roboto Slab"}>
              Warehouse/ Logistics
            </Link>
            <Link fontSize={16} fontWeight={400} fontFamily={"Roboto Slab"}>
              Marketing
            </Link>
            <Link fontSize={16} fontWeight={400} fontFamily={"Roboto Slab"}>
              Employee Managment
            </Link>
            <Link fontSize={16} fontWeight={400} fontFamily={"Roboto Slab"}>
              Auditing
            </Link>
          </VStack>
          <VStack px={20} align="start" spacing={5}>
            <Text fontSize={30} fontWeight={400} fontFamily={"Roboto Slab"}>
              About
            </Text>
            <Link fontSize={16} fontWeight={400} fontFamily={"Roboto Slab"}>
              About US
            </Link>
            <Link fontSize={16} fontWeight={400} fontFamily={"Roboto Slab"}>
              Partnerships
            </Link>
            <Link fontSize={16} fontWeight={400} fontFamily={"Roboto Slab"}>
              Finance Experts
            </Link>
            <Link fontSize={16} fontWeight={400} fontFamily={"Roboto Slab"}>
              Project Managment
            </Link>
            <Link fontSize={16} fontWeight={400} fontFamily={"Roboto Slab"}>
              The Team
            </Link>
          </VStack>
          <VStack px={20} align="start" spacing={5} mt={-10}>
            <Text fontSize={30} fontWeight={400} fontFamily={"Roboto Slab"}>
              Follow Us
            </Text>
            <Link fontSize={16} fontWeight={400} fontFamily={"Roboto Slab"}>
              Facebook
            </Link>
            <Link fontSize={16} fontWeight={400} fontFamily={"Roboto Slab"}>
              Twitter
            </Link>
            <Link fontSize={16} fontWeight={400} fontFamily={"Roboto Slab"}>
              Instagram
            </Link>
            <Link fontSize={16} fontWeight={400} fontFamily={"Roboto Slab"}>
              LinkedIn
            </Link>
          </VStack>
        </Stack>
      </VStack>
      <Center bgColor={"blue.300"} py={4}>
        <Text
          fontWeight={600}
          fontSize={20}
          fontFamily={"Poppins"}
          color={"secondary.800"}
        >
          Copyright @ 2024 All rights reserved Munshee
        </Text>
      </Center>
    </Box>
  );
};

export default Footer;
