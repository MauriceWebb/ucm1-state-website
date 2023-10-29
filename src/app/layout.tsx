import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import { VaFlagVirtusIcon } from "@/assets/icons/flag-virginia-icon-virtus";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Virginia State website",
  description: "State website for Virginia",
};

const cityLinks = [
  { label: "Richmond", href: "/city/richmond" },
  { label: "Virginia Beach", href: "/city/virginia-beach" },
  { label: "Alexandria", href: "/city/alexandria" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-screen w-full justify-between`}
      >
        <header className="bg-[#00297b] min-h-[60px] py-6 text-white">
          <ul className="container flex flex-wrap justify-between items-center h-full mx-auto">
            <li>
              <Link href={"/"} className="flex items-center font-semibold">
                <VaFlagVirtusIcon height={40} width={30} />
                <span className="ml-2">VIRGINIA</span>
              </Link>
            </li>
            <li>
              <nav>
                <ul className="flex flex-wrap justify-between lg:space-x-2">
                  {cityLinks.map((city, k) => (
                    <li key={k}>
                      <Link
                        href={city.href}
                        className="uppercase px-3 py-2 font-semibold"
                      >
                        {city.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </li>
          </ul>
        </header>
        {children}
        <footer className="bg-[#00297b] min-h-[200px] text-white py-6">
          <ul className="container flex flex-col h-full mx-auto">
            <li>
              <Link
                href={"/"}
                className="flex items-center w-fit font-semibold"
              >
                <VaFlagVirtusIcon height={40} width={30} />
                <span className="ml-2">VIRGINIA</span>
              </Link>
            </li>
            <li>
              <nav className="ml-6">
                <ul className="flex flex-col space-y-2">
                  {cityLinks.map((city, k) => (
                    <li key={k}>
                      <Link
                        href={city.href}
                        className="uppercase px-3 py-2 font-semibold"
                      >
                        {city.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <br />
                <br />
                <p className="ml-2">
                  Developed by{" "}
                  <Link
                    href={"https://www.webbcraft.dev/about"}
                    target="_blank"
                  >
                    Maurice Webb
                  </Link>
                </p>
              </nav>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
