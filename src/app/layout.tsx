"use client";

import { VaFlagVirtusIcon } from "@/assets/icons/flag-virginia-icon-virtus";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const cityLinks = [
  { label: "Richmond", href: "/city/richmond", title: "City of Richmond" },
  {
    label: "Virginia Beach",
    href: "/city/virginia-beach",
    title: "City of Virginia Beach",
  },
  { label: "Arlington", href: "/city/arlington", title: "City of Arlington" },
];

const meta = {
  virginia: {
    title: "State of Virginia",
    desc: "Website for the state of Virginia, created by Maurice Webb.",
  },
  richmond: {
    title: "City of Richmond",
    desc: "The state's capitol",
  },
  "virginia-beach": {
    title: "City of Virginia Beach",
    desc: "",
  },
  arlington: {
    title: "City of Arlington",
    desc: "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const p = usePathname();
  const k = p === "/" ? "virginia" : (p.split("/")[2] as keyof typeof meta);
  return (
    <html lang="en">
      <head>
        <title>{meta[k]?.title || ""}</title>
        <meta
          name="description"
          content={meta[k]?.desc || meta[k]?.title || ""}
        />
      </head>
      <body
        className={`${inter.className} flex flex-col min-h-screen w-full justify-between`}
      >
        <header className="bg-[#00297b] min-h-[60px] py-6 text-white px-3 lg:px-0">
          <ul className="container max-w-[960px] flex flex-col sm:flex-row sm:flex-wrap justify-between sm:items-center h-full sm:mx-auto space-y-3">
            <li>
              <Link
                href={"/"}
                className={`flex items-center font-semibold ${
                  p !== "/" && "hover:text-red-600"
                }`}
              >
                <VaFlagVirtusIcon height={40} width={30} />
                <span className="ml-2">VIRGINIA</span>
              </Link>
            </li>
            <li>
              <nav>
                <ul className="flex flex-col sm:flex-row flex-wrap justify-between sm:space-x-2">
                  {cityLinks.map((city, k) => {
                    const isActive = p
                      .toLowerCase()
                      .endsWith(city.label.toLowerCase().replace(/\s+/g, "-"));

                    return (
                      <li key={k}>
                        <Link
                          href={city.href}
                          className={`uppercase px-3 py-2 font-semibold ${
                            isActive ? "border-b-4 border-red-600" : ""
                          } ${!isActive && "hover:text-red-600"}`}
                        >
                          {city.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </li>
          </ul>
        </header>
        {children}
        <footer className="bg-[#00297b] min-h-[200px] text-white py-6 px-3 sm:px-0">
          <ul className="container max-w-[960px] flex flex-col h-full mx-auto space-y-3">
            <li>
              <Link
                href={"/"}
                className={`flex items-center font-semibold ${
                  p !== "/" && "hover:text-red-600"
                }`}
              >
                <VaFlagVirtusIcon height={40} width={30} />
                <span className="ml-2">VIRGINIA</span>
              </Link>
            </li>
            <li>
              <nav className="ml-0">
                <ul className="container max-w-[960px] flex flex-col sm:flex-row sm:flex-wrap justify-between sm:items-center h-full sm:mx-auto space-y-3">
                  <li>
                    <ul className="flex flex-col sm:flex-row flex-wrap justify-between sm:space-x-2">
                      {cityLinks.map((city, k) => {
                        const isActive = p
                          .toLowerCase()
                          .endsWith(
                            city.label.toLowerCase().replace(/\s+/g, "-")
                          );

                        return (
                          <li key={k}>
                            <Link
                              href={city.href}
                              className={`uppercase px-3 py-2 font-semibold ${
                                isActive ? "border-b-4 border-red-600" : ""
                              } ${!isActive && "hover:text-red-600"}`}
                            >
                              {city.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                </ul>
                <p className="ml-3 mt-4">
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
