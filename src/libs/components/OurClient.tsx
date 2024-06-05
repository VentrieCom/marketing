import { Card, HStack, Text, Image, Grid, GridItem } from "@chakra-ui/react";
import Justuno from "./../../assets/Justuno.png";
import Tekyz from "./../../assets/Tekyz.png";
import Photo from "./../../assets/Photo.net.png";
import Encast from "./../../assets/Encast.png";
import VV360 from "./../../assets/VV360.png";
import HireExpert from "./../../assets/HireExpert.png";
import GreenMedicine from "./../../assets/GreenMedicine.png";
import Amplify from "./../../assets/Amplify.png";
// import Ellipse from "./../../assets/Ellipse 2008.png";

const OurClient = () => {
  return (
    <Card
      w={"full"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={10}
      bgColor={"#0f161b"}
    >
      {/* <HStack
      pos={"absolute"}
      right={0}
      justifyContent={"end"}
      mt={{ base: 0, sm: -20, md: -28, lg: -28, "2xl": -28 }}
    >
      <Image
        src={Ellipse}
        w={{
          base: "100px",
          sm: "100px",
          md: "110px",
          lg: "130px",
          "2xl": "150px",
        }}
        transform={"rotate(180deg)"}
      />
    </HStack> */}
      <Text
        mt={{ base: 12, sm: 20, md: 20, lg: 32, xl: 42, "2xl": 28 }}
        fontWeight={700}
        fontFamily={"Roboto Slab"}
        textAlign={"center"}
        fontSize={60}
      >
        Our Clients
      </Text>
      <Text
        textAlign={"center"}
        fontSize={{ base: 14, sm: 18, md: 20, lg: 22 }}
        fontFamily={"Poppins"}
        fontWeight={400}
        w={{ base: "75%", sm: "75%", md: "75%", lg: "60%", "2xl": "40%" }}
        my={{ base: 2, sm: 4, md: 8, lg: 18 }}
      >
        Discover the distinguished names that have partnered with us - a
        testament to our commitment to excellence and success.
      </Text>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          "2xl": "repeat(4, 1fr)",
        }}
        w={{
          md: "calc(100vw - 200px)",
          lg: "calc(100vw - 200px)",
          "2xl": "calc(100vw - 360px)",
        }}
      >
        <GridItem justifySelf={"center"}>
          <Image
            src={Justuno}
            h={{ base: "full", sm: "200px" }}
            objectFit="contain"
          />
        </GridItem>
        <GridItem justifySelf={"center"}>
          <Image
            src={Tekyz}
            h={{ base: "full", sm: "200px" }}
            objectFit={{
              sm: "contain",
              md: "contain",
              lg: "contain",
              "2xl": "contain",
            }}
          />
        </GridItem>
        <GridItem justifySelf={"center"}>
          <Image
            src={Photo}
            h={{ base: "full", sm: "200px" }}
            objectFit={{
              sm: "contain",
              md: "contain",
              lg: "contain",
              "2xl": "contain",
            }}
          />
        </GridItem>
        <GridItem justifySelf={"center"}>
          <Image
            src={Encast}
            h={{ base: "full", sm: "200px" }}
            objectFit={{
              sm: "contain",
              md: "contain",
              lg: "contain",
              "2xl": "contain",
            }}
          />
        </GridItem>
        <GridItem justifySelf={"center"}>
          <Image
            src={VV360}
            h={{ base: "full", sm: "200px" }}
            objectFit={{
              sm: "contain",
              md: "contain",
              lg: "contain",
              "2xl": "contain",
            }}
          />
        </GridItem>
        <GridItem justifySelf={"center"}>
          <Image
            src={HireExpert}
            h={{ base: "full", sm: "200px" }}
            objectFit={{
              sm: "contain",
              md: "contain",
              lg: "contain",
              "2xl": "contain",
            }}
          />
        </GridItem>
        <GridItem justifySelf={"center"}>
          <Image
            src={GreenMedicine}
            h={{ base: "full", sm: "200px" }}
            objectFit={{
              sm: "contain",
              md: "contain",
              lg: "contain",
              "2xl": "contain",
            }}
          />
        </GridItem>
        <GridItem justifySelf={"center"}>
          <Image
            src={Amplify}
            h={{ base: "full", sm: "200px" }}
            objectFit={{
              sm: "contain",
              md: "contain",
              lg: "contain",
              "2xl": "contain",
            }}
          />
        </GridItem>
      </Grid>
    </Card>
  );
};

export default OurClient;
{
  /* <HStack
flexWrap={"wrap"}
w={{
  md: "calc(100vw - 200px)",
  lg: "calc(100vw - 200px)",
  "2xl": "calc(100vw - 360px)",
}}
mt={5}
> */
}
{
  /* </HStack> */
}
