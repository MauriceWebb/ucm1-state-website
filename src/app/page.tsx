import QuestionForm from "@/components/QuestionForm";
import Image from "next/image";
import Link from "next/link";

const statsList = [
  { label: "Population", stat: "XXXX" },
  { label: "Jobs", stat: "XXXX" },
  { label: "GDP", stat: "XXXX" },
  { label: "Sq.Ft.", stat: "XXXX" },
  { label: "LIS Score", stat: "XXXX" },
];

const subSections = [
  {
    title: "Geographic Section",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur modi consequuntur ipsam cupiditate eveniet odit error mollitia rem, magnam in dolores doloremque molestiae cumque explicabo culpa quas alias tempora ullam sequi sint nulla. Voluptatum doloribus consequuntur eum excepturi saepe aperiam, hic, maxime tenetur at optio laboriosam, aspernatur ut odit! Culpa qui perferendis necessitatibus praesentium! Nostrum ex ducimus iusto at rerum similique voluptatum aspernatur reiciendis culpa nesciunt nemo sequi, ipsa velit.",
    button: { text: "Discover more", href: "/" },
    img: "",
  },
  {
    title: "Demographic Section",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur modi consequuntur ipsam cupiditate eveniet odit error mollitia rem, magnam in dolores doloremque molestiae cumque explicabo culpa quas alias tempora ullam sequi sint nulla. Voluptatum doloribus consequuntur eum excepturi saepe aperiam, hic, maxime tenetur at optio laboriosam, aspernatur ut odit! Culpa qui perferendis necessitatibus praesentium! Nostrum ex ducimus iusto at rerum similique voluptatum aspernatur reiciendis culpa nesciunt nemo sequi, ipsa velit.",
    button: { text: "Discover more", href: "/" },
    img: "",
  },
  {
    title: "Economic Section",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur modi consequuntur ipsam cupiditate eveniet odit error mollitia rem, magnam in dolores doloremque molestiae cumque explicabo culpa quas alias tempora ullam sequi sint nulla. Voluptatum doloribus consequuntur eum excepturi saepe aperiam, hic, maxime tenetur at optio laboriosam, aspernatur ut odit! Culpa qui perferendis necessitatibus praesentium! Nostrum ex ducimus iusto at rerum similique voluptatum aspernatur reiciendis culpa nesciunt nemo sequi, ipsa velit.",
    button: { text: "Discover more", href: "/" },
    img: "",
  },
];

const govList = [
  {
    title: "Governor",
    name: "Glenn Youngkin",
    href: "https://www.governor.virginia.gov",
    img: "/youngkin_glenn_governor_portrait_2023.jpg",
    url: "https://www.governor.virginia.gov/media/governorvirginiagov/governor-of-virginia/images/youngkin_glenn_governor_portrait_2023.jpg",
  },
  {
    title: "Lieutenant Governor",
    name: "Winsome Earle-Sears",
    href: "https://www.ltgov.virginia.gov",
    img: "/Lt-Gov.jpg",
    url: "https://www.ltgov.virginia.gov/media/governorvirginiagov/lieutenant-governor/about/images/Lt-Gov.jpg",
  },
  {
    title: "Attornet General",
    name: "Jason S. Miyares",
    href: "https://www.oag.state.va.us",
    img: "/Miyares-headshot-1.jpg",
    url: "https://www.oag.state.va.us/images/Miyares-headshot-1.jpg",
  },
];

export default function Home() {
  return (
    <main className="flex-grow container flex flex-col mx-auto">
      <section className="flex flex-wrap sm:flex-nowrap space-x-0 sm:space-x-6 my-6 mt-12 space-y-6 sm:space-y-0">
        <div className="basis-3/5 min-w-3/5 flex-grow min-h-[350px] bg-green-200 rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3219325.5440382487!2d-79.42091505!3d38.00343195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884cd670bdbcb2cd%3A0xc04e4149b746a695!2sVirginia!5e0!3m2!1sen!2sus!4v1698552744042!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <aside className="basis-2/5 w-2/5 flex-grow flex flex-col space-y-6">
          <div className="space-y-3">
            <h3 className="bg-[#00297b] text-white py-2 px-6 rounded-xl text-xl">
              State of Virginia
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis quibusdam ducimus porro doloremque illum vero sed, qui
              numquam itaque adipisci molestias tempore magni earum vel. Error
              id maxime esse recusandae!
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <h4 className="font-semibold text-lg">Top 5 places to visit:</h4>
            <div className="flex justify-between">
              <ol type="1" className="list-decimal ml-5">
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem ipsum dolor sit.</li>
              </ol>
              <Link
                href="/"
                className="py-2 px-4 bg-red-600 text-white rounded-xl mt-auto"
              >
                Discover more
              </Link>
            </div>
          </div>
        </aside>
      </section>

      <section className="flex min-h-[80px] items-center my-6">
        <ul className="flex items-center w-full justify-around overflow-x-auto">
          {statsList.map((item, k) => (
            <li key={k} className="flex basis-64 w-64 space-x-4">
              <div className="rounded-xl h-[60px] w-[60px] bg-gray-200"></div>
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
            backgroundImage: `url("/Virginia-road-sign.jpg")`,
            backgroundPosition: "30% 25%",
            backgroundSize: "cover",
          }}
        ></div>
        <p className="leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis vel
          aut perspiciatis voluptatem eligendi temporibus, reprehenderit,
          voluptate, consequatur quo magni ratione recusandae. Sapiente error,
          rem quis iure, dolores, laboriosam incidunt distinctio minus eveniet
          accusamus architecto in consectetur repudiandae vero unde explicabo
          aliquam amet ullam ipsam atque quisquam. Molestias tempora mollitia
          laborum ad eaque repudiandae minus facere dolores deleniti quas
          blanditiis aliquam qui hic voluptatem, sed exercitationem possimus.
          Necessitatibus sequi accusamus maiores architecto veritatis rerum
          velit adipisci voluptate explicabo, deleniti incidunt odio inventore
          optio laudantium eveniet, laborum excepturi cum nam rem officiis
          provident repudiandae fugit! Dolore sunt sit delectus earum? Explicabo
          voluptas culpa perferendis voluptatem consectetur deleniti eius
          quaerat fugit labore, distinctio, tempora, omnis quod veritatis
          delectus vitae odit. Deleniti, cumque.
        </p>
      </section>

      <section className="flex flex-col my-6 space-y-10">
        {subSections.map((section, k) => (
          <div key={k} className="flex space-x-6">
            {k % 2 === 0 ? (
              <>
                <div className="flex flex-col space-y-4 basis-3/5">
                  <h3 className="bg-[#00297b] text-white py-2 px-6 rounded-xl text-xl w-4/5">
                    {section.title}
                  </h3>
                  <div className="">
                    <p className="leading-normal- ">{section.text}</p>
                    <Link
                      href="/"
                      className="py-2 px-4 bg-[#00297b] text-white rounded-xl float-right"
                    >
                      Discover more
                    </Link>
                  </div>
                </div>
                <div className="basis-2/5 w-full flex-grow bg-gray-200 rounded-xl"></div>
              </>
            ) : (
              <>
                <div className="basis-2/5 w-full flex-grow bg-gray-200 rounded-xl"></div>
                <div className="flex flex-col space-y-4 basis-3/5">
                  <h3 className="bg-[#00297b] text-white py-2 px-6 rounded-xl text-xl w-4/5">
                    {section.title}
                  </h3>
                  <div className="">
                    <p className="leading-normal- ">{section.text}</p>
                    <Link
                      href="/"
                      className="py-2 px-4 bg-[#00297b] text-white rounded-xl float-right"
                    >
                      Discover more
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </section>

      <section className="flex flex-col my-6 space-y-10">
        <h3 className="bg-[#00297b] text-white py-2 px-6 rounded-xl text-xl w-5/12">
          Government
        </h3>
        <ul className="flex flex-wrap sm:flex-nowrap space-x-6 justify-between">
          {govList.map((item, k) => (
            <li key={k} className="flex flex-col basis-[32%] space-y-6">
              <div
                className={`h-[220px] w-full bg-gray-200 rounded-tl-xl rounded-tr-xl relative overflow-hidden`}
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
              <div className="px-6 flex justify-between">
                <div className="flex flex-col space-y-3">
                  <h4>{item.title}</h4>
                  <p className="text-2xl font-semibold">{item.name}</p>
                </div>
                <div>
                  <Link
                    href={item.href}
                    target="_blank"
                    className="text-[#00297b]"
                  >
                    {item.href.split("https://www.")[1]}
                  </Link>
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
        <p className="leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis vel
          aut perspiciatis voluptatem eligendi temporibus, reprehenderit,
          voluptate, consequatur quo magni ratione recusandae. Sapiente error,
          rem quis iure, dolores, laboriosam incidunt distinctio minus eveniet
          accusamus architecto in consectetur repudiandae vero unde explicabo
          aliquam amet ullam ipsam atque quisquam. Molestias tempora mollitia
          laborum ad eaque repudiandae minus facere dolores deleniti quas
          blanditiis aliquam qui hic voluptatem, sed exercitationem possimus.
          Necessitatibus sequi accusamus maiores architecto veritatis rerum
          velit adipisci voluptate explicabo, deleniti incidunt odio inventore
          optio laudantium eveniet, laborum excepturi cum nam rem officiis
          provident repudiandae fugit! Dolore sunt sit delectus earum? Explicabo
          voluptas culpa perferendis voluptatem consectetur deleniti eius
          quaerat fugit labore, distinctio, tempora, omnis quod veritatis
          delectus vitae odit. Deleniti, cumque.
        </p>
      </section>

      <section className="flex flex-wrap my-6 mb-12 justify-between items-start">
        <div className="flex flex-col space-y-6 basis-5/12">
          <h3 className="bg-[#00297b] text-white py-2 px-6 rounded-xl text-xl min-w-5/12">
            Have a question?
          </h3>
          <p className="leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nam
            aliquid tempore pariatur perferendis labore eius explicabo dolorum
            atque! Quam natus veritatis impedit incidunt modi! Fuga, culpa
            rerum?
          </p>
        </div>
        <QuestionForm />
      </section>
    </main>
  );
}
