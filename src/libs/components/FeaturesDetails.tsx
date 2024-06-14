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
  Image,
  List,
  ListIcon,
} from "@chakra-ui/react";
import StarImage from "./../../assets/Star (1).png";

const FeaturesDetails: React.FC<any> = ({ navTo }) => {
  const features = [
    {
      heading: "Point of Sale (POS):",
      description:
        "Our intuitive POS system makes transactions a breeze, ensuring smooth and efficient checkout processes.",
    },
    {
      heading: "Desktop Application:",
      description:
        "Access Munshee offline with our desktop application, ensuring uninterrupted operations even without an internet connection.",
    },
    {
      heading: "Web Access:",
      description:
        " Empower your employees and manage your business from anywhere with secure web access to Munshee.",
    },
    {
      heading: "Mobile Apps:",
      description:
        "Conduct stock audits, access critical data, and stay connected with your business through our mobile apps for iOS and Android.",
    },
    {
      heading: "Phone and Chat Support:",
      description:
        "Our dedicated support team is always ready to assist you via phone or chat, ensuring you get the help you need when you need it.",
    },
    {
      heading: "E-commerce Integration:",
      description:
        "Seamlessly manage your online store and sync inventory across channels from within Munshee.",
    },
    {
      heading: "Social Media Management:",
      description:
        "Engage with your audience and promote your products on social media platforms, all from one centralized location.",
    },
  ];
  const benefits = [
    "Save time and reduce manual errors with automated processes",
    "Gain real-time insights into your business performance",
    "Improve inventory accuracy and optimize stock levels",
    "Enhance customer experience with faster checkouts and better service",
    "Boost employee productivity with user-friendly tools and remote access",
    "Increase online sales through integrated e-commerce and social media management",
    "Scale your business efficiently with a comprehensive, all-in-one solution",
  ];
  return (
    <Center>
      <VStack
        ref={navTo}
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
          mt={{ base: 20, sm: 18, md: 16, lg: 20, xl: 22, "2xl": 24 }}
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
          templateColumns={{
            base: "repeat(auto-fit, minmax(200px, 1fr))",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
        >
          <GridItem colSpan={{ base: 2, sm: 2, md: 1 }} w={"full"}>
            <Card p={8} borderRadius={"var(--chakra-radii-xl)"}>
              <Heading pb={6}>Features</Heading>
              <OrderedList spacing={3}>
                {features.map((feature) => (
                  <ListItem fontSize={{ sm: 12, md: 16, lg: 18 }}>
                    <Text fontWeight={"semibold"} as={"span"}>
                      {feature.heading}
                    </Text>
                    {feature.description}
                  </ListItem>
                ))}
              </OrderedList>
            </Card>
          </GridItem>
          <GridItem colSpan={{ base: 2, sm: 2, md: 1 }} w={"full"}>
            <Card p={8} borderRadius={"var(--chakra-radii-xl)"} h={"full"}>
              <Heading pb={6}>Benefits</Heading>
              <List>
                {benefits.map((feature) => (
                  <ListItem py={2} fontSize={{ sm: 12, md: 16, lg: 18 }}>
                    <ListIcon as={Image} src={StarImage} alt="star image" />
                    {feature}
                  </ListItem>
                ))}
              </List>
            </Card>
          </GridItem>
          <GridItem colSpan={2} w={"full"}>
            <Card p={8} borderRadius={"var(--chakra-radii-xl)"}>
              <Heading pb={4}>Why Choose Munshee?</Heading>
              <Text fontSize={{ sm: 12, md: 16, lg: 18 }}>
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
              <Text fontSize={{ sm: 12, md: 16, lg: 18 }}>
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
