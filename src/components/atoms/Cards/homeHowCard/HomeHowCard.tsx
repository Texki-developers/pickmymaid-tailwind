"use client";
import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { getAlternativeText } from "@/utils/altSelector";
import Image from "../../NextImageWrapper/Image";

export default function HomeHowCard({
  image,
  number,
  heading,
  content,
}: {
  image?: any;
  number: number;
  heading: string;
  content: string;
}) {
  return (
    <VStack
      pos="relative"
      flex={10}
      w={{ base: "100%", sm: "10rem", xl: "25rem" }}
    >
      <HStack alignItems="flex-start" w="100%">
        <Text
          fontSize={{ base: "6rem", lg: "9rem" }}
          fontWeight={500}
          color="brand.primary.300"
          pos="relative"
          top="0"
          lineHeight="100px"
        >
          {number}
        </Text>
        {image && (
          <Box
            w={{ base: "12rem", lg: "15rem" }}
            height="auto"
            objectFit="contain"
            flexShrink="10"
          >
            <Image
              src={image}
              h="auto"
              w="100%"
              aspectRatio={1.5 / 1}
              alt={getAlternativeText()}
            />
          </Box>
        )}
      </HStack>
      <VStack
        pl={{ base: "0", lg: "20%" }}
        flexGrow={10}
        justifyContent="flex-end"
        w="100%"
      >
        <Heading
          fontSize={{ base: "1rem", md: "1.4rem" }}
          textAlign="left"
          w="100%"
        >
          {heading}
        </Heading>
        <Text>{content}</Text>
      </VStack>
    </VStack>
  );
}
