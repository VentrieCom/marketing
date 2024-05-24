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
      <VStack my={16}>
        <HStack w={"80%"} flex={1} spacing={12}>
          <VStack flex={1.3} align="start" spacing={6}>
            <Text fontWeight={"bold"} fontSize={26}>
              MUNSEE
            </Text>
            <Text textAlign={"justify"}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              maiores rem eveniet veritatis nihil veniam! Labore doloremque
              optio veritatis autem modi fugit rem incidunt, sint molestiae,
              magnam accusantium dolores! Consequatur.
            </Text>
            <HStack as={FormControl} flex={1} align="start">
              <HStack dir="row">
                <Input type="email" placeholder="Email Address" size={"lg"} />
                <Button px={8}>Register</Button>
              </HStack>
            </HStack>
          </VStack>
          <VStack flex={1} align="start" spacing={5}>
            <Text fontSize={28} pb={5}>
              Categories
            </Text>
            <Link>Web / Mobile Application</Link>
            <Link>Warehouse/ Logistics</Link>
            <Link>Marketing</Link>
            <Link>Employee Managment</Link>
            <Link>Auditing</Link>
          </VStack>
          <VStack flex={1} align="start" spacing={5}>
            <Text fontSize={28} pb={5}>
              About
            </Text>
            <Link>About US</Link>
            <Link>Partnerships</Link>
            <Link>Finance Experts</Link>
            <Link>Project Managment</Link>
            <Link>The Team</Link>
          </VStack>
          <VStack flex={1} align="start" spacing={5}>
            <Text fontSize={28} pb={5}>
              Follow Us
            </Text>
            <Link>Facebook</Link>
            <Link>Twitter</Link>
            <Link>Instagram</Link>
            <Link>LinkedIn</Link>
          </VStack>
        </HStack>
      </VStack>
      <Center bgColor={"blue.300"} py={4}>
        <Text fontWeight={"bold"} color={"secondary.800"}>
          Copyright @ 2024 All rights reserved Munshee
        </Text>
      </Center>
    </>
  );
};

export default Footer;
