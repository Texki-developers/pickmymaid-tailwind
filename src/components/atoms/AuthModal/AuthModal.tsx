"use client";
import registerBanner from "@/assets/images/AuthPages/register-banner.png";
import { ReactNode, useEffect } from "react";
import { RiCloseLine } from "../Icons/Icons";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import useCustomToast from "@/lib/hooks/useCustomToast";
import { resetAuthState, setAuthModal } from "@/lib/features/auth/authSlice";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Image from "../NextImageWrapper/Image";

export default function AuthModal({ isOpen, onClose, children }: { isOpen: boolean; onClose: any; children: ReactNode }) {
  const { status, message } = useAppSelector((state) => state.auth);
  const customToast = useCustomToast();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status !== "idle") {
      if (status === "success" && message) {
        customToast("Great!", message as string, "success");
        onClose();
        setAuthModal(null);
      } else if (status === "error" && message) {
        customToast("Ugh no!", message as string, "error");
      }
      dispatch(resetAuthState());
    }
  }, [status, message]);
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-1600">
      <DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-xs" />
      <div className="fixed inset-0 flex w-screen items-center justify-center">
        <DialogPanel className="max-w-[60rem] w-[100%]">
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute aspect-square rounded-[50%] bg-[rgba(0,0,0,0.5)] right-0 lg:right-[-0.5rem] cursor-pointer top-[-0.5rem] lg:top-0 p-1
           [transform:translateY(-100%)] lg:[transform:translateX(100%)]">
              <RiCloseLine className="w-6 text-white" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full bg-white rounded-[15px]">
              <div className="flex flex-col p-[1.5rem] gap-[1rem] md:gap-[2rem] py-[2rem]">{children}</div>
              <Image
                src={registerBanner.src}
                alt="Quality Maids in Pickmymaid"
                className="hidden md:block w-[100%] h-[100%] object-cover object-center filter brightness-[0.7] rounded-[0_15px_15px_0]"
              />
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
    // <Modal
    //   isOpen={isOpen}
    //   isCentered
    //   size="4xl"
    //   blockScrollOnMount
    //   closeOnOverlayClick={false}
    //   onClose={onClose}>
    //   <ModalOverlay
    //     backdropFilter="blur(4px)"
    //     zIndex={1000}
    //     bg="rgba(28,39,48,.5)"
    //   />
    //   <ModalContent
    //     zIndex={999999}
    //     mx="1rem"
    //     w="max-content"
    //     borderRadius="15px"
    //     p={0}>
    //     <Center
    //       w="2rem"
    //       aspectRatio={1 / 1}
    //       borderRadius="50%"
    //       pos="absolute"
    //       bg="rgba(0,0,0,0.5)"
    //       right={{ base: 0, lg: "-0.5rem" }}
    //       cursor="pointer"
    //       top={{ base: "-0.5rem", lg: 0 }}
    //       transform={{ base: "translateY(-100%)", lg: "translateX(100%)" }}
    //       onClick={() => {
    //         onClose();
    //         localStorage.setItem("isUnlock", "");
    //       }}>
    //       <Icon
    //         as={RiCloseLine}
    //         fontSize="1.5rem"
    //         color="white"
    //       />
    //     </Center>
    //     <ModalBody p={0}>
    //       <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
    //         <VStack
    //           p="1.5rem"
    //           gap={{ base: "1rem", md: "2rem" }}
    //           py="2rem">
    //           {children}
    //           {/* <HStack
    //             w='100%'
    //             py='0.3rem'
    //             rounded='10px'
    //             // bg='#8080803b'
    //             justifyContent='space-between'
    //           >
    //             <Image
    //               src={reviewImage}
    //               w={{ base: '5rem', sm: '8rem' }}
    //               h='auto'
    //             />
    //             <Image
    //               src={supportImage}
    //               w={{ base: '5rem', sm: '8rem' }}
    //               h='auto'
    //             />
    //           </HStack> */}
    //         </VStack>
    //         <Hide below="md">
    //           <Image
    //             src={registerBanner.src}
    //             alt="Register Now"
    //             objectFit="cover"
    //             objectPosition="center"
    //             filter="brightness(0.7)"
    //             w="100%"
    //             h="100%"
    //             borderRadius="0 15px 15px 0"
    //           />
    //         </Hide>
    //       </Grid>
    //     </ModalBody>
    //   </ModalContent>
    // </Modal>
  );
}
