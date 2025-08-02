"use client";
import dynamic from "next/dynamic";
import React from "react";
const PrimaryTopNavClient = dynamic(() => import("./PrimaryTopNavClient"), {
  ssr: false,
});

export default function PrimaryTopNavWrapper() {
  return <PrimaryTopNavClient />;
}
