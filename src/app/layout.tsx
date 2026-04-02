import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FinOS - Hệ Điều Hành Tài Chính",
  description:
    "Cung cấp năng lực cho thế hệ sản phẩm & dịch vụ tài chính kỹ thuật số tại Đông Nam Á",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${spaceGrotesk.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
