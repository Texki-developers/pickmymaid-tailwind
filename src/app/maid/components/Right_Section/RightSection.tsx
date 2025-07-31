import ForPremium from "@/components/atoms/ForPremiumOnly/ForPremium";
import { MdLocationOn, MdOutlineMail, MdOutlineVideoCall, MdPhone, RiWhatsappFill } from "@/components/atoms/Icons/Icons";
import PremiumButton from "@/components/atoms/PremiumButton/PremiumButton";
import { axiosInstanceV2 } from "@/lib/axiosInstance";
import { setAuthModal } from "@/lib/features/auth/authSlice";
import { fetchMaidDataById } from "@/lib/features/maid/maidAction";
import { addRedirection } from "@/lib/features/utilSlice/utileSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SkillsLanguages from "../SkillsLanguages";

const RightSection = ({ data, contactRef }: any) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);

  const [flag, setFlag] = useState(false);
  const languageLevel = {
    0: "Good",
    1: "Excellent",
    2: "Fair",
    3: "Don't Know",
  };
  const paymentDetails = useAppSelector((state) => state.payment.paymentDetails);

  const getEmbedUrl = (url: string): any => {
    if (url) {
      let embedUrl = "";
      const videoId = url.split("v=")[1];
      if (videoId) {
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
      } else {
        const arr = url.split("/");
        const videoId = arr[arr.length - 1];
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
      }
      return embedUrl;
    }
    return null;
  };

  const handleHire = () => {
    localStorage.setItem("isUnlock", "clicked");
    if (!user) {
      dispatch(setAuthModal("signup"));
      dispatch(addRedirection("/pricing"));
    } else {
      router.push("/pricing");
    }
  };

  const handleContactRedirect = (type: string, number: string) => {
    let link;
    const trimmedNum = number.replace(/\s+/g, "");
    console.log({ number, trimmedNum });
    if (type === "uae_no") {
      link = `tel:${trimmedNum}`;
    } else if (type === "whatsapp") {
      link = `https://wa.me/${trimmedNum}`;
    } else if (type === "botim") {
      link = `botim://chat?user=${trimmedNum.replace("+", "")}`;
    }

    if (link) {
      window.location.href = link;
    }
  };

  function alternateSort(skills: string[]): string[] {
    // Sort skills in ascending order of length
    const sortedSkills = [...skills].sort((a, b) => a.length - b.length);

    const result: string[] = [];
    let left = 0; // Pointer for shorter words
    let right = sortedSkills.length - 1; // Pointer for longer words
    let toggle = true; // Toggle between short and long

    while (left <= right) {
      if (toggle) {
        result.push(sortedSkills[left]); // Take shorter word
        left++;
      } else {
        result.push(sortedSkills[right]); // Take longer word
        right--;
      }
      toggle = !toggle; // Flip toggle for next iteration
    }

    return result;
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFlag(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (
      paymentDetails?.subscriptionStatus == 1 &&
      (!data?.uae_no || data?.uae_no === "") &&
      (!data?.whatsapp_no || data?.whatsapp_no === "") &&
      (!data?.botim_number || data?.botim_number === "")
    ) {
      axiosInstanceV2.post("/auth/log-error", {
        details: paymentDetails,
        data,
      });
      dispatch(fetchMaidDataById(data?._id));
    }
  }, [paymentDetails, data]);

  return (
    <div>
      <div className="grid gap-[20px]">
        <div className="hidden lg:block">
          <div className="gap-[10px] p-[15px] md:p-[30px] bg-white rounded-[15px]">
            <h2 className="text-[1.2rem] font-bold text-primary-300">About Me</h2>
            <p
              className="text-[0.9rem] sm:text-[1rem] text-black-600 xl:text-[1.2rem]"
              dangerouslySetInnerHTML={{ __html: data?.notes }}
            />
          </div>
        </div>

        <div
          className="gap-[10px] grid p-[15px] md:p-[30px] bg-white rounded-[15px]"
          ref={contactRef}
          id="contact_section">
          <div className="flex items-center justify-between pb-[20px]">
            <h2 className="text-[1.2rem] font-bold text-primary-300">Contacts</h2>
            {paymentDetails?.subscriptionStatus !== 1 && <PremiumButton />}
          </div>
          {/* Current location */}
          <div className="grid border-b border-black-300 grid-cols-1 sm:grid-cols-[2fr_1fr]">
            <div className="flex items-center gap-[5px]">
              <MdLocationOn
                className="text-[#FF0000] "
                width={22}
                height={22}
              />
              <h2 className="text-[1.2rem] font-semibold">Current location</h2>
            </div>
            <p className="text-[1.2rem]">{data?.current_location}</p>
          </div>
          {/* UAE calling number */}
          <div className="grid border-b border-black-300 grid-cols-1 sm:grid-cols-[2fr_1fr]">
            <div className="flex items-center gap-[5px]">
              <MdPhone
                className="text-primary-400 "
                width={22}
                height={22}
              />
              <h2 className="text-[1.2rem] font-semibold">UAE calling number</h2>
            </div>
            <ForPremium isBlur={paymentDetails?.subscriptionStatus !== 1}>
              <p>
                {paymentDetails?.subscriptionStatus === 1 ? (
                  data?.uae_no === "+" || !data.uae_no || data.uae_no === "" ? (
                    "---"
                  ) : (
                    <span
                      style={{
                        color: "blue",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() => handleContactRedirect("uae_no", data.uae_no)}>
                      {data?.uae_no}
                    </span>
                  )
                ) : (
                  <span>+971 000000000</span>
                )}
              </p>
            </ForPremium>
          </div>
          {/* WhatsApp number */}
          <div className="grid border-b border-black-300 grid-cols-1 sm:grid-cols-[2fr_1fr]">
            <div className="flex items-center gap-[5px]">
              <RiWhatsappFill
                className="text-[#25d366] "
                width={22}
                height={22}
              />
              <h2 className="text-[1.2rem] font-semibold">WhatsApp number </h2>
            </div>
            <ForPremium isBlur={paymentDetails?.subscriptionStatus !== 1}>
              <p>
                {paymentDetails?.subscriptionStatus === 1 ? (
                  data?.whatsapp_no === "+" || !data.whatsapp_no || data.whatsapp_no === "" ? (
                    "---"
                  ) : (
                    <span
                      style={{
                        color: "blue",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() => handleContactRedirect("whatsapp", data.whatsapp_no)}>
                      {data?.whatsapp_no}
                    </span>
                  )
                ) : (
                  "+971 000000000"
                )}
              </p>
            </ForPremium>
          </div>
          {/* Botim number */}
          <div className="grid border-b border-black-300 grid-cols-1 sm:grid-cols-[2fr_1fr]">
            <div className="flex items-center gap-[5px]">
              <MdOutlineVideoCall
                className="text-[#00aff0] "
                width={22}
                height={22}
              />
              <h2 className="text-[1.2rem] font-semibold">Botim number</h2>
            </div>
            <ForPremium isBlur={paymentDetails?.subscriptionStatus !== 1}>
              <p>
                {paymentDetails?.subscriptionStatus === 1 ? (
                  data?.botim_number === "+" || !data.botim_number || data.botim_number === "" ? (
                    "---"
                  ) : (
                    <span
                      style={{
                        color: "blue",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() => handleContactRedirect("botim", data.botim_number)}>
                      {data?.botim_number}
                    </span>
                  )
                ) : (
                  "+971 000000000"
                )}
              </p>
            </ForPremium>
          </div>
          {/* mail */}
          <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr]">
            <div className="flex items-center gap-[5px]">
              <MdOutlineMail
                className="text-[#FF0000] "
                width={22}
                height={22}
              />
              <h2 className="text-[1.2rem] font-semibold">Email</h2>
            </div>
            <ForPremium isBlur={paymentDetails?.subscriptionStatus !== 1}>
              <p>{paymentDetails?.subscriptionStatus === 1 ? data?.email || " -- " : "PleaseSubscribe@gmail.com"}</p>
            </ForPremium>
          </div>
        </div>

        {/* <Hide above="sm">
          <Box
            gap="10px"
            p={{ base: "15px", md: "30px" }}
            bg="white"
            borderRadius="15px">
            <Heading
              size="md"
              color="brand.primary.400">
              About Me
            </Heading>
            <Text
              variant="description"
              dangerouslySetInnerHTML={{ __html: data?.notes }}
            />
          </Box>
        </Hide> */}

        {/* <Grid
          gap="10px"
          p={{ base: "15px", md: "30px" }}
          bg="white"
          borderRadius="15px">
          <Heading
            size="md"
            color="brand.primary.400">
            Visa Details
          </Heading>
          <Grid gridTemplateColumns={{ base: "1fr", sm: "2fr 1fr" }}>
            <Heading size="sm">Visa status</Heading>
            <Text>{data?.visa_status}</Text>
          </Grid>
          {data?.visa_status !== "To Be Cancel" && (
            <Grid gridTemplateColumns={{ base: "1fr", sm: "2fr 1fr" }}>
              <Heading size="sm">Visa Expiry</Heading>
              <Text>{data?.visa_expire?.split("-").reverse().join("-")}</Text>
            </Grid>
          )}
        </Grid> */}

        {/* <Hide above="lg">
          <Grid
            borderRadius="15px"
            gap="15px"
            p={{ base: "15px", md: "30px" }}
            bg="white">
            <Heading
              size="md"
              color="brand.primary.400">
              Employment History
            </Heading>
            <Accordion
              allowToggle
              allowMultiple>
              {data?.employmentHistory?.map((item) => {
                return (
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left">
                          {item.title}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Heading size="sm">Location</Heading>
                      <Text>{item?.location}</Text>
                      <Heading size="sm">Duration</Heading>
                      <Text>{item?.experiance} yr</Text>
                      <Heading size="sm">Reason for Leaving</Heading>
                      <Text>{item?.reason_leaving}</Text>
                      <Heading size="sm">Description</Heading>
                      <Text
                        variant="description"
                        dangerouslySetInnerHTML={{
                          __html: item?.job_description,
                        }}
                      />
                    </AccordionPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </Grid>
        </Hide> */}

        {/* yoututbe video  */}
        {/* <Hide below="lg">
          {flag && getEmbedUrl(data?.youtube_link) && (
            <Grid
              gap="10px"
              p={{ base: "15px", md: "30px" }}
              bg="white"
              borderRadius="15px">
              <Heading
                size="md"
                color="brand.primary.400">
                Proposal Video
              </Heading>
              <AspectRatio
                w="100%"
                ratio={4 / 3}>
                <iframe
                  title="naruto"
                  src={`${getEmbedUrl(data?.youtube_link)}?var=${Math.random()}`}
                  allowFullScreen
                />
              </AspectRatio>
            </Grid>
          )}
        </Hide> */}

        {/* skill */}
        {/* <Grid
          gap="10px"
          p={{ base: "15px", md: "30px" }}
          bg="white"
          borderRadius="15px">
          <Heading
            size="md"
            color="brand.primary.400">
            Skills
          </Heading>
          <Flex
            gap="20px"
            flexWrap="wrap"
            justifyContent="space-between">
            {alternateSort(data.skills).map((item) => (
              <SkillsLanguages text={item} />
            ))}
          </Flex>
        </Grid> */}

        {/* language */}
        {/* <Grid
          gap="10px"
          p={{ base: "15px", md: "30px" }}
          bg="white"
          borderRadius="15px">
          <Heading
            size="md"
            color="brand.primary.400">
            Language
          </Heading>
          <Flex
            gap="15px"
            flexWrap="wrap">
            {data?.language?.map((item) => (
              <Grid
                p="10px"
                border="1px solid"
                borderRadius="10px"
                borderColor="brand.primary.400">
                <Text as="b">{item?.name}</Text>
                <HStack>
                  <Text>Read :</Text>
                  <Text>{languageLevel[item?.read]}</Text>
                </HStack>
                <HStack>
                  <Text>Write :</Text>
                  <Text>{languageLevel[item?.write]}</Text>
                </HStack>
                <HStack>
                  <Text>Speak :</Text>
                  <Text>{languageLevel[item?.speak]}</Text>
                </HStack>
              </Grid>
            ))}
          </Flex>
        </Grid> */}
        {/* {paymentDetails?.subscriptionStatus !== 1 && (
          <Button
            variant="solid"
            onClick={handleHire}>
            Hire Now
          </Button>
        )} */}
      </div>
    </div>
  );
};

export default RightSection;
