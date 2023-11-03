"use client";
import QuestionForm from "@/components/QuestionForm";
import Image from "next/image";
import Link from "next/link";
import { stateCopy as data } from "./_data/copy";

const subSections = [data.geo, data.demo, data.eco];

export default function Home() {
  return (
    <main className="flex-grow container flex flex-col mx-auto px-3 sm:px-0">
      <section className="flex flex-col lg:flex-row lg:space-x-6 my-6 mt-12">
        <div className="w-full lg:w-1/2 min-h-[350px] flex-grow bg-green-200 rounded-xl overflow-hidden lg:flex mb-6 lg:mb-0 hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3219325.5440382487!2d-79.42091505!3d38.00343195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884cd670bdbcb2cd%3A0xc04e4149b746a695!2sVirginia!5e0!3m2!1sen!2sus!4v1698552744042!5m2!1sen!2sus"
            // width="100%"
            // height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="flex-grow"
          ></iframe>
        </div>
        <aside className="w-full lg:basis-1/2 lg:w-1/2 flex-grow flex flex-col justify-between space-y-3">
          <div className="space-y-3">
            <h3 className="bg-[#00297b] text-white py-2 px-6 rounded-xl text-xl mb-6">
              {data.aside.title}
            </h3>
            <div className="w-full lg:w-1/2 min-h-[350px] flex-grow bg-green-200 rounded-xl overflow-hidden flex mb-6 lg:mb-0 lg:hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3219325.5440382487!2d-79.42091505!3d38.00343195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884cd670bdbcb2cd%3A0xc04e4149b746a695!2sVirginia!5e0!3m2!1sen!2sus!4v1698552744042!5m2!1sen!2sus"
                // width="100%"
                // height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="flex-grow"
              ></iframe>
            </div>
            <p className="">{data.aside.brief}</p>
          </div>
          <div className="flex flex-col space-y-3">
            <h4 className="font-semibold text-lg">Top 5 places to visit:</h4>
            <div className="flex flex-col xl:flex-row justify-between">
              <ol type="1" className="list-decimal ml-5 mb-6 xl:mb-0">
                {data.aside.list.map((a, k) => (
                  <li key={k}>{a}</li>
                ))}
              </ol>
              <Link
                href={data.aside.button.href}
                target={data.aside.button.href !== "/" ? "_blank" : undefined}
                className="py-2 px-4 bg-red-600 text-white rounded-xl mt-4 md:mt-auto w-fit"
              >
                {data.aside.button.text}
              </Link>
            </div>
          </div>
        </aside>
      </section>

      <section className="flex min-h-[80px] items-center my-6">
        <ul className="flex flex-wrap items-center w-full justify-around- overflow-x-auto- space-y-3 xl:space-y-0">
          {data.statList.map((item, k) => (
            <li key={k} className="flex basis-64 w-64 space-x-4">
              <div className="rounded-xl h-[60px] w-[60px] bg-[#00297b] text-white flex justify-center items-center text-3xl">
                {item.icon}
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-lg font-semibold">{item.label}</h4>
                <p>{item.stat}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col my-6 space-y-6">
        <div
          className={`h-[450px] bg-gray-200 rounded-xl`}
          style={{
            backgroundImage: `url("/${data.hero.img.src}")`,
            backgroundPosition: "30% 25%",
            backgroundSize: "cover",
          }}
        ></div>
        <p className="leading-normal whitespace-pre-line">{data.intro}</p>
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
                  <div className="flex flex-col space-y-4 basis-3/5">
                    <h3
                      id={slug}
                      className="bg-[#00297b] text-white py-2 px-6 rounded-xl text-xl w-full lg:w-4/5"
                    >
                      <Link href={"#" + slug}>{section.title}</Link>
                    </h3>
                    <div
                      className="basis-2/5 w-full flex-grow bg-gray-200 rounded-xl min-h-[250px] xl:hidden"
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
                    <div className="">
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
                  </div>
                  <div
                    className="basis-2/5 w-full flex-grow bg-gray-200 rounded-xl min-h-[250px] hidden xl:block"
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
                </>
              ) : (
                <>
                  <div
                    className="basis-2/5 w-full flex-grow bg-gray-200 rounded-xl min-h-[250px] hidden xl:block"
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
                  <div className="flex flex-col space-y-4 basis-3/5">
                    <h3
                      id={slug}
                      className="bg-[#00297b] text-white py-2 px-6 rounded-xl text-xl w-full lg:w-4/5"
                    >
                      <Link href={"#" + slug}>{section.title}</Link>
                    </h3>
                    <div
                      className="basis-2/5 w-full flex-grow bg-gray-200 rounded-xl min-h-[250px] xl:hidden"
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
                    <div className="">
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
                  </div>
                </>
              )}
            </div>
          );
        })}
      </section>

      <section className="flex flex-col my-6 space-y-10">
        <h3 className="bg-[#00297b] text-white py-2 px-6 rounded-xl text-xl w-full lg:w-5/12">
          Government Officials
        </h3>
        <ul className="flex flex-col lg:flex-row lg:space-x-6 justify-between space-y-6 lg:space-y-0">
          {data.officialsList.map((item, k) => (
            <li
              key={k}
              className="flex flex-row lg:flex-col basis-[32%] lg:space-y-6"
            >
              <div
                className={`h-[220px] w-2/5 lg:w-full bg-gray-200 rounded-xl lg:rounded-none lg:rounded-tl-xl lg:rounded-tr-xl relative overflow-hidden`}
              >
                <Image
                  src={item.img}
                  width={200}
                  height={150}
                  alt={`Picture of ${item.title} ${item.name}.`}
                  className="h-full w-full object-center object-scale-down absolute z-10"
                />
                <div
                  className="h-full w-full blur-sm"
                  style={{
                    backgroundImage: `url(${item.url})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
              <div className="px-6 flex flex-col space-y-3 w-3/5 lg:w-full border">
                <div className="flex justify-between">
                  <h4>{item.title}</h4>
                  <Link
                    href={item.href}
                    target="_blank"
                    className="text-[#00297b]"
                  >
                    {item.href.split("https://www.")[1]}
                  </Link>
                </div>
                <div>
                  <p className="text-2xl font-semibold">{item.name}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Link
          href="/"
          className="py-2 px-4 bg-red-600 text-white rounded-xl w-fit"
        >
          Discover more
        </Link>
      </section>

      <section className="flex flex-col my-6 space-y-6">
        <p className="leading-normal whitespace-pre-line">{data.outro}</p>
      </section>

      <section className="flex flex-col xl:flex-row my-6 mb-12 justify-between items-start lg:space-x-8 space-y-10 xl:space-y-0">
        <div className="flex flex-col space-y-6 basis-4/12">
          <h3 className="bg-[#00297b] text-white py-2 px-6 rounded-xl text-xl min-w-5/12">
            {data.question.title}
          </h3>
          <p className="leading-normal whitespace-pre-line">
            {data.question.text}
          </p>
        </div>
        <div className="flex-grow">
          <QuestionForm />
        </div>
      </section>
    </main>
  );
}
