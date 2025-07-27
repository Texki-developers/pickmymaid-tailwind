"use client";
import dynamic from "next/dynamic";
import React from "react";
const PrimaryTopNav = dynamic(() => import("./PrimaryTopNav"), { ssr: false });

export default function PrimaryTopNavWrapper() {
  return <PrimaryTopNav />;
}
