import { Button, HStack, Text } from "@chakra-ui/react";

const Navbar: React.FC = () => {
  return (
    <HStack w={`calc(100% - 180px)`} justifyContent={"space-between"} mt={3}>
      <HStack spacing={10}>
        <Button variant="link">Home</Button>
        <Button variant="link">About</Button>
        <Button variant="link">Testimonials</Button>
        <Button variant="link">Contact</Button>
        <HStack ml={40}>
          <Text fontSize={50} fontFamily={"jost"} fontWeight={600}>
            MUNSHEE
          </Text>
          <HStack ml={"400px"}>
            <Button variant="link" px={4}>
              Log In
            </Button>
            <Button variant="solid" color={"secondary.900"} px={10}>
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
