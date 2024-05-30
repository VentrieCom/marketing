import {
  HStack,
  Text,
  VStack,
  FormControl,
  Input,
  Button,
  Link,
  Center,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <VStack py={20}>
        <HStack w={"90%"} flex={1} spacing={1} justifyContent={"space-around"}>
          <VStack px={20} align="start" spacing={6}>
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
                <Input type="email" placeholder="Email Address" size={"lg"} />
                <Button
                  px={10}
                  fontSize={16}
                  fontWeight={600}
                  fontFamily={"Poppins"}
                >
                  Register
                </Button>
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
        </HStack>
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
    </>
  );
};

export default Footer;
