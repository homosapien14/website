import "./globals.css";
import { Footer, Navbar } from "@/component/components";
import React, { PropsWithChildren } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Code for GovTech | Digital Public Goods',
}

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
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

