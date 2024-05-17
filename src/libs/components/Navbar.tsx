import { Button, HStack, Heading, Link } from "@chakra-ui/react";

const Navbar: React.FC = () => {
  return (
    <HStack>
      <HStack>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Testimonials</Link>
        <Link>Contact</Link>
      </HStack>
      <Heading>MUNSHEE</Heading>
      <Button>Log In</Button>
      <Button>Sign Up</Button>
    </HStack>
  );
};

export default Navbar;
