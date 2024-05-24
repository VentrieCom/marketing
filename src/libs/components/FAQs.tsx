import {
  Card,
  HStack,
  Text,
  Image,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Accordion,
} from "@chakra-ui/react";

import Ellipse from "./../../assets/Ellipse 2008.png";

const FAQs = () => {
  return (
    <Card
      w={"100%"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={10}
      bgColor={"#0f161b"}
    >
      <Text
        fontSize={60}
        fontWeight={400}
        fontFamily={"roboto-slab"}
        textAlign={"center"}
        mt={10}
      >
        FAQ's
      </Text>
      <HStack w={"100%"} justifyContent={"start"} mt={60}>
        <Image src={Ellipse} w={"150px"} />
      </HStack>
      <HStack borderRadius={"20px"}>
        <Accordion>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <AccordionPanel>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
                <AccordionButton w={"200px"} h={"50px"}>
                  <Box>
                    <i className="fa-solid fa-minus"></i>
                  </Box>
                  {isExpanded ? (
                    //   <MinusIcon fontSize='12px' />
                    <i className="fa-solid fa-minus"></i>
                  ) : (
                    //   <AddIcon fontSize='12px' />
                    <i className="fa-solid fa-minus"></i>
                  )}
                </AccordionButton>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </HStack>
    </Card>
  );
};

export default FAQs;
