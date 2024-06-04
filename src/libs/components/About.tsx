import { VStack, HStack, Image, Text, Stack } from "@chakra-ui/react";
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
import PricePlan from "./PricePlan";

const About: React.FC = () => {
  return (
    <VStack bgColor={"secondary.900"} w={"full"} mt={20}>
      <HStack w={"full"} justifyContent={"space-between"} mb={28}>
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
        <Image
          src={Groups}
          w={"150px"}
          marginBottom={"200px"}
          onClick={() => {}}
        />
      </HStack>
      <Stack
        w={{
          base: "calc(100vw - 100px)",
          sm: "calc(100vw - 100px)",
          md: "calc(100vw - 100px)",
          xl: "calc(100vw - 200px)",
          "2xl": "calc(100vw - 200px)",
        }}
        // bgColor={"rebeccapurple"}
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          "2xl": "row",
        }}
        justifyContent={"space-between"}
        spacing={{ md: 10, lg: 14, xl: 20 }}
      >
        <ProductSec />
        <ProductText />
      </Stack>
      <Stack
        w={{
          base: "calc(100vw - 100px)",
          sm: "calc(100vw - 100px)",
          md: "calc(100vw - 100px)",
          xl: "calc(100vw - 200px)",
          "2xl": "calc(100vw - 200px)",
        }}
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          "2xl": "row",
        }}
        justifyContent={"space-between"}
        mt={{ sm: 32, md: 36, lg: 36 }}
        spacing={{ md: 10, lg: 14, xl: 20 }}
        py={40}
      >
        <StockText />
        <StockSec />
      </Stack>
      <Stack
        w={{
          base: "calc(100vw - 100px)",
          sm: "calc(100vw - 100px)",
          md: "calc(100vw - 100px)",
          xl: "calc(100vw - 200px)",
          "2xl": "calc(100vw - 200px)",
        }}
        // bgColor={"rebeccapurple"}
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          "2xl": "row",
        }}
        justifyContent={"space-between"}
        spacing={{ md: 10, lg: 14, xl: 20 }}
        mt={{ base: 44 }}
        py={10}
      >
        <AttendenceSec />
        <AttendenceText />
      </Stack>
      <OurClient />
      <Testimonials />
      <FAQs />
      <PricePlan />
      <QueriesForm />
      <Subscribe />
      <Footer />
    </VStack>
  );
};

export default About;
