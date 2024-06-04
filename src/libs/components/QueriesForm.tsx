import { ArrowForwardIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Heading,
  VStack,
  Text,
  HStack,
  Flex,
  Input,
  Box,
  InputGroup,
  InputLeftElement,
  Textarea,
  Button,
  Image,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import EllipseGreen from "./../../assets/EllipseGreen 2010.png";
import BulbIcon from "./../../assets/streamline_ai-technology-spark.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const customPlaceholderStyle = {
  borderRadius: {
    base: "var(--chakra-radii-lg)",
    sm: "var(--chakra-radii-lg)",
    md: "var(--chakra-radii-lg)",
    lg: "var(--chakra-radii-lg)",
  },
  fontSize: { base: 18, sm: 20, md: 22 },
  "::placeholder": {
    fontSize: { base: 18, sm: 22 }, // Adjust the size as needed
    color: "gray.500", // Optional: adjust the color if needed
  },
};

const QueriesForm: React.FC = () => {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    emailjs
      .sendForm(
        "service_w0egw75",
        "template_wajqz9i",
        form.current,
        "yn6idBxRBXrYjNWpk"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    // bgColor={"rebeccapurple"}
    <VStack>
      <HStack
        pos={"absolute"}
        zIndex={1}
        // bgColor={"rebeccapurple"}
        right={0}
        mt={{ base: -12, sm: 18, md: -20 }}
      >
        <Image
          src={EllipseGreen}
          w={{
            base: "100px",
            sm: "100px",
            md: "110px",
            lg: "130px",
            "2xl": "150px",
          }}
        />
      </HStack>
      <VStack
        mt={44}
        mb={20}
        w={{
          base: `calc(100vw - 100px)`,
          md: `100vw`,
          lg: `100vw`,
          "2xl": `100vw`,
        }}
      >
        <Heading
          textAlign={"center"}
          fontFamily={"Roboto-Slab"}
          fontWeight={700}
          fontSize={{ base: 40, sm: 44, md: 48, lg: 52 }}
          mb={{ base: 4, md: 2, lg: 3, xl: 4, "2xl": 5 }}
        >
          Got a question or a few?
        </Heading>
        <Text
          textAlign={"center"}
          color={"secondary.200"}
          fontSize={{ base: 20, sm: 22, md: "25px", xl: 24 }}
          fontFamily={"Poppins"}
          fontWeight={400}
          w={{ base: "80%", sm: "80%", md: "60%", lg: "70%" }}
        >
          If you have any question, drop us a note. Fill out the below form and
          we will get it.
        </Text>
      </VStack>
      <SimpleGrid
        spacing={8}
        w={{
          base: "calc(100vw - 50px)",
          sm: "calc(100vw - 100px)",
          md: "calc(100vw - 200px)",
          lg: "calc(100vw - 200px)",
          "2xl": "calc(100vw - 200px)",
        }}
        columns={{ base: 1, sm: 1, md: 1, lg: 2, xl: 2, "2xl": 2 }}
      >
        <VStack>
          <Box w="full" mb={{ sm: 10 }}>
            <Stack
              spacing={5}
              direction={{
                base: "column",
                sm: "row",
                md: "row",
                lg: "column",
                xl: "row",
              }}
            >
              <Input
                placeholder="Name"
                py={{ base: 6, sm: 7, md: 7, lg: 8, xl: 10 }}
                border={"2px solid #2C3B46"}
                style={{ paddingLeft: "20px" }}
                sx={customPlaceholderStyle}
                color={"blue.300"}
              />
              <Input
                placeholder="Surname"
                py={{ base: 6, sm: 7, md: 7, lg: 8, xl: 10 }}
                border={"2px solid #2C3B46"}
                style={{ paddingLeft: "20px" }}
                sx={customPlaceholderStyle}
                color={"blue.300"}
              />
            </Stack>
            <VStack py={5} spacing={5}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  mt={{ base: 1, sm: 2, md: 2, lg: 6 }}
                >
                  <EmailIcon color="gray.700" fontSize={"1.3em"} ml={2} />
                </InputLeftElement>
                <Input
                  type="tel"
                  placeholder="Your Email"
                  py={{ base: 6, sm: 7, md: 7, lg: 8, xl: 10 }}
                  border={"2px solid #2C3B46"}
                  style={{ paddingLeft: "20px" }}
                  sx={customPlaceholderStyle}
                  color={"blue.300"}
                  name="user_name"
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.700"
                  fontSize="1.3em"
                  mt={{ base: 1, sm: 2, md: 2, lg: 6 }}
                >
                  <PhoneIcon color="gray.700" ml={2} />
                </InputLeftElement>
                <Input
                  placeholder="Phone Number"
                  py={{ base: 6, sm: 7, md: 7, lg: 8, xl: 10 }}
                  border={"2px solid #2C3B46"}
                  style={{ paddingLeft: "20px" }}
                  sx={customPlaceholderStyle}
                  color={"blue.300"}
                  name="description"
                />
              </InputGroup>
              <Textarea
                h={{ base: "100px", md: "180px" }}
                placeholder="How can we help?"
                size="lg"
                border={"2px solid #2C3B46"}
                // style={{ paddingLeft: "20px" }}
                py={{ base: 6, sm: 7, md: 6, lg: 8, xl: 10 }}
                sx={customPlaceholderStyle}
                color={"blue.300"}
              />
            </VStack>
            <Button
              rightIcon={<ArrowForwardIcon ml={3} color={"secondary.400"} />}
              type="submit"
              size={"lg"}
              px={{ base: 6, sm: 6 }}
              py={{ base: 4, sm: 6 }}
              fontFamily={"poppins"}
              letterSpacing={2}
            >
              Send Message
            </Button>
          </Box>
        </VStack>
        <VStack spacing={4}>
          <Flex
            bgColor={"secondary.400"}
            p={5}
            flexDir={"column"}
            borderRadius="var(--chakra-radii-2xl)"
          >
            <HStack mb={2} borderRadius="var(--chakra-radii-3xl)">
              <Image src={BulbIcon} w={"30px"} h={"25px"} />
              <Text fontWeight={600} fontSize={18} fontFamily={"Poppins"}>
                Support and Maintenance
              </Text>
            </HStack>
            <Text
              fontSize={{ sm: 16, lg: 18 }}
              fontWeight={400}
              fontFamily={"Poppins"}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
              aspernatur voluptate mollitia similique ex totam. Laudantium
              explicabo quaerat sint sequi natus atque quae ut id, in dicta,
              nemo incidunt necessitatibus!
            </Text>
          </Flex>
          <Flex
            bgColor={"secondary.400"}
            p={5}
            flexDir={"column"}
            borderRadius="var(--chakra-radii-3xl)"
          >
            <HStack mb={2}>
              <Image src={BulbIcon} w={"30px"} h={"25px"} />
              <Text fontWeight={600} fontSize={18} fontFamily={"Poppins"}>
                24/7 Chat Support
              </Text>
            </HStack>
            <Text
              fontSize={{ sm: 16, lg: 18 }}
              fontWeight={400}
              fontFamily={"Poppins"}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
              aspernatur voluptate mollitia similique ex totam. Laudantium
              explicabo quaerat sint sequi natus atque quae ut id, in dicta,
              nemo incidunt necessitatibus!
            </Text>
          </Flex>
          <Flex
            bgColor={"secondary.400"}
            p={5}
            flexDir={"column"}
            borderRadius="var(--chakra-radii-3xl)"
          >
            <HStack mb={2}>
              <Image src={BulbIcon} w={"30px"} h={"25px"} />

              <Text fontWeight={600} fontSize={18} fontFamily={"Poppins"}>
                Support and Maintenance
              </Text>
            </HStack>
            <Text
              fontSize={{ sm: 16, lg: 18 }}
              fontWeight={400}
              fontFamily={"Poppins"}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
              aspernatur voluptate mollitia similique ex totam. Laudantium
              explicabo quaerat sint sequi natus atque quae ut id, in dicta,
              nemo incidunt necessitatibus!
            </Text>
          </Flex>
        </VStack>
      </SimpleGrid>
    </VStack>
  );
};

export default QueriesForm;
