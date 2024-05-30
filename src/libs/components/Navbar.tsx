import { Button, HStack, Text } from "@chakra-ui/react";

const Navbar: React.FC = () => {
  return (
    <HStack w={`calc(100% - 180px)`} justifyContent={"space-between"} mt={3}>
      <HStack px={20} w={"100%"} justifyContent={"space-between"}>
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
        <HStack ml={40}>
          <Text fontSize={40} fontFamily={"jost"} fontWeight={600}>
            MUNSHEE
          </Text>
          <HStack ml={"400px"}>
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
      </HStack>
    </HStack>
  );
};

export default Navbar;
// w={`calc(100% - 120px)`}
