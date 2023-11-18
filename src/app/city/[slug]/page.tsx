/* eslint-disable @next/next/no-img-element */
import CompanyTable, { companiesTableColumns } from "@/components/CompanyTable";
import Link from "next/link";
import arlington1 from "../../../../public/arlington-1.webp";
import arlington2 from "../../../../public/arlington-2.jpeg";
import arlington3 from "../../../../public/arlington-3.jpeg";
import arlington4 from "../../../../public/arlington-4.jpg";
import richmond1 from "../../../../public/richmond-1.jpg";
import richmond3 from "../../../../public/richmond-3.jpg";
import richmond4 from "../../../../public/richmond-4.jpg";
import richmond5 from "../../../../public/richmond-5.jpg";
import vaBeach2 from "../../../../public/va-beach-2.webp";
import vaBeach3a from "../../../../public/va-beach-3.jpg";
import vaBeach3b from "../../../../public/va-beach-3.webp";
import vaBeach4 from "../../../../public/va-beach-4.jpeg";
import { cityCopy } from "../_data/copy";

const cities = ["richmond", "virginia-beach", "arlington"];
const images = {
  "richmond-1.jpg": richmond1,
  "richmond-4.jpg": richmond4,
  "richmond-3.jpg": richmond3,
  "richmond-5.jpg": richmond5,
  "va-beach-3.jpg": vaBeach3a,
  "va-beach-2.webp": vaBeach2,
  "va-beach-3.webp": vaBeach3b,
  "va-beach-4.jpeg": vaBeach4,
  "arlington-1.webp": arlington1,
  "arlington-2.jpeg": arlington2,
  "arlington-3.jpeg": arlington3,
  "arlington-4.jpg": arlington4,
};

export async function generateStaticParams() {
  return cities.map((city) => ({ slug: city }));
}

export default function Page({ params }: any) {
  const { slug } = params;
  if (!slug) {
    return null;
  }
  const data = cityCopy[slug as keyof typeof cityCopy];
  const subSections = [data.geo, data.demo, data.eco];

  return (
    <main className="flex-grow flex flex-col mx-auto px-3 lg:px-0">
      <section className="mt-12 flex flex-col my-6 space-y-6">
        <h3 className="bg-[#00297b] text-white py-2 px-6 rounded-xl text-xl">
          {data.title}
        </h3>
        <img
          src={images[data.heroImg.src as keyof typeof images].src}
          alt={data.heroImg.altText}
          className="md:h-[450px] md:w-auto bg-gray-200 rounded-xl object-cover"
          style={{
            objectPosition: data.heroImg.position || "0% 20%",
          }}
        />
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

      <section className="my-6 w-full">
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
                    <img
                      src={images[section.img.src as keyof typeof images].src}
                      alt={section.img.altText}
                      className="w-3/5 h-auto bg-gray-200 rounded-xl hidden md:block float-right ml-4 mb-3 object-cover"
                      style={{
                        objectPosition: "30% 60%",
                      }}
                    />
                    <img
                      src={images[section.img.src as keyof typeof images].src}
                      alt={section.img.altText}
                      className="w-full flex-grow bg-gray-200 rounded-xl h-auto md:hidden mb-6 object-cover"
                      style={{
                        objectPosition: "30% 60%",
                      }}
                    />
                    <p className="leading-normal pb-6 lg:pb-0">
                      {section.text}
                    </p>
                    <Link
                      href={section.button.href}
                      target={
                        section.button.href !== "/" ? "_blank" : undefined
                      }
                      className="py-2 px-4 bg-[#00297b] text-white rounded-xl lg:float-right mt-3"
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
                    <img
                      src={images[section.img.src as keyof typeof images].src}
                      alt={section.img.altText}
                      className="w-3/5 bg-gray-200 rounded-xl h-auto hidden md:block float-left mr-4 mb-3 object-cover"
                      style={{
                        objectPosition: "30% 60%",
                      }}
                    />
                    <img
                      src={images[section.img.src as keyof typeof images].src}
                      alt={section.img.altText}
                      className="w-full flex-grow bg-gray-200 rounded-xl h-auto md:hidden mb-6 object-cover"
                      style={{
                        objectPosition: "30% 60%",
                      }}
                    />
                    <p className="leading-normal pb-6 lg:pb-0">
                      {section.text}
                    </p>
                    <Link
                      href={section.button.href}
                      target={
                        section.button.href !== "/" ? "_blank" : undefined
                      }
                      className="py-2 px-4 bg-[#00297b] text-white rounded-xl lg:float-right mt-3"
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
