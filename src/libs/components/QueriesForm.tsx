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
} from "@chakra-ui/react";
import EllipseGreen from "./../../assets/EllipseGreen 2010.png";
import BulbIcon from "./../../assets/streamline_ai-technology-spark.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const customPlaceholderStyle = {
  fontSize: "25px",
  "::placeholder": {
    fontSize: "20px",
    color: "gray.500",
  },
};

const QueriesForm: React.FC = () => {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

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
    <VStack>
      <HStack w={"100%"} justifyContent={"end"} mb={-55}>
        <Image src={EllipseGreen} w={"150px"} />
      </HStack>
      <VStack my={10}>
        <Heading
          fontFamily={"Roboto-Slab"}
          fontWeight={700}
          fontSize={60}
          mb={2}
        >
          Got a question or a few?
        </Heading>
        <Text
          color={"secondary.200"}
          fontSize={25}
          fontFamily={"Poppins"}
          fontWeight={400}
        >
          If you have any question, drop us a note. Fill out the below form and
          we will get it.
        </Text>
      </VStack>
      <HStack w={"100%"}>
        <form ref={form} id="sendEmail" onSubmit={sendEmail}>
          <VStack w={"60%"} mb={10}>
            <Box w="100%" ml={40}>
              <HStack>
                <Input
                  placeholder="Name"
                  py={10}
                  w={"600px"}
                  border={"2px solid #2C3B46"}
                  style={{ paddingLeft: "20px" }}
                  sx={customPlaceholderStyle}
                  color={"blue.300"}
                  name="user_name"
                />
                <Input
                  placeholder="Surname"
                  py={10}
                  w={"600px"}
                  border={"2px solid #2C3B46"}
                  style={{ paddingLeft: "20px" }}
                  sx={customPlaceholderStyle}
                  color={"blue.300"}
                  name="user_surname"
                />
              </HStack>
              <VStack py={5} spacing={5}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" mt={6}>
                    <EmailIcon color="gray.700" fontSize={"1.3em"} ml={2} />
                  </InputLeftElement>
                  <Input
                    type="tel"
                    placeholder="Your Email"
                    py={10}
                    border={"2px solid #2C3B46"}
                    sx={customPlaceholderStyle}
                    color={"blue.300"}
                    name="user_email"
                  />
                </InputGroup>

                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.700"
                    fontSize="1.3em"
                    mt={5}
                  >
                    <PhoneIcon color="gray.700" ml={2} />
                  </InputLeftElement>
                  <Input
                    placeholder="Phone Number"
                    py={10}
                    border={"2px solid #2C3B46"}
                    sx={customPlaceholderStyle}
                    color={"blue.300"}
                    name="user_phone"
                  />
                </InputGroup>
                <Textarea
                  placeholder="How can we help?"
                  size="lg"
                  border={"2px solid #2C3B46"}
                  style={{ paddingLeft: "20px" }}
                  sx={customPlaceholderStyle}
                  color={"blue.300"}
                  name="description"
                />
              </VStack>
              <Button
                rightIcon={<ArrowForwardIcon ml={3} color={"secondary.400"} />}
                type="submit"
                size={"lg"}
                px={10}
                fontWeight={400}
                fontFamily={"poppins"}
                letterSpacing={2}
                form={"sendEmail"}
              >
                Send Message
              </Button>
            </Box>
          </VStack>
        </form>
        <VStack w={"50%"}>
          <Flex
            bgColor={"secondary.400"}
            p={5}
            flexDir={"column"}
            borderRadius="var(--chakra-radii-xl)"
          >
            <HStack mb={2}>
              <Image src={BulbIcon} w={"30px"} h={"25px"} />
              <Text fontWeight={600} fontSize={18} fontFamily={"Poppins"}>
                Support and Maintenance
              </Text>
            </HStack>
            <Text fontSize={18} fontWeight={400} fontFamily={"Poppins"}>
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
            borderRadius="var(--chakra-radii-xl)"
          >
            <HStack mb={2}>
              <Image src={BulbIcon} w={"30px"} h={"25px"} />
              <Text fontWeight={600} fontSize={18} fontFamily={"Poppins"}>
                24/7 Chat Support
              </Text>
            </HStack>
            <Text fontSize={18} fontWeight={400} fontFamily={"Poppins"}>
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
            borderRadius="var(--chakra-radii-xl)"
          >
            <HStack mb={2}>
              <Image src={BulbIcon} w={"30px"} h={"25px"} />

              <Text fontWeight={600} fontSize={18} fontFamily={"Poppins"}>
                Support and Maintenance
              </Text>
            </HStack>
            <Text fontSize={18} fontWeight={400} fontFamily={"Poppins"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
              aspernatur voluptate mollitia similique ex totam. Laudantium
              explicabo quaerat sint sequi natus atque quae ut id, in dicta,
              nemo incidunt necessitatibus!
            </Text>
          </Flex>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default QueriesForm;
