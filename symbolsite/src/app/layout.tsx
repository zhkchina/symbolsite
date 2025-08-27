import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://symbolsite.vercel.app"), // 替换为你的正式域名
  title: {
    default: "符号大全｜一键复制特殊符号与表情",
    template: "%s｜符号大全",
  },
  description: "收录星号、爱心等常用符号，支持一键复制，移动端/PC 自适应展示。",
  keywords: ["符号", "特殊字符", "特殊符号", "表情", "一键复制", "爱心符号", "星号"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "符号大全｜一键复制特殊符号与表情",
    description: "收录星号、爱心等常用符号，支持一键复制。",
    url: "/",
    siteName: "SymbolSite",
    locale: "zh_CN",
    type: "website",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "符号大全｜一键复制特殊符号与表情",
    description: "收录星号、爱心等常用符号，支持一键复制。",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <header className="border-b" role="banner">
          <div className="mx-auto max-w-screen-xl px-4 py-3">
            <div className="text-lg font-medium">
              <a href="/" aria-label="SymbolSite 首页">SymbolSite</a>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-screen-xl px-4 py-6">{children}</main>

        <footer className="border-t">
          <div className="mx-auto max-w-screen-xl px-4 py-3 text-sm text-gray-500">
            © {new Date().getFullYear()} SymbolSite
          </div>
        </footer>
      </body>
    </html>
  );
}
