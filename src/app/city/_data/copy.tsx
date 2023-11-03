import { FaLandmark, FaMapLocationDot, FaTreeCity } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

type CityCopyType = {
  title: string;
  heroImg: {
    src: string;
    altText: string;
    position?: string;
  };
  intro: string;
  statList: {
    label: string;
    stat: string;
    icon: any;
  }[];
  companyList: {
    name: string;
    industry: string;
    salary: string;
    link: string;
  }[];
  geo: {
    title: string;
    img: {
      src: string;
      altText: string;
    };
    text: string;
    button: {
      href: string;
      text: string;
    };
  };
  demo: {
    title: string;
    img: {
      src: string;
      altText: string;
    };
    text: string;
    button: {
      href: string;
      text: string;
    };
  };
  eco: {
    title: string;
    img: {
      src: string;
      altText: string;
    };
    text: string;
    button: {
      href: string;
      text: string;
    };
  };
  outro: string;
};

export const cityCopy: {
  richmond: CityCopyType;
  "virginia-beach": CityCopyType;
  arlington: CityCopyType;
} = {
  richmond: {
    title: "City of Richmond",
    heroImg: {
      src: "richmond-1.jpg",
      altText:
        "Looking over the James River towards Brown's Island and the city of Richmond as the sun sets.",
      position: "30% 60%",
    },
    intro:
      "Richmond, a city steeped in history and vibrant with technological innovation, offers a compelling backdrop for software engineers and tech enthusiasts alike. Nestled on the banks of the James River, this dynamic city seamlessly marries its rich historical heritage with a thriving tech ecosystem.\n\nRichmond's allure for the tech-savvy lies not only in its storied past but in its forward-thinking present. Home to tech giants like Capital One and CarMax, the city's tech scene is burgeoning with opportunities. It's a hub where the lines of code you craft today shape the future. The river's gentle flow mirrors the city's steady tech growth, while historic districts, museums, and cultural festivals infuse the perfect balance of work and leisure.\n\nCome, discover Richmond, where tech innovation harmonizes with historical charm, and your coding ambitions find a home in a city that embraces progress.",
    statList: [
      { label: "Population", stat: "227,230", icon: <IoIosPeople /> },
      { label: "Established", stat: "1840", icon: <FaLandmark /> },
      { label: "Region", stat: "Central", icon: <FaMapLocationDot /> },
      { label: "Classification", stat: "Urban", icon: <FaTreeCity /> },
      {
        label: "Avg. Income",
        stat: "$54,795",
        icon: <RiMoneyDollarCircleLine />,
      },
    ],
    companyList: [
      {
        name: "Capital One",
        industry: "Financial Services and Banking",
        salary: "$105,000",
        link: "https://www.capitalone.com/",
      },
      {
        name: "CarMax",
        industry: "Automotive Retail",
        salary: "$97,500",
        link: "https://www.carmax.com/",
      },
      {
        name: "CoStar Group",
        industry: "Commercial Real Estate Information and Analytics",
        salary: "$120,000",
        link: "https://www.costargroup.com/",
      },
      {
        name: "Altria Group",
        industry: "Tobacco, E-Vapor, and Cannabis",
        salary: "$110,000",
        link: "https://www.altria.com/",
      },
      {
        name: "SingleStone",
        industry: "Technology Consulting and Digital Transformation",
        salary: "$90,000",
        link: "https://www.singlestoneconsulting.com/",
      },
    ],
    geo: {
      title: "A Geographical Tapestry",
      text: "Nestled along the fall line of the James River, it's positioned with access to both the coast and the mountains. The city enjoys a humid subtropical climate, with four distinct seasons, making it an ideal place for those who appreciate seasonal variety. Its location along Interstate 95, one of the country's major north-south arteries, facilitates connectivity, making travel to other major East Coast cities like Washington, D.C. and Raleigh, North Carolina, easily accessible.\n\nMoreover, Richmond's proximity to the Atlantic Ocean and the Chesapeake Bay, just a few hours away, allows residents to enjoy coastal getaways, while the Blue Ridge Mountains offer opportunities for outdoor adventures and scenic drives.",
      img: {
        src: "richmond-4.jpg",
        altText: "Peering into Richmond atop Brown's Island.",
      },
      button: {
        text: "Discover more",
        href: "/",
      },
    },
    demo: {
      title: "A Demographic Mosaic",
      text: "The racial and ethnic composition includes a mix of African American, White, Hispanic, Asian, and other backgrounds, reflecting the city's rich cultural tapestry. The median age in Richmond is around 34 years, making it a relatively young city. Education plays a significant role, with a substantial portion of the population holding bachelor's degrees or higher.\n\nRichmond is a hub for educational institutions, including Virginia Commonwealth University and the University of Richmond. The city's demographic diversity contributes to its vibrant arts and culture scene, while ongoing revitalization efforts aim to ensure equal opportunities and quality of life for all residents. Keep in mind that demographic figures may have evolved since my last update.",
      img: {
        src: "richmond-3.jpg",
        altText:
          "A view of people cannoing on the James River of Richmond as the sun sets.",
      },
      button: {
        text: "Discover more",
        href: "/",
      },
    },
    eco: {
      title: "Economic Prosperity",
      text: "The city serves as a significant financial hub, with a strong presence of major banks and financial institutions, such as Capital One and the Federal Reserve Bank of Richmond. Richmond's economy also thrives on manufacturing, healthcare, and retail, with prominent companies like Altria Group and Dominion Energy headquartered here. \n\nThe city's strategic location along major transportation routes, including Interstate 95 and a major port on the James River, contributes to its distribution and logistics sectors. While Richmond's economic landscape is multifaceted, it faces ongoing challenges, such as addressing economic disparities and enhancing workforce development. Richmond's economy continues to evolve, reflecting a blend of traditional and emerging industries.",
      img: {
        src: "richmond-5.jpg",
        altText: "Richmond's Capital One building.",
      },
      button: {
        text: "Discover more",
        href: "/",
      },
    },
    outro:
      "Richmond, Virginia, is not just a city with a storied past; it's a dynamic canvas where tech enthusiasts can script the future. With a diverse and expanding tech landscape, Richmond beckons software engineers and innovators to leave their mark on a city that values progress as much as its history.\n\nNestled between the historic streets and modern skyscrapers is a tech community that thrives on innovation and collaboration. Major players like Capital One and CarMax call Richmond home, and the city's burgeoning startup scene is ripe for your groundbreaking ideas. It's a place where coding meets creativity, where the James River's flow mirrors the steady current of technological advancement.\n\nJoin us in Richmond, where the digital horizon awaits. Write the future of tech in a city that reveres its heritage while embracing the possibilities of tomorrow. Your journey begins here.",
  },
  "virginia-beach": {
    title: "City of Virginia Beach",
    heroImg: {
      src: "va-beach-3.jpg",
      altText: "",
    },
    intro:
      "Welcome to Virginia Beach, where the dynamic world of software engineering encounters the serene rhythms of ocean tides. As one of the East Coast's most inviting destinations, Virginia Beach marries technological innovation with the beauty of its coastal landscapes.\n\nIn Virginia Beach, the possibilities are as boundless as the horizon over the Atlantic. Whether you're a software engineer already residing in this thriving city or considering it as your next career move, you're in for a unique experience. This is a place where tech opportunities flourish amidst the soothing whispers of the ocean.",
    statList: [
      { label: "Population", stat: "449,974", icon: <IoIosPeople /> },
      { label: "Established", stat: "1952", icon: <FaLandmark /> },
      { label: "Region", stat: "Southeastern", icon: <FaMapLocationDot /> },
      {
        label: "Classification",
        stat: "Urban/Suburban/Rural",
        icon: <FaTreeCity />,
      },
      {
        label: "Avg. Income",
        stat: "$81,810",
        icon: <RiMoneyDollarCircleLine />,
      },
    ],
    companyList: [
      {
        name: "STIHL Inc.",
        industry: "Manufacturing (Outdoor Power Equipment)",
        salary: "$95,000",
        link: "https://www.stihlusa.com/",
      },
      {
        name: "LifeNet Health",
        industry: "Biotechnology (Organ and Tissue Transplantation)",
        salary: "$102,500",
        link: "https://www.lifenethealth.org/",
      },
      {
        name: "Christian Broadcasting Network (CBN)",
        industry: "Media and Broadcasting (Christian Content)",
        salary: "$85,000",
        link: "https://www2.cbn.com/",
      },
      {
        name: "Sumitomo Drive Technologies",
        industry: "Manufacturing (Power Transmission and Control Equipment)",
        salary: "$95,000",
        link: "https://www.sumitomodrive.com/en-us",
      },
      {
        name: "LoanCare",
        industry: "Financial Services (Loan Servicing)",
        salary: "$95,000",
        link: "https://www.loancareservicing.com/",
      },
    ],
    geo: {
      title: "Coastal Geography",
      text: "Virginia Beach's geographic charm is an integral part of the city's allure. Stretching along the Atlantic Ocean, this coastal gem is defined by its pristine sandy shores and breathtaking seafront vistas. For software engineers, the city's diverse neighborhoods offer a spectrum of living environments to suit your preferences.\n\nThe bustling oceanfront district hums with activity, while the suburban and rural areas provide peaceful escapes. Virginia Beach's geography lends itself to work-life harmony, where you can develop your code by the coast and recharge with the sound of the waves.",
      img: {
        src: "va-beach-2.webp",
        altText: "",
      },
      button: {
        text: "Discover more",
        href: "/",
      },
    },
    demo: {
      title: "Demographic Tapestry",
      text: "Virginia Beach is more than just a city; it's a vibrant tapestry of diverse backgrounds and cultures. With a population approaching half a million, it's a community where inclusivity thrives. As a software engineer, you'll find yourself welcomed into this dynamic and varied tech ecosystem.\n\nThe city's diversity extends to its tech scene, fostering a collaborative environment that encourages fresh ideas and unique perspectives. In Virginia Beach, your journey is marked not only by the code you write but also by the connections you make within a richly woven community.",
      img: {
        src: "va-beach-3.webp",
        altText: "",
      },
      button: {
        text: "Discover more",
        href: "/",
      },
    },
    eco: {
      title: "Economic Hub",
      text: "Virginia Beach's economic prowess makes it a compelling destination for software engineers. The city's success story is shaped by a trio of key factors: a robust tourism industry, a significant military presence, and a blossoming tech sector. The result is an environment where innovation and opportunity abound.\n\nThe average income level in Virginia Beach surpasses the state median, reflecting a city that values economic prosperity. Whether you're launching a tech startup or seeking career growth, Virginia Beach's vibrant economy offers the resources and support to fuel your ambitions.",
      img: {
        src: "va-beach-4.jpeg",
        altText: "",
      },
      button: {
        text: "Discover more",
        href: "/",
      },
    },
    outro:
      "In Virginia Beach, your journey as a software engineer takes on the hues of a coastal adventure. The city's tech landscape is an incubator for creativity, innovation, and collaboration. Here, you'll find that writing code is more than a job; it's a passion nurtured by the gentle embrace of ocean tides.\n\nVirginia Beach invites you to celebrate technological advancements and embrace the inspiration of coastal beauty. It's a place where your coding ambitions align with the tranquil sounds of the ocean, where you can balance the intensity of your work with the serenity of the sea.\n\nJoin us in Virginia Beach, where tech meets the tides, and where your software engineering career is destined to flourish against the backdrop of endless possibilities.",
  },
  arlington: {
    title: "City of Arlington",
    heroImg: {
      src: "arlington-1.webp",
      altText: "",
    },
    intro:
      "Welcome to Arlington, a city where technology and progress intertwine seamlessly. Nestled in the heart of the vibrant Washington, D.C. metropolitan area, Arlington epitomizes the fusion of a storied past and an innovative future. For software engineers, this is a place where history and technology coexist harmoniously.\n\nArlington's dynamic tech scene offers an exciting playground for software engineering professionals. The city's commitment to innovation, coupled with its strategic location, makes it an ideal destination for those eager to make their mark in the tech world. Join us in Arlington, where the past inspires the future, and where tech meets progress.",
    statList: [
      { label: "Population", stat: "236,842", icon: <IoIosPeople /> },
      { label: "Established", stat: "1920", icon: <FaLandmark /> },
      { label: "Region", stat: "Northern", icon: <FaMapLocationDot /> },
      { label: "Classification", stat: "Urban", icon: <FaTreeCity /> },
      {
        label: "Avg. Income",
        stat: "$128,145",
        icon: <RiMoneyDollarCircleLine />,
      },
    ],
    companyList: [
      {
        name: "Amazon Web Services (AWS)",
        industry: "Cloud Computing and Technology",
        salary: "$120,000",
        link: "https://aws.amazon.com/",
      },
      {
        name: "Accenture",
        industry: "Management Consulting and Technology Services",
        salary: "$110,000",
        link: "https://www.accenture.com/",
      },
      {
        name: "Booz Allen Hamilton",
        industry: "Management Consulting, Defense, and Technology",
        salary: "$110,000",
        link: "https://www.boozallen.com/",
      },
      {
        name: "Lidl US",
        industry: "Retail (Supermarket Chain)",
        salary: "$102,500",
        link: "https://www.lidl.com/",
      },
      {
        name: "Lockheed Martin",
        industry: "Aerospace, Defense, and Technology",
        salary: "$115,000",
        link: "https://www.lockheedmartin.com/en-us",
      },
    ],
    geo: {
      title: "A Strategic Location",
      text: "Arlington's geographic location is a strategic advantage for tech enthusiasts. Positioned just across the Potomac River from the nation's capital, the city enjoys proximity to major tech hubs, government agencies, and leading tech companies. Whether you're developing the next big software solution or engaging in groundbreaking research, Arlington's location amplifies your tech career opportunities.\n\nThe accessibility to Washington, D.C. offers software engineers access to a wealth of resources, networking opportunities, and collaborative partnerships. It's a place where tech professionals can thrive, leveraging the influence of the capital city while enjoying the vibrant tech ecosystem Arlington has to offer.",
      img: {
        src: "arlington-2.jpeg",
        altText: "",
      },
      button: {
        text: "Discover more",
        href: "/",
      },
    },
    demo: {
      title: "A Diverse Community",
      text: "Arlington's demographic landscape mirrors the city's commitment to inclusivity. With a rich tapestry of cultures, backgrounds, and experiences, the city is a welcoming and diverse community. Software engineers will find themselves embraced by a population that values different perspectives and fosters a culture of collaboration.\n\nThis diversity extends to the tech community, creating an environment where unique viewpoints drive innovation. Arlington celebrates a culture of inclusion, where software engineers can connect with a global network of peers, collaborate on groundbreaking projects, and contribute to the ever-evolving tech landscape.",
      img: {
        src: "arlington-3.jpeg",
        altText: "",
      },
      button: {
        text: "Discover more",
        href: "/",
      },
    },
    eco: {
      title: "Thriving Tech Economy",
      text: "Arlington boasts a thriving tech economy with a focus on cybersecurity, government technology, and innovation. The city's unique position as a hub for government agencies and tech-driven businesses creates a fertile ground for software engineers to be at the forefront of developing cutting-edge solutions that impact the nation and beyond.\n\nArlington's tech ecosystem offers a wealth of opportunities for software engineering professionals to make significant contributions to the fields of national security, public service, and emerging technologies. As a software engineer in Arlington, your work has the potential to shape the future and enhance our collective digital capabilities.",
      img: {
        src: "arlington-4.jpg",
        altText: "",
      },
      button: {
        text: "Discover more",
        href: "/",
      },
    },
    outro:
      "Arlington provides an unparalleled environment for software engineers to advance their careers. In this city, your professional journey is defined by the intersection of tradition and innovation. You'll find yourself working on projects that honor the rich history of the area while propelling technology into uncharted territories.\n\nArlington is not just a city; it's an experience that encourages software engineers to dream, create, and lead. Your career path here is marked by the ever-present sense of possibility, where the future is constantly being shaped. Come to Arlington, where tech meets progress, and make your mark on the digital landscape. Your coding journey begins in a city that values both its history and the endless potential of the future.",
  },
};
