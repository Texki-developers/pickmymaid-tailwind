"use client";
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { getAlternativeText } from "@/utils/altSelector";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { commonPadding } from "../styles";
import { useRouter } from "next/navigation";
import Image from "../NextImageWrapper/Image";

export default function ZigZagSection({ image, imagePos, data }: any) {
  const { t } = useTranslation();
  const router = useRouter();
  console.log(image, "this is image");
  return (
    <SimpleGrid
      sx={commonPadding}
      w="100%"
      columns={{ base: 1, sm: 2 }}
      gap={{ base: 4, sm: "5%", md: "15%" }}
    >
      {imagePos === "left" && (
        <Box
          pos="relative"
          w="100%"
          onClick={() => router.push("/hiring-tips")}
          _after={{
            content: '""',
            pos: "absolute",
            top: 0,
            left: 0,
            borderRadius: "20px 0 20px 0",
            bg: "transparent",
            border: "1px solid",
            borderColor: "brand.primary.300",
            transform: "translateX(2%) translateY(2%)",
            w: "100%",
            h: "100%",
            zIndex: 50,
          }}
        >
          <Image
            aspectRatio={1.5 / 1}
            src={image}
            w="100%"
            h="100%"
            style={{ borderRadius: "0 20px 0 20px", zIndex: "100" }}
            alt={getAlternativeText()}
          />
        </Box>
      )}
      <VStack
        gap={{ base: 0, sm: 4 }}
        alignSelf="center"
        alignItems="flex-start"
      >
        <Heading as="h1" variant="secondary" w="100%">
          {t(data.title)}
        </Heading>
        <Text variant="description">{t(data.desc)}</Text>
        <Button
          onClick={() => router.push("/hiring-tips")}
          mt="1rem"
          mx={{ base: "auto !important", sm: "initial !important" }}
        >
          Read More
        </Button>
      </VStack>
      {imagePos === "right" && (
        <Box
          pos="relative"
          w="100%"
          _after={{
            content: '""',
            pos: "absolute",
            top: 0,
            left: 0,
            borderRadius: "20px 0 20px 0",
            bg: "transparent",
            border: "1px solid",
            borderColor: "brand.primary.300",
            transform: "translateX(2%) translateY(2%)",
            w: "100%",
            zIndex: 50,
            h: "100%",
          }}
        >
          <Image
            aspectRatio={1.5 / 1}
            src={image}
            w="100%"
            h="100%"
            style={{ borderRadius: "0 20px 0 20px", zIndex: "100" }}
            alt={getAlternativeText()}
          />
        </Box>
      )}
    </SimpleGrid>
  );
}
