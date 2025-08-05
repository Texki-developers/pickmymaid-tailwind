import {
  Box,
  Button,
  Flex,
  Heading,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import SelectInput from "@/components/atoms/InputFields/SelectInput/SelectInput";
import { emiratesList, serviceList } from "./banner.data";
import bannerBg from "@/assets/images/Home/banner-bg.jpeg";

import "react-lazy-load-image-component/src/effects/blur.css";

const bannerLength = 8;

const bannerTitle: string[] = [
  "common.categories.maids",
  "common.categories.nanny",
  "common.categories.caregiver",
  "common.categories.private_nurse",
  "common.categories.private_tutor",
  "common.categories.driver",
  "common.categories.postpartum_care",
  "common.categories.cook",
];

const AnimatedBox = motion(Box);

export default function Banner() {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [bannerIndex, setBannerIndex] = useState<number>(0);

  const { register, handleSubmit } = useForm({ mode: "onChange" });

  const onBannerSubmission = (data) => {
    const { location, service } = data;
    if (location || service) {
      router.push(
        `/search?${location ? `location=${location}&` : ""}${service ? `service=${service}` : ""
        }`
      );
    }
  };

  useLayoutEffect(() => {
    const bannerInterval = setInterval(() => {
      setBannerIndex((prev: number) =>
        prev < bannerLength - 1 ? prev + 1 : 0
      );
    }, 4000);

    return () => clearInterval(bannerInterval);
  }, []);

  return (
    <Box
      h={{ base: "max-content" }}
      w="100%"
      py={{ base: 2, md: 8 }}
      px={{ base: 2, md: 6, lg: 8, "2xl": 32 }}
    >
      <Flex w="100%" pos="relative" h="100%" rounded="xl">
        <Flex
          alignItems="center"
          flexDir={{ base: "column", lg: "row" }}
          gap={{ base: 5, md: 20 }}
          px={{ base: 4, sm: 16 }}
          py={{ base: 4, lg: 4 }}
          // bg='linear-gradient(90deg, hsla(18, 100%, 69%, 1) 0%, #ffa67f 100%);'
          bg={`url('${bannerBg}')`}
          boxShadow="inset 10000px 10000px 0 rgba(255, 144.33, 96.9, 0.15)"
          backgroundSize="cover"
          backgroundPosition={{ base: "center" }}
          rounded="xl"
          overflow="hidden"
        >
          <VStack
            alignItems="flex-start"
            justifyContent="center"
            h="100%"
            pos="static"
            zIndex={20}
            flexShrink={2}
            textAlign={{
              base: "center",
              md: i18n.dir() === "ltr" ? "left" : "right",
            }}
          >
            <Heading as="h1" minH="2rem" variant="primary" w="100%">
              <Trans components={{ br: <br /> }}>
                {t("home.banner.heading")}
              </Trans>
            </Heading>
            <Show above="sm">
              <Text variant="description" color="white">
                {t("home.banner.subheading")}
                <br />
                <br />
              </Text>
            </Show>
            <Text variant="subTitle" mt={0}>
              <strong style={{ color: "#fff" }}>
                {t("home.banner.register")}
              </strong>
            </Text>
            <Text
              variant="subTitle"
              mt={0}
              textAlign={{
                base: "center",
                sm: i18n.dir() === "ltr" ? "left" : "right",
              }}
              w="100%"
            >
              <strong
                style={{
                  color: "#FF8F5F",
                  padding: "0 3px",
                  borderRadius: "5px",
                  background: "#fff",
                }}
              >
                {t("home.banner.plan")}
              </strong>
            </Text>
          </VStack>

          {/* Search Form */}
          <Show above="sm">
            <VStack
              w={{ base: "100%", md: "30rem", xl: "40rem" }}
              gap={{ base: 1, sm: 4 }}
              py={{ base: 3, sm: 6 }}
              px={{ base: 4, sm: 8 }}
              bg="white"
              rounded="xl"
              alignItems="flex-start"
              pos="static"
              zIndex={20}
              height="max-content"
              my={{ base: 0, md: 4, lg: 8 }}
            >
              <VStack alignItems="flex-start" gap={{ base: 0, sm: 1 }} w="100%">
                <Heading variant="tertiary" display="flex" overflow="hidden">
                  {t("home.banner.form.find")}{" "}
                  <AnimatedBox
                    initial={{
                      y: "-100%",
                    }}
                    animate={{
                      y: ["100%", "0%", "0%", "0%", "-100%"],
                    }}
                    transition={{
                      duration: 4,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                    color="brand.primary.300"
                    ml="0.5rem"
                  >
                    {t(bannerTitle[bannerIndex])}
                  </AnimatedBox>
                </Heading>
                <Heading variant="tertiary">
                  {t("home.banner.form.secondLine")}
                </Heading>
              </VStack>

              <SelectInput
                label={t("home.banner.form.where")}
                list={emiratesList}
                register={register("location")}
              />
              <SelectInput
                label={t("home.banner.form.service")}
                list={serviceList}
                register={register("service")}
              />

              <Button
                variant="solid"
                ml={0}
                onClick={handleSubmit(onBannerSubmission)}
              >
                {t("common.button.search")}
              </Button>
            </VStack>
          </Show>
        </Flex>
      </Flex>
    </Box>
  );
}
