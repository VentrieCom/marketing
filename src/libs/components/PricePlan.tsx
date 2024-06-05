import {
  Box,
  Card,
  Divider,
  HStack,
  Text,
  VStack,
  Image,
  Stack,
} from "@chakra-ui/react";
import StarIcon from "./../../assets/Star (1).png";
// import VectorIcon from "./../../assets/VectorArrow.png";
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
        spacing={{ base: 4, md: 6, "2xl": 12 }}
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
        fontSize={{ base: 22, lg: 28, "2xl": 34 }}
        fontWeight={500}
        fontFamily={"Poppins"}
      >
        For self hosted and maintained system price{" "}
        <Text as={"span"} fontWeight={700}>
          574000.
        </Text>
        <br /> With all the features of{" "}
        <Text
          as="span"
          fontWeight={500}
          fontSize={{ base: 22, md: 30 }}
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
      px={{ base: 4, md: 6, "2xl": 7 }}
      py={{ base: 6, md: 7, "2xl": 8 }}
      color={textColor}
      bgColor={selectd ? "blue.300" : "#1a262d"}
      // minH={{ md: "100px", lg: "1200px", "2xl": "1200px" }}
      // minW="450px"
      border={"2px solid #2C3B46"}
      borderRadius={"12px"}
    >
      {/* <Image src={VectorIcon} w={"100px"} h={"100px"} zIndex={200} /> */}
      <Text
        fontSize={{ base: 23, "2xl": 25 }}
        fontFamily={"Poppins"}
        fontWeight={500}
      >
        {title}
      </Text>
      <HStack>
        <Text
          my={{ base: 2 }}
          fontSize={{ base: 34, "2xl": 40 }}
          fontWeight={400}
          fontFamily={"Poppins"}
        >
          {price}
        </Text>
        <Text
          mt={2}
          fontSize={{ base: 14, "2xl": 16 }}
          fontWeight={400}
          fontFamily={"Poppins"}
          color={selectd ? "secondary.900" : "secondary.100"}
        >
          /month/store
        </Text>
      </HStack>
      <Divider
        mt={{ base: 2, md: 5 }}
        border={"1px"}
        orientation="horizontal"
      />

      <VStack alignItems={"start"}>
        {priceList.map((i) => {
          return (
            <HStack mt={{ base: 6, md: 10 }}>
              <Image
                src={StarIcon}
                mx={{ base: 0, lg: 1 }}
                w={"20px"}
                h={"20px"}
              />
              <Text
                fontSize={18}
                fontWeight={400}
                fontFamily={"Poppins"}
                ml={{ base: 0, md: 2 }}
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
