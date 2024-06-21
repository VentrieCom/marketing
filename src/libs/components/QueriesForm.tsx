/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowForwardIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Heading,
  VStack,
  Text,
  HStack,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Button,
  Image,
  Stack,
  SimpleGrid,
  useToast,
  FormControl,
  FormErrorMessage,
  Center,
} from "@chakra-ui/react";
import EllipseGreen from "./../../assets/EllipseGreen 2010.png";
import BulbIcon from "./../../assets/streamline_ai-technology-spark.png";
import DesignLine from "./../../assets/Design Line.png";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import SupportImg from "./../../assets/Images/Support.png";
import TroubleshootingImg from "./../../assets/Images/troubleshooting.png";
import { Field, Form, Formik } from "formik";

const customPlaceholderStyle = {
  borderRadius: {
    base: "var(--chakra-radii-lg)",
    sm: "var(--chakra-radii-lg)",
    md: "var(--chakra-radii-lg)",
    lg: "var(--chakra-radii-lg)",
  },
  fontSize: { base: 18, sm: 20, md: 22 },
  "::placeholder": {
    fontSize: { base: 18, sm: 22 },
    color: "gray.500",
  },
};

interface CustomerSupportData {
  name?: string;
  surName?: string;
  email?: string;
  phoneNumber?: string;
  complain?: string;
}

const QueriesForm: React.FC<{ navTo: any }> = ({ navTo }) => {
  const [isMailSent, setIsMailSent] = useState(false);
  const toast = useToast();
  let initCustomerObj = {
    name: "",
    surName: "",
    email: "",
    phoneNumber: "",
    complain: "",
  };
  const form: any = useRef();

  const sendEmail = (e: any) => {
    setIsMailSent(true);
    emailjs
      .sendForm("service_w0egw75", "template_wajqz9i", form.current, {
        publicKey: "yn6idBxRBXrYjNWpk",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsMailSent(false);
          toast({
            title: "Email Sent Successfully",
            status: "success",
            duration: 9000,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsMailSent(false);
          toast({
            title: "Email Failed",
            description: error.text,
            status: "error",
            duration: 9000,
          });
        }
      );
  };

  return (
    <VStack w={"full"} ref={navTo}>
      <Image
        src={DesignLine}
        alt="Design line"
        w={{ base: "380px", sm: "480px", md: "540px", lg: "620px" }}
        left={0}
        pos={"absolute"}
      />
      <HStack
        pos={"absolute"}
        zIndex={1}
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
        mt={{ base: 2, md: 12, lg: 24, "2xl": 20 }}
        mb={20}
        w={{
          base: "calc(100vw - 50px)",
          sm: "calc(100vw - 100px)",
          md: "calc(100vw - 200px)",
          lg: "calc(100vw - 200px)",
          "2xl": "calc(100vw - 200px)",
        }}
      >
        <Heading
          as={"h2"}
          fontWeight={700}
          fontSize={{ base: 40, sm: 44, md: 48, lg: 54, "2xl": 60 }}
          mb={{ base: 4, md: 2, lg: 3, xl: 4, "2xl": 5 }}
          zIndex={4}
        >
          Got a question or a few?
        </Heading>
        <Text
          textAlign={"center"}
          color={"secondary.200"}
          fontSize={{ base: 20, sm: 22, md: "25px", xl: 24 }}
          fontWeight={400}
          zIndex={2}
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
        <VStack zIndex={4}>
          <Formik
            initialValues={initCustomerObj}
            onSubmit={(event: CustomerSupportData, { resetForm }) => {
              sendEmail(event);
              resetForm();
            }}
            validate={(values) => {
              const errors: any = {};
              const { name, surName, phoneNumber, complain, email } = values;

              if (!name) {
                errors.name = "Required";
              }

              if (!surName) {
                errors.surName = "Required";
              }

              if (!complain) {
                errors.complain = "Required";
              }

              if (!email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
              ) {
                errors.email = "Invalid email address";
              }

              if (!phoneNumber) {
                errors.phoneNumber = "Required";
              } else if (
                !/^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/i.test(phoneNumber)
              ) {
                errors.phoneNumber = "Invalid Phone Number";
              }
              return errors;
            }}
          >
            {({ isSubmitting }) => (
              <Form ref={form}>
                <Stack spacing={8}>
                  <Stack
                    spacing={{ base: 8, sm: 5, lg: 8, xl: 5 }}
                    direction={{
                      base: "column",
                      sm: "row",
                      md: "row",
                      lg: "column",
                      xl: "row",
                    }}
                  >
                    <Field name="name">
                      {({ field, form }: any) => (
                        <FormControl
                          isInvalid={form.errors.name && form.touched.name}
                        >
                          <Input
                            {...field}
                            py={{ base: 7, lg: 8 }}
                            border={"2px solid #2C3B46"}
                            sx={customPlaceholderStyle}
                            color={"blue.300"}
                            placeholder="Name"
                          />
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="surName">
                      {({ field, form }: any) => {
                        console.log(field);
                        console.log(form.errors.surName);

                        return (
                          <FormControl
                            isInvalid={
                              form.errors.surName && form.touched.surName
                            }
                          >
                            <Input
                              {...field}
                              py={{ base: 7, lg: 8 }}
                              placeholder="Surname"
                              border={"2px solid #2C3B46"}
                              sx={customPlaceholderStyle}
                              color={"blue.300"}
                            />
                            <FormErrorMessage>
                              {form.errors.surName}
                            </FormErrorMessage>
                          </FormControl>
                        );
                      }}
                    </Field>
                  </Stack>
                  <Field name="email">
                    {({ field, form }: any) => (
                      <FormControl
                        // py={4}
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <InputGroup>
                          <InputLeftElement
                            as={Center}
                            h={"full"}
                            pointerEvents="none"
                          >
                            <EmailIcon
                              color="gray.700"
                              fontSize={"1.2em"}
                              ml={2}
                            />
                          </InputLeftElement>
                          <Input
                            {...field}
                            placeholder="Your Email"
                            py={{ base: 7, lg: 8 }}
                            border={"2px solid #2C3B46"}
                            sx={customPlaceholderStyle}
                            color={"blue.300"}
                          />
                        </InputGroup>
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="phoneNumber">
                    {({ field, form }: any) => {
                      return (
                        <FormControl
                          isInvalid={
                            form.errors.phoneNumber && form.touched.phoneNumber
                          }
                        >
                          <InputGroup>
                            <InputLeftElement
                              as={Center}
                              h={"full"}
                              pointerEvents="none"
                            >
                              <PhoneIcon color="gray.700" ml={2} />
                            </InputLeftElement>
                            <Input
                              py={{ base: 7, lg: 8 }}
                              {...field}
                              placeholder="Your Phone Number"
                              border={"2px solid #2C3B46"}
                              sx={customPlaceholderStyle}
                              color={"blue.300"}
                            />
                          </InputGroup>
                          <FormErrorMessage>
                            {form.errors.phoneNumber}
                          </FormErrorMessage>
                        </FormControl>
                      );
                    }}
                  </Field>
                  <Field name="complain">
                    {({ field, form }: any) => (
                      <FormControl
                        // py={4}
                        isInvalid={
                          form.errors.complain && form.touched.complain
                        }
                      >
                        <Textarea
                          {...field}
                          h={"160px"}
                          maxH={"200px"}
                          placeholder="How can we help?"
                          border={"2px solid #2C3B46"}
                          sx={customPlaceholderStyle}
                          color={"blue.300"}
                        />
                        <FormErrorMessage>
                          {form.errors.complain}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    w={{
                      base: "full",
                      sm: "full",
                      md: "initial",
                      lg: "initial",
                      "2xl": "40%",
                    }}
                    rightIcon={
                      <ArrowForwardIcon ml={3} color={"secondary.400"} />
                    }
                    px={{ base: 6, sm: 20 }}
                    py={{ base: 6, sm: 6 }}
                    fontFamily={"poppins"}
                    fontWeight={400}
                    letterSpacing={2}
                    isLoading={isMailSent}
                  >
                    Send Message
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </VStack>
        <VStack spacing={4}>
          <Flex
            bgColor={"secondary.400"}
            py={8}
            px={6}
            flexDir={"column"}
            borderRadius={{
              base: "var(--chakra-radii-2xl)",
              md: "var(--chakra-radii-3xl)",
            }}
          >
            <HStack mb={2} borderRadius="var(--chakra-radii-3xl)">
              <Image src={BulbIcon} w={"30px"} h={"25px"} />
              <Text fontWeight={600} fontSize={18}>
                Support and Maintenance
              </Text>
            </HStack>
            <Text fontSize={{ sm: 16, lg: 18 }} fontWeight={400}>
              Munshee provides round-the-clock support and maintenance to ensure
              uninterrupted service and optimal performance.
            </Text>
          </Flex>
          <Flex
            bgColor={"secondary.400"}
            py={8}
            px={6}
            flexDir={"column"}
            borderRadius={{
              base: "var(--chakra-radii-2xl)",
              md: "var(--chakra-radii-3xl)",
            }}
          >
            <HStack mb={2}>
              <Image src={SupportImg} w={"25px"} h={"25px"} />
              <Text fontWeight={600} fontSize={18}>
                24/7 Chat Support
              </Text>
            </HStack>
            <Text fontSize={{ sm: 16, lg: 18 }} fontWeight={400}>
              Munshee delivers unwavering 24/7 assistance, ensuring expert
              support is always accessible, helping your business maintain
              seamless operations.
            </Text>
          </Flex>
          <Flex
            bgColor={"secondary.400"}
            py={8}
            px={6}
            flexDir={"column"}
            borderRadius={{
              base: "var(--chakra-radii-2xl)",
              md: "var(--chakra-radii-3xl)",
            }}
          >
            <HStack mb={2}>
              <Image src={TroubleshootingImg} w={"30px"} h={"30px"} />
              <Text fontWeight={600} fontSize={18}>
                Troubleshooting Guides
              </Text>
            </HStack>
            <Text fontSize={{ sm: 16, lg: 18 }} fontWeight={400}>
              Munshee provides concise troubleshooting guides, enabling quick
              resolution of technical issues, ensuring uninterrupted
              productivity
            </Text>
          </Flex>
        </VStack>
      </SimpleGrid>
    </VStack>
  );
};

export default QueriesForm;
