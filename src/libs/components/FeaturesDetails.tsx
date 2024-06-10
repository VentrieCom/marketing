import {
  Center,
  Heading,
  VStack,
  Text,
  Grid,
  GridItem,
  OrderedList,
  ListItem,
  Card,
  HStack,
  Image,
} from "@chakra-ui/react";
import StarImage from "./../../assets/Star (1).png";

const FeaturesDetails: React.FC = () => {
  const benefits = [
    "Save time and reduce manual errors with automated processes",
    "Gain real-time insights into your business performance",
    "Improve inventory accuracy and optimize stock levels",
    "Enhance customer experience with faster checkouts and better service",
    "Boost employee productivity with user-friendly tools and remote access",
    "Increase online sales through integrated e-commerce and social media management",
    "Scale your business efficiently with a comprehensive, all-in-one solution",
  ];
  const features = [
    "At Munshee, we understand the unique challenges faced by retailers. Our software is built with your needs in mind, offering a tailored solution that adapts to your business requirements. With Munshee, you can streamline your operations, make data-driven decisions, and unlock the full potential of your retail business.",
    "Ready to transform your retail business? Sign up for Munshee today and experience the difference our all-in-one solution can make. Contact our sales team to schedule a demo or to learn more about how Munshee can help your business thrive.",
  ];
  return (
    <Center>
      <VStack
        // bgColor={"firebrick"}
        w={{
          base: "calc(100vw - 100px)",
          sm: "calc(100vw - 100px)",
          md: "calc(100vw - 200px)",
          lg: "calc(100vw - 200px)",
          "2xl": "calc(100vw - 200px)",
        }}
      >
        <Heading
          as={"h2"}
          textAlign={"center"}
          w={"full"}
          fontSize={{ base: 28, sm: 34, md: 38, lg: 44, "2xl": 56 }}
          mt={{ md: 12, lg: 18, "2xl": 24 }}
          fontWeight={700}
          zIndex={12}
        >
          Introducing Munshee: Your All-in-One Retail Management Solution
        </Heading>
        <Text
          textAlign={"center"}
          fontSize={{ base: 16, sm: 16, md: 18, lg: 20, xl: 20, "2xl": 20 }}
          py={{ base: 4, sm: 4, md: 6, lg: 8, "2xl": 6 }}
        >
          Welcome to Munshee, the comprehensive mini ERP designed specifically
          for retailers. Our powerful software streamlines your business
          operations, enabling you to focus on what matters most: growing your
          business and serving your customers.
        </Text>
        <Grid
          gap={4}
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
        >
          <GridItem colSpan={{ base: 2, sm: 2, md: 1 }}>
            <Card p={8}>
              <Heading pb={6}>Features</Heading>
              <OrderedList spacing={3}>
                <ListItem>
                  Point of Sale (POS): Our intuitive POS system makes
                  transactions a breeze, ensuring smooth and efficient checkout
                  processes.
                </ListItem>
                <ListItem>
                  Desktop Application: Access Munshee offline with our desktop
                  application, ensuring uninterrupted operations even without an
                  internet connection.
                </ListItem>
                <ListItem>
                  Web Access: Empower your employees and manage your business
                  from anywhere with secure web access to Munshee.
                </ListItem>
                <ListItem>
                  Mobile Apps: Conduct stock audits, access critical data, and
                  stay connected with your business through our mobile apps for
                  iOS and Android.
                </ListItem>
                <ListItem>
                  Phone and Chat Support: Our dedicated support team is always
                  ready to assist you via phone or chat, ensuring you get the
                  help you need when you need it.
                </ListItem>
                <ListItem>
                  E-commerce Integration: Seamlessly manage your online store
                  and sync inventory across channels from within Munshee.
                </ListItem>
                <ListItem>
                  Social Media Management: Engage with your audience and promote
                  your products on social media platforms, all from one
                  centralized location.
                </ListItem>
              </OrderedList>
            </Card>
          </GridItem>
          <GridItem colSpan={{ base: 2, sm: 2, md: 1 }}>
            <Card p={8} h={"full"}>
              <Heading pb={6}>Benefits</Heading>
              {benefits.map((feature) => (
                <HStack py={2}>
                  <Image src={StarImage} boxSize={4} mr={2} />
                  <Text>{feature}</Text>
                </HStack>
              ))}
            </Card>
          </GridItem>
          <GridItem colSpan={2}>
            <Card p={8}>
              <Heading pb={4}>Why Choose Munshee?</Heading>
              <Text>
                At Munshee, we understand the unique challenges faced by
                retailers. Our software is built with your needs in mind,
                offering a tailored solution that adapts to your business
                requirements. With Munshee, you can streamline your operations,
                make data-driven decisions, and unlock the full potential of
                your retail business.
              </Text>
              <Text fontWeight={"semibold"} pt={8} pb={2} fontSize={24}>
                Get Started Today
              </Text>
              <Text>
                At Munshee, we understand the unique challenges faced by
                retailers. Our software is built with your needs in mind,
                offering a tailored solution that adapts to your business
                requirements. With Munshee, you can streamline your operations,
                make data-driven decisions, and unlock the full potential of
                your retail business.
              </Text>
            </Card>
          </GridItem>
        </Grid>
      </VStack>
    </Center>
  );
};
export default FeaturesDetails;
