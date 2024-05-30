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
      w={"full"}
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
        Our Clients
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
      <HStack flexWrap={"wrap"} w={"90%"}>
        <Image src={Justuno} h={"180px"} flex={1} />
        <Image src={Tekyz} h={"180px"} flex={1} />
        <Image src={Photo} h={"180px"} flex={1} />
        <Image src={Encast} h={"180px"} flex={1} />
        <Image src={VV360} h={"180px"} flex={1} />
        <Image src={HireExpert} h={"180px"} flex={1} />
        <Image src={GreenMedicine} h={"180px"} flex={1} />
        <Image src={Amplify} h={"180px"} flex={1} />
      </HStack>
    </Card>
  );
};

export default OurClient;
{
  /* </HStack>
      <HStack spacing={10}> */
}
// w={"300px"}
