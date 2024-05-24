import { Button, HStack, Heading, Link } from "@chakra-ui/react";
import { darkColors } from "./BaseProvider";

const Navbar: React.FC = () => {
  return (
    <HStack>
      <HStack>
        <Button variant="link">Home</Button>
        <Button variant="link">About</Button>
        <Button variant="link">Testimonials</Button>
        <Button variant="link">Contact</Button>
      </HStack>
      <Heading>MUNSHEE</Heading>
      <Button variant="link">Log In</Button>
      <Button variant="outline" color={darkColors.primary[50]}>
        Sign Up
      </Button>
    </HStack>
  );
};

export default Navbar;
