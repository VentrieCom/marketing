import { VStack, HStack, Image, Stack, Heading } from "@chakra-ui/react";
import Ellipe from "./../../assets/Ellipse 2008.png";
import Groups from "./../../assets/Group 6867.png";
import ProductSec from "./ProductSec";
import ProductText from "./ProductText";
import StockText from "./StockText";
import StockSec from "./StockSec";
import AttendenceSec from "./AttendenceSec";
import AttendenceText from "./AttendenceText";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import QueriesForm from "./QueriesForm";
import PricePlan from "./PricePlan";

import DesignLine from "./../../assets/Design Line.png";
import FeaturesDetails from "./FeaturesDetails";

interface MyComponentProps {
  about: React.RefObject<HTMLDivElement>;
  features: React.RefObject<HTMLDivElement>;
  contact: React.RefObject<HTMLDivElement>;
}

const About: React.FC<MyComponentProps> = ({ about, features, contact }) => {
  return (
    <VStack bgColor={"secondary.900"} w={"full"}>
      <HStack
        pos={"relative"}
        w={"full"}
        justifyContent={"space-between"}
        my={{ base: 24, md: 32, lg: 20 }}
      >
        <Image
          pos={"absolute"}
          left={0}
          src={Ellipe}
          w={{
            base: "75px",
            sm: "80px",
            md: "100px",
            lg: "120px",
            xl: "120px",
            "2xl": "150px",
          }}
        />
        <Image
          src={DesignLine}
          zIndex={2}
          alt="design line"
          pos={"absolute"}
          top={{ md: -44, "2xl": -36 }}
          right={0}
        />
        <HStack w={"full"} pb={{ "2xl": 24 }}>
          <Heading
            as={"h2"}
            ref={about}
            textAlign={"center"}
            w={"full"}
            fontSize={{ base: 32, sm: 38, md: 40, lg: 48, "2xl": 58 }}
            mt={{ md: 0, lg: "10px", "2xl": "60px" }}
            fontWeight={700}
            zIndex={12}
          >
            About Us
          </Heading>
        </HStack>
        <Image
          alignSelf={"flex-start"}
          src={Groups}
          pos={"absolute"}
          top={{ base: -20, sm: -20, md: -12, lg: -4 }}
          right={0}
          w={{
            base: "75px",
            sm: "90px",
            md: "100px",
            lg: "110px",
            xl: "120px",
            "2xl": "150px",
          }}
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
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          "2xl": "row",
        }}
        justifyContent={"space-between"}
        spacing={{ base: 4, md: 10, lg: 14, xl: 20 }}
      >
        <ProductSec />
        <ProductText />
      </Stack>
      <Stack
        zIndex={2}
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
        spacing={{ base: 12, md: 10, lg: 14, xl: 20 }}
        py={{ base: 24, md: 40 }}
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
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          "2xl": "row",
        }}
        justifyContent={"space-between"}
        spacing={{ md: 10, lg: 14, xl: 20 }}
        mt={{ base: 0 }}
        py={{ sm: 10, "2xl": 24 }}
      >
        <AttendenceSec />
        <AttendenceText />
      </Stack>
      <FeaturesDetails navTo={features} />
      <PricePlan />
      <QueriesForm navTo={contact} />
      <Subscribe />
      <Footer />
    </VStack>
  );
};

export default About;
