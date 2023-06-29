import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import "bootstrap/dist/css/bootstrap.min.css";
export const metadata = {
  title: "Inaguration",
  description:
    "Code for GovTech (C4GT) has been introduced as India's first program, aimed at creating a community that can build and contribute to global Digital Public Goods (DPGs).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
