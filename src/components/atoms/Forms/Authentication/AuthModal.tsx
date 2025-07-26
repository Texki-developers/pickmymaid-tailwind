"use client";

import React, { useEffect } from "react";
import AuthModal from "../../AuthModal/AuthModal";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";
import ForgotPasswordForm from "./ForgotPasswordForm/ForgotPasswordForm";
import { useDisclosure } from "@chakra-ui/react";
import { setAuthModal } from "@/lib/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { usePathname, useSearchParams } from "next/navigation";
import { getUserPaymentDetails } from "@/lib/features/payment/paymentAction";
import { useRouter } from "next/navigation";
import useCustomToast from "@/lib/hooks/useCustomToast";

const AuthModalWrapper = () => {
  const dispatch = useAppDispatch();
  const toast = useCustomToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const authModal = useAppSelector((state) => state.auth.authModal);
  const user = useAppSelector((state) => state?.auth?.user);
  const { redirection } = useAppSelector((state) => state.utils);
  const paymentDetails = useAppSelector(
    (state) => state.payment.paymentDetails
  );
  const handleModalClose = () => {
    onClose();
    dispatch(setAuthModal(null));
  };

  useEffect(() => {
    if (authModal) {
      onOpen();
    }
  }, [authModal]);

  useEffect(() => {
    if (
      user &&
      !pathname.includes("payment-success") &&
      !pathname.includes("payment-success-google") &&
      !pathname.includes("payment-success-fb") &&
      !pathname.includes("payment-failed")
    ) {
      dispatch(getUserPaymentDetails());
    }
  }, [user, pathname]);

  useEffect(() => {
    if (searchParams) {
      const source = searchParams.get("utm_source");
      if (source) {
        localStorage.setItem("source", source);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    let isUnlock = localStorage.getItem("isUnlock");
    if (
      paymentDetails?.subscriptionStatus !== 1 &&
      !redirection &&
      isUnlock === "clicked"
    ) {
      router.push("/pricing");
      localStorage.setItem("isUnlock", "");
      toast(
        "Great!",
        "Just one more step: Please choose your payment plan.",
        "info"
      );
    } else if (user) {
      localStorage.setItem("isUnlock", "");
    }
  }, [user]);

  return (
    <AuthModal isOpen={isOpen} onClose={handleModalClose}>
      {authModal === "login" || authModal === "login-form" ? (
        <LoginForm />
      ) : authModal === "signup" ? (
        <RegisterForm />
      ) : authModal === "forget" ? (
        <ForgotPasswordForm />
      ) : null}
    </AuthModal>
  );
};

export default AuthModalWrapper;
