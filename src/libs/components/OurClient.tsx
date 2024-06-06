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
        // bgColor={"rebeccapurple"}
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
        gap={0}
      >
        <GridItem>
          <Image src={Justuno} />
        </GridItem>
        <GridItem>
          <Image src={Tekyz} />
        </GridItem>
        <GridItem>
          <Image src={Photo} />
        </GridItem>
        <GridItem>
          <Image src={Encast} />
        </GridItem>
        <GridItem>
          <Image src={VV360} />
        </GridItem>
        <GridItem justifySelf={"center"}>
          <Image src={HireExpert} />
        </GridItem>
        <GridItem justifySelf={"center"}>
          <Image src={GreenMedicine} />
        </GridItem>
        <GridItem justifySelf={"center"}>
          <Image src={Amplify} />
        </GridItem>
      </Grid>
    </Card>
  );
};

export default OurClient;
// h={{ base: "full", sm: "200px" }}
// objectFit={{
//   sm: "contain",
//   md: "contain",
//   lg: "contain",
//   "2xl": "contain",
// }}
