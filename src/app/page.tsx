"use client";
import QuestionForm from "@/components/QuestionForm";
import Image from "next/image";
import Link from "next/link";
import { stateCopy as data } from "./_data/copy";

const subSections = [data.geo, data.demo, data.eco];

export default function Home() {
  return (
    <main className="flex-grow flex flex-col mx-auto px-3 lg:px-0">
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
              <ol type="1" className="list-decimal ml-5">
                {data.aside.list.map((a, k) => {
                  return k === data.aside.list.length - 2 ? (
                    <li key={k}>
                      <p className="float-left">{a}</p>
                      <Link
                        href={data.aside.button.href}
                        target={
                          data.aside.button.href !== "/" ? "_blank" : undefined
                        }
                        className="py-2 px-4 bg-red-600 text-white rounded-xl mt-4 ml-auto md:mt-auto- min-w-fit float-right"
                      >
                        {data.aside.button.text}
                      </Link>
                    </li>
                  ) : (
                    <li key={k}>{a}</li>
                  );
                })}
              </ol>
            </div>
          </div>
        </aside>
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

      <section className="flex flex-col my-6 space-y-6">
        <Image
          src={"/" + data.hero.img.src}
          width={960}
          height={450}
          alt={data.hero.img.altText}
          className="bg-gray-200 rounded-xl object-cover"
          style={{
            objectPosition: "30% 25%",
          }}
        />
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
                  <div>
                    <h3
                      id={slug}
                      className="bg-[#00297b] text-white py-2 px-6 rounded-xl text-xl min-w-fit w-3/5 mb-6"
                    >
                      <Link href={"#" + slug}>{section.title}</Link>
                    </h3>
                    <Image
                      src={"/" + section.img.src}
                      width={360}
                      height={250}
                      alt={section.img.altText}
                      className="w-3/5 bg-gray-200 rounded-xl hidden md:block float-right ml-4 mb-3 object-cover"
                      style={{
                        objectPosition: "30% 60%",
                      }}
                    />
                    <Image
                      src={"/" + section.img.src}
                      width={360}
                      height={250}
                      alt={section.img.altText}
                      className="w-full bg-gray-200 rounded-xl h-[260px] md:hidden mb-6 object-cover"
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
                    <Image
                      src={"/" + section.img.src}
                      width={360}
                      height={250}
                      alt={section.img.altText}
                      className="w-3/5 h-auto bg-gray-200 rounded-xl hidden md:block float-left mr-4 mb-3 object-cover"
                      style={{
                        objectPosition: "30% 60%",
                      }}
                    />
                    <Image
                      src={"/" + section.img.src}
                      width={360}
                      height={250}
                      alt={section.img.altText}
                      className="w-full bg-gray-200 rounded-xl h-[260px] md:hidden mb-6 object-cover"
                      style={{
                        objectPosition: "60% 60%",
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
                  alt={
                    item.title && item.name
                      ? `Picture of ${item.title} ${item.name}.`
                      : item.title
                  }
                  className="h-full w-full object-center object-scale-down absolute z-10"
                />
                <Image
                  src={item.img}
                  width={200}
                  height={150}
                  alt={
                    item.title && item.name
                      ? `Picture of ${item.title} ${item.name}.`
                      : item.title
                  }
                  className="h-full w-full object-center object-cover blur-sm"
                />
              </div>
              <div className="px-6 flex flex-col space-y-3 w-3/5 lg:w-full">
                <div className="flex flex-col lg:block">
                  <h4 className="float-left">{item.title}</h4>
                  <Link
                    href={item.href}
                    target="_blank"
                    className="text-[#00297b] float-right"
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
