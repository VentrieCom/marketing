import { EmailIcon, PhoneIcon, SunIcon } from "@chakra-ui/icons";
import {
  Heading,
  VStack,
  Text,
  HStack,
  Flex,
  FormControl,
  Input,
  FormErrorMessage,
  Textarea,
  Button,
  Box,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

const QueriesForm: React.FC = () => {
  return (
    <VStack>
      <VStack my={20}>
        <Heading fontFamily={"roboto-slab"} size={"2xl"} mb={3}>
          Got a question or a few?
        </Heading>
        <Text color={"secondary.200"} fontSize={24}>
          If you have any question, drop us a note. Fill out the below form and
          we will get it.
        </Text>
      </VStack>
      <HStack w={"80%"} spacing={20}>
        <VStack w={"50%"}>
          <Box w="100%">
            <form>
              <HStack spacing={5}>
                <FormControl mb={8}>
                  <Input
                    type="text"
                    size="lg"
                    h={"60px"}
                    fontSize={"28px"}
                    placeholder="First Name"
                    color="blue.300"
                  />
                  <FormErrorMessage>Enter First Name</FormErrorMessage>
                </FormControl>
                <FormControl mb={8}>
                  <Input
                    type="text"
                    size={"lg"}
                    h={"60px"}
                    fontSize={"28px"}
                    placeholder="Last Name"
                    color={"blue.300"}
                  />
                  <FormErrorMessage>Enter Last Name</FormErrorMessage>
                </FormControl>
              </HStack>

              <FormControl mb={8}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <EmailIcon
                      boxSize={6}
                      mt={5}
                      ml={3}
                      color={"secondary.300"}
                    />
                  </InputLeftElement>
                  <Input
                    type="email"
                    size="lg"
                    h={"60px"}
                    fontSize={"28px"}
                    placeholder="Your Email"
                    color={"blue.300"}
                    isRequired
                  />
                </InputGroup>
                <FormErrorMessage>Enter Correct Name</FormErrorMessage>
              </FormControl>
              <FormControl mb={8}>
                <InputGroup>
                  <InputLeftElement>
                    <PhoneIcon
                      boxSize={5}
                      mt={5}
                      ml={3}
                      color={"secondary.300"}
                    />
                  </InputLeftElement>
                  <Input
                    type="phone"
                    size={"lg"}
                    h={"60px"}
                    fontSize={"28px"}
                    placeholder="Phone Number"
                    color={"blue.300"}
                  />
                </InputGroup>
                <FormErrorMessage>Enter Correct Number</FormErrorMessage>
              </FormControl>

              <FormControl mb={16}>
                <Textarea
                  size={"lg"}
                  h={"120px"}
                  fontSize={"28px"}
                  color={"blue.300"}
                  placeholder="How can we help?"
                />
                <FormErrorMessage>Enter your Message</FormErrorMessage>
              </FormControl>
              <Button rightIcon={<EmailIcon />} type="submit" size={"lg"}>
                Send Message
              </Button>
            </form>
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
              <SunIcon boxSize={8} mr={4} />
              <Text fontWeight={"semibold"}>Support and Maintenance</Text>
            </HStack>
            <Text>
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
              <SunIcon boxSize={8} mr={4} />
              <Text fontWeight={"semibold"}>24/7 Chat Support</Text>
            </HStack>
            <Text>
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
              <SunIcon boxSize={8} mr={4} />
              <Text fontWeight={"semibold"}>Support and Maintenance</Text>
            </HStack>
            <Text>
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
