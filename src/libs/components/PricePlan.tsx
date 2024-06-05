import {
  Card,
  Divider,
  HStack,
  Text,
  VStack,
  Image,
  Stack,
} from "@chakra-ui/react";
import StarIcon from "./../../assets/Star (1).png";
import DarkIcon from "./../../assets/Dark Star.svg";
import VectorIcon from "./../../assets/VectorArrow.png";
import { useState } from "react";

const PricePlan = () => {
  const [selected, SetSelected] = useState(-1);
  const PriceList = [
    {
      title: "Local Magic",
      price: "Rs: 1000",
      features: [
        "Single Store",
        "Single Machine",
        "Local Storage",
        "Sale & POS",
        "Inventory",
        "Expenses",
        "Purchase",
        "Daily Backup",
      ],
    },
    {
      title: "Basic Company",
      price: "Rs: 5000",
      features: [
        "Unlimited Devices",
        "Website Access (Device independent)",
        "Online Storage",
        "Sale & POS",
        "Inventory",
        "Expenses",
        "Purchase",
        "Attendance",
        "Accounting",
        "Cloud Backups",
      ],
    },
    {
      title: "Basic Brand",
      price: "Rs: 7000",
      features: [
        "Unlimited Devices",
        "Website Access (Device independent)",
        "Online Storage",
        "Sale & POS",
        "Inventory",
        "Warehouse Management",
        "Expenses",
        "Purchase",
        "Attendance",
        "Accounting",
        "Cloud Backups",
        "E-Commerce Store (total control from Munshee)",
        "Apps",
      ],
    },
  ];

  return (
    <VStack w={"full"} my={{ base: 16, sm: 20, md: 18, lg: 22, "2xl": 24 }}>
      <Text
        fontWeight={700}
        fontFamily={"Roboto-Slab"}
        textAlign={"center"}
        fontSize={{ base: 42, sm: 46, "2xl": 60 }}
      >
        Price Plan
      </Text>
      <Text
        textAlign={"center"}
        mx={{ base: 2, sm: 4 }}
        my={{ base: 6, md: 4, "2xl": 2 }}
        fontSize={{ base: 16, md: 22, "2xl": 24 }}
        fontFamily={"Poppins"}
        fontWeight={400}
        letterSpacing={{ "2xl": 4 }}
      >
        Choose a plan tailored to your needs
      </Text>
      <Stack
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          "2xl": "row",
        }}
        // bgColor={"royalblue"}
        w={{
          base: "calc(100vw - 50px)",
          md: "calc(100vw - 50px)",
          "2xl": "calc(100vw - 100px)",
        }}
        mt={{ base: 18, md: 32, "2xl": 40 }}
        spacing={{ base: 5, md: 6, "2xl": 12 }}
      >
        {PriceList.map((i, index) => {
          return (
            <Stack
              w={"full"}
              onClick={() => SetSelected(index)}
              mt={{
                base: 0,
                sm: 0,
                md: 0,
                lg: selected === index ? -20 : 0,
                "2xl": selected === index ? -20 : 0,
              }}
              direction={{
                base: "row",
                md: "column",
                lg: "column",
                "2xl": "column",
              }}
            >
              {/*<Box 
             display={"flex"}
               // alignItems={"stretch"}
               // bgColor={selected === index ? "royalblue" : "beige"}
               onClick={() => SetSelected(index)}
               // mb={selected === index ? 40 : 0}
               mt={selected === index ? -20 : 0}
             >*/}
              <PricePlanCard
                title={i.title}
                price={i.price}
                priceList={i.features}
                selectd={selected === index}
              />
            </Stack>
            // </Box>
          );
        })}
      </Stack>
      <Text
        // w={"860px"}
        // bgColor={"darkblue"}
        textAlign={"center"}
        w={{
          base: "calc(100vw - 50px)",
          sm: "calc(100vw - 100px)",
          md: "calc(100vw - 200px)",
          lg: "calc(100vw - 200px)",
          "2xl": "60%",
        }}
        mt={{ base: 20, lg: 28, "2xl": 32 }}
        fontSize={{ base: 20, lg: 28, "2xl": 34 }}
        fontWeight={500}
        fontFamily={"Poppins"}
      >
        For self hosted and maintained system price{" "}
        <Text
          as={"span"}
          fontSize={{ base: 20, lg: 28, "2xl": 34 }}
          fontWeight={700}
        >
          574000.
        </Text>
        <br /> With all the features of{" "}
        <Text
          as="span"
          fontWeight={500}
          fontSize={{ base: 20, md: 30 }}
          fontFamily={"Poppins"}
          color={"blue.300"}
        >
          Basic Company Plan
        </Text>
      </Text>
    </VStack>
  );
};

export default PricePlan;

interface PricePlanCardInterface {
  title: string;
  price: string;
  priceList: string[];
  selectd: boolean;
}

export const PricePlanCard: React.FC<PricePlanCardInterface> = ({
  title,
  price,
  priceList,
  selectd,
}) => {
  const textColor = selectd ? "black" : "white";
  return (
    <Card
      w={{ base: "full", sm: "full" }}
      px={{ base: 6, sm: 4, md: 5, "2xl": 7 }}
      py={{ base: 8, sm: 6, md: 8, "2xl": 8 }}
      color={textColor}
      bgColor={selectd ? "blue.300" : "#1a262d"}
      minH={{ base: 0, sm: 0, md: "100px", lg: "1000px", "2xl": "1000px" }}
      border={selectd ? "none " : "2px solid #2C3B46"}
      borderRadius={"12px"}
    >
      {selectd && (
        <Image
          src={VectorIcon}
          pos={"absolute"}
          top={0}
          left={0}
          w={{
            base: "75px",
            sm: "100px",
            md: "150px",
            lg: "150px",
            "2xl": "200px",
          }}
          h={{
            base: "75px",
            sm: "100px",
            md: "150px",
            lg: "150px",
            "2xl": "200px",
          }}
          zIndex={10}
        />
      )}

      <Text
        fontSize={{ base: 23, md: 28, lg: 32, "2xl": 32 }}
        mb={{ base: 4, md: 4, lg: 27 }}
        fontFamily={"Roboto Condensed"}
        fontWeight={500}
      >
        {title}
      </Text>
      <HStack>
        <Text
          // my={{ base: 2 }}
          fontSize={{ base: 32, sm: 36, md: 38, lg: 48, "2xl": 48 }}
          fontWeight={400}
          fontFamily={"Roboto Condensed"}
        >
          {price}
        </Text>
        <Text
          mt={{ base: 2, lg: 6 }}
          fontSize={{ base: 14, "2xl": 20 }}
          fontWeight={400}
          fontFamily={"Roboto Condensed"}
          color={selectd ? "secondary.900" : "secondary.100"}
        >
          / month / store
        </Text>
      </HStack>
      <Divider
        color={"secondary.900"}
        mt={{ base: 2, md: 3 }}
        border={"1px"}
        alignSelf={"center"}
        w={{ base: "94%", lg: "93%" }}
        orientation="horizontal"
      />

      <VStack
        alignItems={"start"}
        mt={{ base: 8, md: 8, lg: 4 }}
        spacing={{ base: 8, sm: 6, md: 6, lg: 2 }}
      >
        {priceList.map((i) => {
          return (
            <HStack mt={{ base: 0, md: 0, lg: 4 }}>
              <Image
                src={selectd ? DarkIcon : StarIcon}
                mx={{ base: 0, sm: 3, md: 0, lg: 1 }}
                w={{ base: "18px", sm: "20px", lg: "24px" }}
                h={{ base: "18px", sm: "20px", lg: "24px" }}
              />
              <Text
                fontSize={{ sm: 18, md: 18, lg: 20, "2xl": 20 }}
                fontWeight={400}
                fontFamily={"Roboto Condensed"}
                ml={{ base: 1, sm: 1, md: 2, lg: 4 }}
              >
                {i}
              </Text>
            </HStack>
          );
        })}
      </VStack>
    </Card>
  );
};
