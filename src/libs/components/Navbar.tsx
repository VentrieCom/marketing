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
        <Heading pos={"relative"} right={32}>
          MUNSHEE
        </Heading>
        <HStack spacing={8}>
          <Button variant="link">Log In</Button>
          <Button
            variant="solid"
            color={"secondary.900"}
            px={10}
            boxShadow={"rgba(15, 22, 27, 0.2) 0px 8px 24px"}
          >
            Sign Up
          </Button>
        </HStack>
      </HStack>
    </VStack>
  );
};

export default Navbar;
