import { Card, HStack, Text, Image  } from "@chakra-ui/react";
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
        mt={{ base: 24, sm: 20, md: 20, lg: 32, xl: 42, "2xl": 48 }}
        fontWeight={700}
        fontFamily={"Roboto-Slab"}
        textAlign={"center"}
      >
        Our Clients
      </Text>
      <Text
        textAlign={"center"}
        fontSize={{ base: 14, sm: 18, md: 20, lg: 22 }}
        fontFamily={"Poppins"}
        fontWeight={400}
        w={{ base: "75%", sm: "75%", md: "75%", lg: "60%", "2xl": "35%" }}
        my={{ base: 2, sm: 4, md: 8, lg: 18 }}
      >
        Lorem ipsum dolor sit amet consectetur. Imperdiet laoreet odio eu elit
        sed odio. Blandit.
      </Text>
      <HStack
        flexWrap={"wrap"}
        //  w={"90%"}
        w={{
          md: "calc(100vw - 200px)",
          lg: "calc(100vw - 200px)",
          "2xl": "calc(100vw - 200px)",
        }}
        mt={5}
      >
        <Image
          src={Justuno}
          h={"180px"}
          objectFit={{
            sm: "contain",
            md: "contain",
            lg: "contain",
            "2xl": "contain",
          }}
          flex={1}
        />
        <Image
          src={Tekyz}
          h={"180px"}
          objectFit={{
            sm: "contain",
            md: "contain",
            lg: "contain",
            "2xl": "contain",
          }}
          flex={1}
        />
        <Image
          src={Photo}
          h={"180px"}
          objectFit={{
            sm: "contain",
            md: "contain",
            lg: "contain",
            "2xl": "contain",
          }}
          flex={1}
        />
        <Image
          src={Encast}
          h={"180px"}
          objectFit={{
            sm: "contain",
            md: "contain",
            lg: "contain",
            "2xl": "contain",
          }}
          flex={1}
        />
        <Image
          src={VV360}
          h={"180px"}
          objectFit={{
            sm: "contain",
            md: "contain",
            lg: "contain",
            "2xl": "contain",
          }}
          flex={1}
        />
        <Image
          src={HireExpert}
          h={"180px"}
          objectFit={{
            sm: "contain",
            md: "contain",
            lg: "contain",
            "2xl": "contain",
          }}
          flex={1}
        />
        <Image
          src={GreenMedicine}
          h={"180px"}
          objectFit={{
            sm: "contain",
            md: "contain",
            lg: "contain",
            "2xl": "contain",
          }}
          flex={1}
        />
        <Image
          src={Amplify}
          h={"180px"}
          objectFit={{
            sm: "contain",
            md: "contain",
            lg: "contain",
            "2xl": "contain",
          }}
          flex={1}
        />
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
{
  /* <SimpleGrid
columns={{ base: 1, sm: 1, md: 2, lg: 4 }} // 1 column on small screens, 2 columns on medium screens, 4 columns on large screens
// spacing={5} // Adjust the spacing between images as needed
mt={5}
>
<Image
  src={Justuno}
  h="180px"
  objectFit={{ md: "cover", lg: "scale-down", "2xl": "fill" }}
/>
<Image
  src={Tekyz}
  h="180px"
  objectFit={{ md: "cover", lg: "scale-down", "2xl": "fill" }}
/>
<Image
  src={Photo}
  h="180px"
  objectFit={{ md: "cover", lg: "scale-down", "2xl": "fill" }}
/>
<Image
  src={Encast}
  h="180px"
  objectFit={{ md: "cover", lg: "scale-down", "2xl": "fill" }}
/>
<Image
  src={VV360}
  h="180px"
  objectFit={{ md: "cover", lg: "scale-down", "2xl": "fill" }}
/>
<Image
  src={HireExpert}
  h="180px"
  objectFit={{ md: "cover", lg: "scale-down", "2xl": "fill" }}
/>
<Image
  src={GreenMedicine}
  h="180px"
  objectFit={{ md: "cover", lg: "scale-down", "2xl": "fill" }}
/>
<Image
  src={Amplify}
  h={"180px"}
  objectFit={{ md: "cover", lg: "scale-down", "2xl": "fill" }}
/>
</SimpleGrid> */
}
