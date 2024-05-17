import { Button, HStack, Heading, VStack } from "@chakra-ui/react";

const Navbar: React.FC = () => {
  return (
    <VStack w={"full"}>
      <HStack w={`calc(100% - 180px)`} justifyContent={"space-between"} mt={4}>
        <HStack spacing={5}>
          <Button variant="link">Home</Button>
          <Button variant="link">About</Button>
          <Button variant="link">Testimonials</Button>
          <Button variant="link">Contact</Button>
        </HStack>
        <Heading>MUNSHEE</Heading>
        <HStack spacing={8}>
          <Button variant="link">Log In</Button>
          <Button
            variant="solid"
            color={"secondary.900"}
            px={10}
          >
            Sign Up
          </Button>
        </HStack>
      </HStack>
    </VStack>
  );
};

export default Navbar;
// w={`calc(100% - 120px)`}
