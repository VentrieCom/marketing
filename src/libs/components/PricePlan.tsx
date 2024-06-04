import {
  Box,
  Card,
  Divider,
  HStack,
  Text,
  VStack,
  Image,
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
    <Card
      w={"full"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={10}
      bgColor={"#0f161b"}
    >
      <Text
        fontWeight={700}
        fontFamily={"Roboto-Slab"}
        textAlign={"center"}
        fontSize={60}
      >
        Price Plan
      </Text>
      <Text
        textAlign={"center"}
        fontFamily={"Poppins"}
        fontWeight={400}
        letterSpacing={5}
      >
        Choose a plan tailored to your needs
      </Text>
      <HStack w={"100%"} mt={10} justifyContent={"space-evenly"}>
        {PriceList.map((i, index) => {
          return (
            <HStack>
              <Box
                onClick={() => SetSelected(index)}
                mb={selected === index ? 40 : 0}
              >
                <PricePlanCard
                  title={i.title}
                  price={i.price}
                  priceList={i.features}
                  selectd={selected === index}
                />
              </Box>
            </HStack>
          );
        })}
      </HStack>
      <Text
        w={"860px"}
        py={20}
        fontSize={30}
        fontWeight={500}
        fontFamily={"Poppins"}
      >
        For self hosted and maintained system price 574000. With all the
        features of{" "}
        <Text
          as="span"
          display="inline"
          fontWeight={500}
          fontSize={30}
          fontFamily={"Poppins"}
          color={"blue.300"}
        >
          {" "}
          Basic Company Plan
        </Text>
      </Text>
    </Card>
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
      alignItems={"start"}
      px={7}
      py={10}
      color={textColor}
      bgColor={selectd ? "blue.300" : "#1a262d"}
      minH={"1200px"}
      minW="450px"
      border={"2px solid #2C3B46"}
      borderRadius={"12px"}
    >
      {/* <Image src={VectorIcon} w={"100px"} h={"100px"} zIndex={200} /> */}
      <Text fontSize={25} fontFamily={"Poppins"} fontWeight={500}>
        {title}
      </Text>
      <HStack>
        <Text fontSize={40} fontWeight={400} fontFamily={"Poppins"}>
          {price}
        </Text>
        <Text
          mt={2}
          fontSize={16}
          fontWeight={400}
          fontFamily={"Poppins"}
          color={selectd ? "secondary.900" : "secondary.100"}
        >
          /month/store
        </Text>
      </HStack>
      <Divider mt={5} border={"1px"} orientation="horizontal" />

      <VStack alignItems={"start"}>
        {priceList.map((i) => {
          return (
            <HStack mt={10}>
              <Image src={StarIcon} w={"20px"} h={"20px"} />
              <Text
                fontSize={18}
                fontWeight={400}
                fontFamily={"Poppins"}
                ml={5}
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
