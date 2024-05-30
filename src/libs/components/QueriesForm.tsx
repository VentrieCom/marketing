import {
  ArrowForwardIcon,
  EmailIcon,
  PhoneIcon,
  SunIcon,
} from "@chakra-ui/icons";
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

const customPlaceholderStyle = {
  fontSize: "25px",
  "::placeholder": {
    fontSize: "20px", // Adjust the size as needed
    color: "gray.500", // Optional: adjust the color if needed
  },
};

const QueriesForm: React.FC = () => {
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
      <HStack w={"80%"} spacing={20}>
        <VStack w={"50%"} mb={10}>
          <Box w="100%">
            <HStack>
              <Input
                placeholder="Name"
                py={10}
                w={"600px"}
                border={"2px solid #2C3B46"}
                style={{ paddingLeft: "20px" }}
                sx={customPlaceholderStyle}
                color={"blue.300"}
              />
              <Input
                placeholder="Surname"
                py={10}
                w={"600px"}
                border={"2px solid #2C3B46"}
                style={{ paddingLeft: "20px" }}
                sx={customPlaceholderStyle}
                color={"blue.300"}
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
                />
              </InputGroup>
              <Textarea
                placeholder="How can we help?"
                size="lg"
                border={"2px solid #2C3B46"}
                style={{ paddingLeft: "20px" }}
                sx={customPlaceholderStyle}
                color={"blue.300"}
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
            >
              Send Message
            </Button>
          </Box>
        </VStack>
        <VStack w={"50%"} spacing={6}>
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
