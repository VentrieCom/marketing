import { Card, HStack, Image, Text, Stack } from "@chakra-ui/react";
import Ellipe from "./../../assets/Ellipse 2008.png";
import Groups from "./../../assets/Group 6867.png";
import ProductSec from "./ProductSec";
import ProductText from "./ProductText";
import StockText from "./StockText";
import StockSec from "./StockSec";
import AttendenceSec from "./AttendenceSec";
import AttendenceText from "./AttendenceText";
import OurClient from "./OurClient";
import Testimonials from "./Testimonials";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
// import FAQ from "./FAQ";
import FAQs from "./FAQs";
import QueriesForm from "./QueriesForm";

const About: React.FC = () => {
  return (
    <Card bgColor={"secondary.900"} w={"full"} h={"full"}>
      <HStack w={"100%"} justifyContent={"space-between"}>
        <Image
          src={Ellipe}
          w={{
            sm: "100px",
            md: "100px",
            lg: "100px",
            xl: "120px",
            "2xl": "150px",
          }}
        />
        <HStack>
          <Text
            textAlign={"center"}
            w={"full"}
            fontFamily={"Roboto-Slab"}
            fontSize={{ sm: 42, md: 48, lg: 48, "2xl": 58 }}
            mt={{ md: 0, lg: "10px", "2xl": "60px" }}
            fontWeight={700}
          >
            About Us
          </Text>
        </HStack>
        <Image src={Groups} w={"150px"} marginBottom={"200px"} />
      </HStack>
      {/* TODO : make ...Sec & ...Text Responsive */}
      <Stack
        w={"full"}
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          "2xl": "row",
        }}
        justifyContent={"space-between"}
      >
        <ProductSec />
        <ProductText />
      </Stack>
      <Stack
        w={"full"}
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          "2xl": "row",
        }}
        justifyContent={"space-between"}
        py={60}
      >
        <StockText />
        <StockSec />
      </Stack>
      <Stack
        w={"full"}
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          "2xl": "row",
        }}
        justifyContent={"space-between"}
        py={30}
      >
        <AttendenceSec />
        <AttendenceText />
      </Stack>
      <OurClient />
      <Testimonials />
      <FAQs />
      <QueriesForm />
      <Subscribe />
      <Footer />
    </Card>
  );
};

export default About;
