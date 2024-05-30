import { Card, HStack, Image, Text } from "@chakra-ui/react";
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
    <Card bgColor={"#0f161b"} w={"100%"} h={"100%"} pt={290}>
      <HStack w={"100%"} justifyContent={"space-between"}>
        <Image src={Ellipe} w={"150px"} mt={20} />
        <HStack>
          <Text
            textAlign={"center"}
            w={"100%"}
            fontFamily={"Roboto-Slab"}
            fontSize={"60px"}
            marginTop={"210px"}
            fontWeight={700}
          >
            About Us
          </Text>
        </HStack>
        <Image src={Groups} w={"150px"} marginBottom={"200px"} />
      </HStack>
      <HStack w={"100%"} justifyContent={"space-between"} spacing={20}>
        <ProductSec />
        <ProductText />
      </HStack>
      <HStack w={"100%"} justifyContent={"space-between"} spacing={20} py={60}>
        <StockText />
        <StockSec />
      </HStack>
      <HStack w={"100%"} justifyContent={"space-between"} spacing={20} py={40}>
        <AttendenceSec />
        <AttendenceText />
      </HStack>
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
