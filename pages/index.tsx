import { Box } from "@chakra-ui/react";
import Reviews from "../components/sections/reviews";
import BookingSection from "../components/sections/booking-section";

export default function Home() {
  return (
    <Box
      maxW="64rem"
      marginX="auto"
      py={{ base: "3rem", lg: "4rem" }}
      px={{ base: "1rem", lg: "0" }}
    >
      <BookingSection />
      <Reviews />
    </Box>
  );
}
