"use client"
import "./globals.css";
import { Footer, Navbar } from "@/component/components";
import React, { PropsWithChildren } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Inaguration",
  description:
    "Code for GovTech (C4GT) has been introduced as India's first program, aimed at creating a community that can build and contribute to global Digital Public Goods (DPGs).",
};

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <title>Code for GovTech</title>
      <body>
        <Navbar />
        {children}
        <hr></hr>
        <Footer />
      </body>
    </html>
  );
};
export default Layout;

