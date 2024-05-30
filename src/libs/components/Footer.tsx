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
            <Text fontWeight={"bold"} fontSize={26}>
              MUNSHEE
            </Text>
            <Text w={"400px"}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              maiores rem eveniet veritatis nihil veniam! Labore doloremque
              optio veritatis autem modi fugit rem incidunt, sint molestiae,
              magnam accusantium dolores! Consequatur.
            </Text>
            <HStack as={FormControl} flex={1}>
              <HStack dir="row">
                <Input type="email" placeholder="Email Address" size={"lg"} />
                <Button px={8}>Register</Button>
              </HStack>
            </HStack>
          </VStack>
          <VStack px={20} align="start" spacing={5}>
            <Text fontSize={28}>Categories</Text>
            <Link>Web / Mobile Application</Link>
            <Link>Warehouse/ Logistics</Link>
            <Link>Marketing</Link>
            <Link>Employee Managment</Link>
            <Link>Auditing</Link>
          </VStack>
          <VStack px={20} align="start" spacing={5}>
            <Text fontSize={28}>About</Text>
            <Link>About US</Link>
            <Link>Partnerships</Link>
            <Link>Finance Experts</Link>
            <Link>Project Managment</Link>
            <Link>The Team</Link>
          </VStack>
          <VStack px={20} align="start" spacing={5} mt={-10}>
            <Text fontSize={28}>Follow Us</Text>
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
