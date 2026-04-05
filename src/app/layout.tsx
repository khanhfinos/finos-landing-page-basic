import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FloatingChatWidget } from "@/components/ui/floating-chat-widget-shadcnui";

const spaceGrotesk = localFont({
  variable: "--font-space-grotesk",
  display: "swap",
  src: [
    { path: "./fonts/PlusJakartaSans-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/PlusJakartaSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/PlusJakartaSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/PlusJakartaSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/PlusJakartaSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/PlusJakartaSans-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
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
      <body>
        {children}
        <FloatingChatWidget />
      </body>
    </html>
  );
}
