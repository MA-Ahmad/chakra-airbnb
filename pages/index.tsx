import {
  Box,
  Link,
  Heading,
  Flex,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      maxW="64rem"
      marginX="auto"
      py={{ base: "3rem", lg: "4rem" }}
      px={{ base: "1rem", lg: "0" }}
    >
      <Heading as="h3" size="lg" mb="4" fontWeight="bold" textAlign="left">
        Book unique homes and experiences
      </Heading>
      <Box mb={{ base: "2.5rem", lg: "4rem" }}>
        <form>
          <Flex
            justify="start"
            alignItems="start"
            flexDirection={{ base: "column", lg: "row" }}
          >
            <FormControl
              id="where"
              width={{ base: "100%", lg: 1 / 3 }}
              pr={{ lg: "2" }}
              mb={{ base: "4", lg: "0" }}
            >
              <FormLabel fontSize="0.75rem" fontWeight="bold">
                Where
              </FormLabel>
              <Input placeholder="Anywhere" />
            </FormControl>
            <FormControl
              id="checkIn"
              width={{ base: "100%", lg: 1 / 3 }}
              pr={{ lg: "2" }}
              mb={{ base: "4", lg: "0" }}
            >
              <FormLabel fontSize="0.75rem" fontWeight="bold">
                CHECK-IN - CHECKOUT
              </FormLabel>
              <Input placeholder="mm/dd/yyyy - mm/dd/yyyy" />
            </FormControl>
            <FormControl
              id="guests"
              width={{ base: "100%", lg: 1 / 3 }}
              pr={{ lg: "2" }}
              mb={{ base: "4", lg: "0" }}
            >
              <FormLabel fontSize="0.75rem" fontWeight="bold">
                GUESTS
              </FormLabel>
              <Select>
                <option value="1 guest">1 guest</option>
                <option value="2 guest">2 guests</option>
                <option value="3 guest">3 guests</option>
              </Select>
            </FormControl>
          </Flex>
        </form>
      </Box>
    </Box>
  );
}
