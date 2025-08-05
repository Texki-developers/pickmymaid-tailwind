import { findWorkers, quickLink } from "./footermain.data";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
  RiWhatsappFill,
  RiYoutubeFill,
} from "../Icons/Icons";
import securedPayment from "@/assets/images/footer-payment.png";
import RouterLink from "next/link";
import VStack from "@/components/ui/VStack";
import Image from "next/image";
import Link from "next/link";
import HStack from "@/components/ui/HStack";

export default function FooterMain() {
  // const router = useRouter();
  // const { t, i18n } = useTranslation();
  // const pathname = usePathname();
  // const { locale } = useParams();

  // const redirect = () => {
  //   router?.push("/");
  //   window.scrollTo(0, 0);
  // };

  // const navigateToTop = () => {
  //   window.scrollTo(0, 0);
  // };

  return (
    <div className="common-padding mt-4 sm:mt-6 py-8 pb-5 sm:pb-8 bg-primary-300">
      <div className="grid grid-cols-[1fr] sm:grid-cols-[1.5fr_auto_1fr_1.5fr_1fr] gap-4 sm:gap-8">
        <VStack>
          <Link href="/">
            <Image
              src="/logo/logo white.webp"
              alt="Pickmymaid logo white"
              width={160}
              height={40}
            />
          </Link>
          <p className="text-footer text-white">
            Pickmymaid is the #1 maid platform in UAE. Access the best profiles
            with comprehensive information, including recommendations, to find
            your ideal nanny or maid. Connect directly with them, eliminating
            costly agency fees and saving thousands of dirhams.
          </p>
          <HStack className="">
            <RiFacebookCircleFill className="text-footer cursor-pointer text-[#424141] hover:text-black-900 transition-all duration-300 ease" />
            <RiInstagramFill className="text-footer cursor-pointer text-[#424141] hover:text-black-900 transition-all duration-300 ease" />
            <RiLinkedinBoxFill className="text-footer cursor-pointer text-[#424141] hover:text-black-900 transition-all duration-300 ease" />
            <RiTwitterXFill className="text-footer cursor-pointer text-[#424141] hover:text-black-900 transition-all duration-300 ease" />
            <RiYoutubeFill className="text-footer cursor-pointer text-[#424141] hover:text-black-900 transition-all duration-300 ease" />
            <RiWhatsappFill className="text-footer cursor-pointer text-[#424141] hover:text-black-900 transition-all duration-300 ease" />
          </HStack>
        </VStack>

        <div></div>

        <HStack className="items-start justify-between w-[100%]">
          <div>
            <h3 className="heading-footer-title mb-4">Quick Links</h3>
            <VStack>
              {quickLink.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="text-footer text-white"
                >
                  {item.title}
                </Link>
              ))}
            </VStack>
          </div>

          <div className="block sm:hidden">
            <h3 className="heading-footer-title mb-4">Support</h3>
            <VStack>
              <p className="text-footer font-[500] text-white">
                Whatsapp:{" "}
                <Link
                  href="tel:+971566369736"
                  className="text-footer text-white"
                >
                  +971 566369736
                </Link>
              </p>
              <p className="text-footer text-white">
                Email:{" "}
                <Link
                  href="mailto:support@pickmymaid.com"
                  className="text-footer text-white"
                >
                  support@pickmymaid.com
                </Link>
              </p>
            </VStack>
          </div>
        </HStack>

        <div>
          <h3 className="heading-footer-title mb-4">Find Workers</h3>
          <div className="flex gap-6">
            <VStack>
              {findWorkers.map(
                (item, index) =>
                  index <= 4 && (
                    <Link
                      key={index}
                      href={item.path}
                      className="text-footer text-white"
                    >
                      {item.title}
                    </Link>
                  )
              )}
            </VStack>
            <VStack>
              {findWorkers.map(
                (item, index) =>
                  index > 4 && (
                    <Link
                      key={index}
                      href={item.path}
                      className="text-footer text-white"
                    >
                      {item.title}
                    </Link>
                  )
              )}
            </VStack>
          </div>
        </div>

        <div className="hidden sm:block">
          <h3 className="heading-footer-title mb-4">Support</h3>
          <VStack>
            <p className="text-footer font-[500] text-white">
              Whatsapp:{" "}
              <Link href="tel:+971566369736" className="text-footer text-white">
                +971 566369736
              </Link>
            </p>
            <p className="text-footer text-white">
              Email:{" "}
              <Link
                href="mailto:support@pickmymaid.com"
                className="text-footer text-white"
              >
                support@pickmymaid.com
              </Link>
            </p>
          </VStack>
        </div>
      </div>
      <div className="mt-4 flex flex-col justify-center items-center">
        <Image
          src={securedPayment.src}
          width="370"
          height="90"
          alt="accepted payments"
        />
        <hr className="w-full bg-white border-white mb-4" />
        <p className="text-footer">
          &copy; {new Date().getFullYear()} Pickmymaid. All rights reserved -
          License Number: 2323666.01
        </p>
      </div>
    </div>
    // <Box
    //   sx={commonPadding}
    //   mt={pathname.includes("about-us") ? {} : { base: 4, sm: 6 }}
    //   py={8}
    //   pb={{ base: "5rem", sm: 8 }}
    //   bg="brand.primary.300">
    //   <Grid
    //     templateColumns={{ base: "1fr", sm: "1.5fr auto 1fr 1.5fr 1fr" }}
    //     gap={{ base: 4, sm: 8 }}>
    //     <VStack alignItems={i18n.dir() === "ltr" ? "left" : "right"}>
    //       <Image
    //         src="/logo/logo white.webp"
    //         alt="Pickmymaid logo white"
    //         w="10rem"
    //         onClick={redirect}
    //       />
    //       <Text
    //         variant="footer"
    //         color="white">
    //         {t("footer.description")}
    //       </Text>
    //       <HStack>
    //         <Icon
    //           as={RiWhatsappFill}
    //           cursor="pointer"
    //           color="#424141"
    //           fontSize={{ base: "1.8rem" }}
    //           _hover={{ color: "text.black.900" }}
    //           onClick={() => window.open("https://wa.me/+971566369736")}
    //         />
    //         <Icon
    //           as={RiFacebookCircleFill}
    //           cursor="pointer"
    //           color="#424141"
    //           fontSize={{ base: "1.8rem" }}
    //           _hover={{ color: "text.black.900" }}
    //           onClick={() => window.open("https://www.facebook.com/pickmymaid/")}
    //         />
    //         <Icon
    //           as={RiInstagramFill}
    //           cursor="pointer"
    //           color="#424141"
    //           fontSize={{ base: "1.8rem" }}
    //           _hover={{ color: "text.black.900" }}
    //           onClick={() => window.open("https://www.instagram.com/pickmymaid")}
    //         />
    //         <Icon
    //           as={RiYoutubeFill}
    //           cursor="pointer"
    //           color="#424141"
    //           fontSize={{ base: "2rem" }}
    //           _hover={{ color: "text.black.900" }}
    //           onClick={() => window.open("https://www.youtube.com/channel/UCtGKwMSxWPcSHs_Mq1THAdg")}
    //         />
    //         <Icon
    //           as={RiTwitterXFill}
    //           cursor="pointer"
    //           color="#424141"
    //           fontSize={{ base: "1.8rem" }}
    //           _hover={{ color: "text.black.900" }}
    //           onClick={() => window.open("https://twitter.com/pickmymaid")}
    //         />
    //         <Icon
    //           as={RiLinkedinBoxFill}
    //           cursor="pointer"
    //           color="#424141"
    //           fontSize={{ base: "1.8rem" }}
    //           _hover={{ color: "text.black.900" }}
    //           onClick={() => window.open("https://www.linkedin.com/company/pick-my-maid/")}
    //         />
    //       </HStack>
    //     </VStack>

    //     <Show above="sm">
    //       <Spacer />
    //     </Show>

    //     <HStack
    //       alignItems="flex-start"
    //       justifyContent="space-between"
    //       w="100%">
    //       <Box textAlign={i18n.dir() === "ltr" ? "left" : "right"}>
    //         <Heading
    //           variant="footerTitle"
    //           mb={4}>
    //           {t("footer.title.quickLinks")}
    //         </Heading>
    //         <VStack alignItems={i18n.dir() === "ltr" ? "left" : "right"}>
    //           {quickLink.map((linkItem) => (
    //             <Link
    //               w="max-content"
    //               key={linkItem.id}
    //               sx={footerLink}
    //               as={RouterLink}
    //               href={`/${locale ?? 'en'}${linkItem.path}`}
    //               onClick={navigateToTop}>
    //               {t(linkItem.title)}
    //             </Link>
    //           ))}
    //         </VStack>
    //       </Box>

    //       <Hide above="sm">
    //         <Box textAlign={i18n.dir() === "ltr" ? "left" : "right"}>
    //           <Heading
    //             variant="footerTitle"
    //             mb={4}>
    //             {t("footer.title.quickLinks")}
    //           </Heading>
    //           <VStack alignItems={i18n.dir() === "ltr" ? "left" : "right"}>
    //             <Text
    //               sx={footerLink}
    //               w="max-content">
    //               {t("common.whatsapp")}: <a href="tel:+971566369736">+971 566369736</a>
    //             </Text>
    //             <Text
    //               sx={footerLink}
    //               w="max-content">
    //               {t("common.email")}: <a href="mailto:support@pickmymaid.com">support@pickmymaid.com</a>
    //             </Text>
    //           </VStack>
    //         </Box>
    //       </Hide>
    //     </HStack>

    //     <Box>
    //       <Heading
    //         variant="footerTitle"
    //         mb={4}>
    //         {t("footer.supportLinks.findWorkers")}
    //       </Heading>
    //       <Flex gap={6}>
    //         <VStack alignItems={i18n.dir() === "ltr" ? "left" : "right"}>
    //           {findWorkers.map(
    //             (worker, index) =>
    //               index <= 4 && (
    //                 <Link
    //                   w="max-content"
    //                   key={worker.id}
    //                   sx={footerLink}
    //                   as={RouterLink}
    //                   href={`/${locale ?? 'en'}${worker.path}`}
    //                   onClick={navigateToTop}>
    //                   {t(worker.title)}
    //                 </Link>
    //               )
    //           )}
    //         </VStack>
    //         <VStack alignItems={i18n.dir() === "ltr" ? "left" : "right"}>
    //           {findWorkers.map(
    //             (worker, index) =>
    //               index > 4 && (
    //                 <Link
    //                   w="max-content"
    //                   key={worker.id}
    //                   sx={footerLink}
    //                   as={RouterLink}
    //                   href={`/${locale ?? 'en'}${worker.path}`}>
    //                   {t(worker.title)}
    //                 </Link>
    //               )
    //           )}
    //         </VStack>
    //       </Flex>
    //     </Box>

    //     <Hide below="sm">
    //       <Box textAlign={i18n.dir() === "ltr" ? "left" : "right"}>
    //         <Heading
    //           variant="footerTitle"
    //           mb={4}>
    //           {t("footer.title.support")}
    //         </Heading>
    //         <VStack alignItems={i18n.dir() === "ltr" ? "left" : "right"}>
    //           <Text
    //             sx={footerLink}
    //             w="max-content">
    //             {t("common.whatsapp")}: <a href="tel:+971566369736">+971 566369736</a>
    //           </Text>
    //           <Text
    //             sx={footerLink}
    //             w="max-content">
    //             {t("common.email")}: <a href="mailto:support@pickmymaid.com">support@pickmymaid.com</a>
    //           </Text>
    //         </VStack>
    //       </Box>
    //     </Hide>
    //   </Grid>

    //   <VStack mt={{ base: 4 }}>
    //     <Image
    //       src={securedPayment.src}
    //       w={{ base: "20rem", sm: "30rem" }}
    //       alt="accepted payments"
    //     />
    //     <Divider orientation="horizontal" />
    //     <Flex
    //       w="100%"
    //       justifyContent="center"
    //       alignItems={{ base: "flex-start", sm: "flex-end" }}
    //       flexDir={{ base: "column-reverse", sm: "row" }}
    //       gap={4}>
    //       <Text variant="footer">&copy; {new Date().getFullYear()} Pickmymaid. All rights reserved - License Number: 2323666.01</Text>
    //     </Flex>
    //   </VStack>
    // </Box>
  );
}
