import { Button, HStack, Text, VStack } from "@chakra-ui/react";

const Navbar: React.FC = () => {
  return (
    <HStack w={`calc(100% - 180px)`} justifyContent={"space-between"} mt={3}>
      <Button
        variant="link"
        fontSize={24}
        fontFamily={"Roboto slab"}
        fontWeight={400}
        color={"#6F7D7F"}
      >
        Home
      </Button>
      <Button
        variant="link"
        fontSize={24}
        fontFamily={"Roboto slab"}
        fontWeight={400}
        color={"#6F7D7F"}
      >
        About
      </Button>
      <Button
        variant="link"
        fontSize={24}
        fontFamily={"Roboto slab"}
        fontWeight={400}
        color={"#6F7D7F"}
      >
        Testimonials
      </Button>
      <Button
        variant="link"
        fontSize={24}
        fontFamily={"Roboto slab"}
        fontWeight={400}
        color={"#6F7D7F"}
      >
        Contact
      </Button>
      <Text fontSize={40} fontFamily={"jost"} fontWeight={600}>
        MUNSHEE
      </Text>
      <HStack bgColor={"rosybrown"}>
        <Button
          variant="link"
          px={4}
          color={"#6F7D7F"}
          fontFamily={"Roboto slab"}
          fontSize={24}
          fontWeight={400}
        >
          Log In
        </Button>
        <Button
          variant="solid"
          color={"secondary.900"}
          px={10}
          fontFamily={"poppins"}
          fontSize={16}
          fontWeight={600}
          textAlign={"center"}
        >
          Sign Up
        </Button>
      </HStack>
    </HStack>
  );
};

export default Navbar;
