import { Card, HStack, Text, Image } from "@chakra-ui/react";
import Justuno from "./../../assets/Justuno.png";
import Tekyz from "./../../assets/Tekyz.png";
import Photo from "./../../assets/Photo.net.png";
import Encast from "./../../assets/Encast.png";
import VV360 from "./../../assets/VV360.png";
import HireExpert from "./../../assets/HireExpert.png";
import GreenMedicine from "./../../assets/GreenMedicine.png";
import Amplify from "./../../assets/Amplify.png";
import Ellipse from "./../../assets/Ellipse 2008.png";

const OurClient = () => {
  return (
    <Card
      w={"100%"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={10}
      bgColor={"#0f161b"}
    >
      <HStack w={"100%"} justifyContent={"end"} mt={-40}>
        <Image src={Ellipse} w={"150px"} transform={"rotate(180deg)"} />
      </HStack>
      <Text
        fontSize={60}
        fontWeight={700}
        fontFamily={"Roboto-Slab"}
        textAlign={"center"}
      >
        Our Client
      </Text>
      <Text
        textAlign={"center"}
        fontSize={20}
        fontFamily={"Poppins"}
        fontWeight={400}
        w={"500px"}
        mt={4}
      >
        Lorem ipsum dolor sit amet consectetur. Imperdiet laoreet odio eu elit
        sed odio. Blandit.
      </Text>
      <HStack spacing={10} my={10}>
        <Image src={Justuno} w={"250px"} h={"100px"} />
        <Image src={Tekyz} w={"250px"} h={"100px"} />
        <Image src={Photo} w={"250px"} h={"100px"} />
        <Image src={Encast} w={"250px"} h={"100px"} />
      </HStack>
      <HStack spacing={10}>
        <Image src={VV360} w={"250px"} h={"100px"} />
        <Image src={HireExpert} w={"250px"} h={"100px"} />
        <Image src={GreenMedicine} w={"250px"} h={"100px"} />
        <Image src={Amplify} w={"250px"} h={"100px"} />
      </HStack>
    </Card>
  );
};

export default OurClient;
