import type { Metadata } from "next";
import { Poppins, Readex_Pro } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/(layout)/Sidebar/Sidebar";
import { sidebarList } from "@/constants/constants";
import MobileNavigationBar from "@/components/(layout)/Sidebar/mobile/MobileNavigationBar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const readexPro = Readex_Pro({
  variable: "--font-readex-pro",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Frontend Task",
  description: "Frontend Task",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${readexPro.variable} antialiased`}>
        <div className="min-h-screen p-4 md:p-8 grid grid-cols-12 md:gap-12 lg:items-center ">
          {/* SIDEBAR */}
          <div className="hidden lg:block lg:col-span-3  2xl:col-span-2">
            <Sidebar />
          </div>

          {/* CONTENT */}
          <div className="col-span-12 lg:col-span-9  2xl:col-span-10">
            {children}
          </div>

          {/* MOBILE NAVIGATION BAR */}
          <ul className="lg:hidden w-[90%] mx-auto pb-6 fixed bottom-0 left-0 right-0 bg-white z-50 base-shadow flex items-center justify-center md:justify-end rounded-t-2xl">
            {sidebarList.map((item, i) => (
              <MobileNavigationBar key={i} {...item} />
            ))}
          </ul>
        </div>
      </body>
    </html>
  );
}
