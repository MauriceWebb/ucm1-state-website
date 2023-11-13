"use client";

import CompanyTable, { companiesTableColumns } from "@/components/CompanyTable";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cityCopy } from "./_data/copy";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const p = usePathname();
  const city = p.replace("/city/", "") as keyof typeof cityCopy;
  const data = cityCopy[city];
  const subSections = [data.geo, data.demo, data.eco];

  return (
    <main className="flex-grow flex flex-col mx-auto px-3 lg:px-0">
      <section className="mt-12 flex flex-col my-6 space-y-6">
        <h3 className="bg-[#00297b] text-white py-2 px-6 rounded-xl text-xl">
          {data.title}
        </h3>
        <div
          className={`h-[450px] bg-gray-200 rounded-xl`}
          style={{
            backgroundImage: `url("/${data.heroImg.src}")`,
            backgroundPosition: data.heroImg.position || "0% 20%",
            backgroundSize: "cover",
          }}
        ></div>
        <p className="leading-normal whitespace-pre-line">{data.intro}</p>
      </section>

      <section className="my-6 w-full">
        <ul className="flex flex-col lg:flex-row flex-wrap w-full lg:justify-between space-y-3 lg:space-y-0">
          {data.statList.map((item, k) => (
            <li key={k} className="flex space-x-4">
              <div className="rounded-xl h-[50px] w-[50px] bg-[#00297b] text-white flex justify-center items-center text-3xl">
                {item.icon}
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-xs uppercase font-bold">{item.label}</h4>
                <p className="text-sm">{item.stat}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex items-center my-6">
        <CompanyTable columns={companiesTableColumns} data={data.companyList} />
      </section>

      <section className="flex flex-col my-6 space-y-10">
        {subSections.map((section, k) => {
          const slug = section.title.toLowerCase().replace(/\s+/g, "-");
          return (
            <div
              key={k}
              className="flex flex-col xl:flex-row xl:space-x-6 whitespace-pre-line"
            >
              {k % 2 === 0 ? (
                <>
                  <div>
                    <h3
                      id={slug}
                      className="bg-[#00297b] text-white py-2 px-6 rounded-xl text-xl min-w-fit w-3/5 mb-6"
                    >
                      <Link href={"#" + slug}>{section.title}</Link>
                    </h3>
                    <div
                      className="basis-2/5 w-3/5 bg-gray-200 rounded-xl min-h-[250px] hidden md:block float-right ml-4 mb-3"
                      style={
                        section.img
                          ? {
                              backgroundImage: `url("/${section.img.src}")`,
                              backgroundPosition: "30% 60%",
                              backgroundSize: "cover",
                            }
                          : undefined
                      }
                    ></div>
                    <div
                      className="basis-2/5 w-full h-full flex-grow bg-gray-200 rounded-xl min-h-[250px] md:hidden mb-6"
                      style={
                        section.img
                          ? {
                              backgroundImage: `url("/${section.img.src}")`,
                              backgroundPosition: "30% 60%",
                              backgroundSize: "cover",
                            }
                          : undefined
                      }
                    ></div>
                    <p className="leading-normal pb-6 lg:pb-0">
                      {section.text}
                    </p>
                    <Link
                      href={section.button.href}
                      target={
                        section.button.href !== "/" ? "_blank" : undefined
                      }
                      className="py-2 px-4 bg-[#00297b] text-white rounded-xl lg:float-right"
                    >
                      {section.button.text}
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3
                      id={slug}
                      className="bg-[#00297b] text-white py-2 px-6 rounded-xl text-xl min-w-fit w-3/5 mb-6 ml-auto"
                    >
                      <Link href={"#" + slug}>{section.title}</Link>
                    </h3>
                    <div
                      className="basis-2/5 w-3/5 bg-gray-200 rounded-xl min-h-[250px] hidden md:block float-left mr-4 mb-3"
                      style={
                        section.img
                          ? {
                              backgroundImage: `url("/${section.img.src}")`,
                              backgroundPosition: "30% 60%",
                              backgroundSize: "cover",
                            }
                          : undefined
                      }
                    ></div>
                    <div
                      className="basis-2/5 w-full h-full flex-grow bg-gray-200 rounded-xl min-h-[250px] md:hidden mb-6"
                      style={
                        section.img
                          ? {
                              backgroundImage: `url("/${section.img.src}")`,
                              backgroundPosition: "30% 60%",
                              backgroundSize: "cover",
                            }
                          : undefined
                      }
                    ></div>
                    <p className="leading-normal pb-6 lg:pb-0">
                      {section.text}
                    </p>
                    <Link
                      href={section.button.href}
                      target={
                        section.button.href !== "/" ? "_blank" : undefined
                      }
                      className="py-2 px-4 bg-[#00297b] text-white rounded-xl lg:float-right"
                    >
                      {section.button.text}
                    </Link>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </section>

      <section className="flex flex-col my-6 mb-12 space-y-6">
        <p className="leading-normal whitespace-pre-line">{data.outro}</p>
      </section>
    </main>
  );
}
