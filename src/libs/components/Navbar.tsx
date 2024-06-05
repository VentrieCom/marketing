import { Button, HStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
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
      <HStack
        bgColor={"rosybrown"}
        // display={"none"}
        // display={{ base: "none", sm: "none", md: "flex" }}
      >
        <Button
          variant="link"
          px={4}
          color={"#6F7D7F"}
          onClick={() => navigate("*")}
          fontFamily={"Roboto slab"}
          fontSize={24}
          fontWeight={400}
        >
          Log In
        </Button>
        <Button
          variant="link"
          fontSize={24}
          fontFamily={"Roboto slab"}
          fontWeight={400}
          color={"#6F7D7F"}
          onClick={() => navigate("about")}
          px={10}
        >
          Sign Up
        </Button>
        <Button
          variant="link"
          fontSize={24}
          fontFamily={"Roboto slab"}
          fontWeight={400}
          color={"#6F7D7F"}
          onClick={() => navigate("testimonials")}
        >
          Testimonials
        </Button>
        <Button
          variant="link"
          fontSize={24}
          fontFamily={"Roboto slab"}
          fontWeight={400}
          color={"#6F7D7F"}
          onClick={() => navigate("footer")}
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
