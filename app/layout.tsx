import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ComingSoonToast } from "@/components/ComingSoonToast";
import "./globals.css";

export const metadata: Metadata = {
  title: "白先生 AI·IP | 把 AI 变成业务能力",
  description: "白先生 AI·IP 个人官网：企业AI内训、AI工作流与智能体落地、线下课、案例与需求表单。",
  metadataBase: new URL("https://bai-ai-ip.local")
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f5f7"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <ComingSoonToast />
      </body>
    </html>
  );
}
