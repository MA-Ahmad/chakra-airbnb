import { Box, Heading, Text, Flex, Link, Image } from "@chakra-ui/react";

const Star = () => {
  return (
    <svg
      style={{
        width: "0.5rem",
        height: "0.5rem",
        fill: "#008F94",
        marginRight: "0.25rem"
      }}
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
    </svg>
  );
};

const Places = () => {
  return (
    <>
      <Heading
        as="h3"
        fontSize="1.5rem"
        fontWeight="bold"
        textAlign="left"
        mb={{ base: "4", lg: "2" }}
      >
        Just booked in the United States
      </Heading>

      <Flex
        as="section"
        alignItems="start"
        justify="between"
        flexWrap="wrap"
        my={{ base: "1.5rem", lg: "2rem" }}
      >
        <Link
          href="#"
          w={{ base: "100%", md: "50%", lg: 1 / 4 }}
          px={{ md: "0.25rem", lg: "0.25rem" }}
          mb={{ base: "1.5rem", lg: "0" }}
          textAlign="left"
          _hover={{ textDecoration: "none" }}
        >
          <Image src="/images/just-booked-1.jpg" objectFit="cover" w="100%" />
          <Text
            color="gray.600"
            fontSize="0.75rem"
            fontWeight="700"
            textTransform="uppercase"
            pt="0.5rem"
          >
            Entire House <span aria-hidden="true">•</span> Joshua Tree
          </Text>
          <Heading
            as="h4"
            my="0.25rem"
            fontSize="1.125rem"
            fontWeight="500"
            lineHeight="1.375"
          >
            The Joshua Tree House
          </Heading>
          <Text color="gray.600" fontSize="0.875rem" mb="0.25rem">
            $285/night
          </Text>
          <Flex alignItems="center">
            <Star />
            <Star />
            <Star />
            <Star />
            <Text color="gray.600" fontSize="0.75rem">
              467 <span aria-hidden>•</span> Superhost
            </Text>
          </Flex>
        </Link>
        <Link
          href="#"
          w={{ base: "100%", md: "50%", lg: 1 / 4 }}
          px={{ md: "0.25rem", lg: "0.25rem" }}
          mb={{ base: "1.5rem", lg: "0" }}
          textAlign="left"
          _hover={{ textDecoration: "none" }}
        >
          <Image src="/images/just-booked-2.jpg" objectFit="cover" w="100%" />
          <Text
            color="gray.600"
            fontSize="0.75rem"
            fontWeight="700"
            textTransform="uppercase"
            pt="0.5rem"
          >
            Dome house <span aria-hidden="true">•</span> Aptos
          </Text>
          <Heading
            as="h4"
            my="0.25rem"
            fontSize="1.125rem"
            fontWeight="500"
            lineHeight="1.375"
          >
            Mushroom Dome Cabin: #1 on airbnb in the world
          </Heading>
          <Text color="gray.600" fontSize="0.875rem" mb="0.25rem">
            $130/night
          </Text>
          <Flex alignItems="center">
            <Star />
            <Star />
            <Star />
            <Star />
            <Text color="gray.600" fontSize="0.75rem">
              1392 <span aria-hidden>•</span> Superhost
            </Text>
          </Flex>
        </Link>
        <Link
          href="#"
          w={{ base: "100%", md: "50%", lg: 1 / 4 }}
          px={{ md: "0.25rem", lg: "0.25rem" }}
          mb={{ base: "1.5rem", lg: "0" }}
          textAlign="left"
          _hover={{ textDecoration: "none" }}
        >
          <Image src="/images/just-booked-3.jpg" objectFit="cover" w="100%" />
          <Text
            color="gray.600"
            fontSize="0.75rem"
            fontWeight="700"
            textTransform="uppercase"
            pt="0.5rem"
          >
            Earth house <span aria-hidden="true">•</span> Orondo
          </Text>
          <Heading
            as="h4"
            my="0.25rem"
            fontSize="1.125rem"
            fontWeight="500"
            lineHeight="1.375"
          >
            Underground Hygge
          </Heading>
          <Text color="gray.600" fontSize="0.875rem" mb="0.25rem">
            $150/night
          </Text>
          <Flex alignItems="center">
            <Star />
            <Star />
            <Star />
            <Star />
            <Text color="gray.600" fontSize="0.75rem">
              552 <span aria-hidden>•</span> Superhost
            </Text>
          </Flex>
        </Link>
        <Link
          href="#"
          w={{ base: "100%", md: "50%", lg: 1 / 4 }}
          px={{ md: "0.25rem", lg: "0.25rem" }}
          mb={{ base: "1.5rem", lg: "0" }}
          textAlign="left"
          _hover={{ textDecoration: "none" }}
        >
          <Image src="/images/just-booked-4.jpg" objectFit="cover" w="100%" />
          <Text
            color="gray.600"
            fontSize="0.75rem"
            fontWeight="700"
            textTransform="uppercase"
            pt="0.5rem"
          >
            Entire house <span aria-hidden="true">•</span> Pioneertown
          </Text>
          <Heading
            as="h4"
            my="0.25rem"
            fontSize="1.125rem"
            fontWeight="500"
            lineHeight="1.375"
          >
            Off-grid itHouse
          </Heading>
          <Text color="gray.600" fontSize="0.875rem" mb="0.25rem">
            $450/night
          </Text>
          <Flex alignItems="center">
            <Star />
            <Star />
            <Star />
            <Star />
            <Text color="gray.600" fontSize="0.75rem">
              254
            </Text>
          </Flex>
        </Link>
      </Flex>

      <Link
        href="#"
        fontSize="1.125rem"
        fontWeight="500"
        alignItems="center"
        display="flex"
        _hover={{ textDecoration: "none" }}
      >
        Show all (22,000+){" "}
        <svg
          viewBox="0 0 18 18"
          role="presentation"
          aria-hidden="true"
          focusable="false"
          style={{
            width: "0.75rem",
            height: "0.75rem",
            fill: "#008F94",
            marginLeft: "0.5rem"
          }}
        >
          <path
            d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </Link>

      <Box as="section" mt={{ base: "2rem", lg: "4rem" }} textAlign="left">
        <Heading
          as="h3"
          fontSize="1.5rem"
          fontWeight="700"
          textAlign="left"
          mb={{ base: "4", lg: "2" }}
        >
          When are you traveling?
        </Heading>
        <Text fontSize="1rem" fontWeight="300">
          Add dates for updated pricing and availability
        </Text>
        <Link
          href="#"
          bg="#008F94"
          px="1.5rem"
          py="0.75rem"
          my="0.5rem"
          borderRadius="5px"
          color="#fff"
          fontWeight="bold"
          display="inline-block"
          _hover={{ textDecoration: "none" }}
        >
          Add dates
        </Link>
      </Box>
    </>
  );
};

export default Places;
