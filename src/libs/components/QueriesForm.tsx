import { EmailIcon, SunIcon } from "@chakra-ui/icons";
import {
  Heading,
  VStack,
  Text,
  HStack,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
  Button,
  Box,
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
              <FormControl mb={8}>
                <FormLabel fontSize={24}>Full Name</FormLabel>
                <Input variant={"flushed"} type="text" />
                <FormErrorMessage>Enter Full Name</FormErrorMessage>
              </FormControl>
              <FormControl mb={8}>
                <FormLabel fontSize={24}>Email</FormLabel>
                <Input variant={"flushed"} type="email" isRequired />
                <FormErrorMessage>Enter Correct Name</FormErrorMessage>
              </FormControl>
              <FormControl mb={8}>
                <FormLabel fontSize={24}>Phone</FormLabel>
                <Input variant={"flushed"} type="phone" />
                <FormErrorMessage>Enter Correct Number</FormErrorMessage>
              </FormControl>
              <FormControl mb={16}>
                <FormLabel fontSize={24}>How Can we help you?</FormLabel>
                <Textarea variant={"flushed"} />
                <FormErrorMessage>Enter your Message</FormErrorMessage>
              </FormControl>
              <Button
                rightIcon={<EmailIcon />}
                type="submit"
                size={"lg"}
              >
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
