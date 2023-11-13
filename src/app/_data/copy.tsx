import { BsTrophyFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbBuildingCastle, TbRulerMeasure } from "react-icons/tb";

type StateCopyType = {
  title: string;
  aside: {
    title: string;
    brief: string;
    list: string[];
    button: {
      text: string;
      href: string;
    };
  };
  hero: {
    img: {
      src: string;
      altText: string;
      position?: string;
    };
  };
  intro: string;
  statList: {
    label: string;
    stat: string;
    icon: any;
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
  officialsList: {
    title: string;
    name: string;
    href: string;
    img: string;
    url: string;
  }[];
  outro: string;
  question: {
    title: string;
    text: string;
  };
};

export const stateCopy: StateCopyType = {
  title: "State of Virginia",
  aside: {
    title: "State of Virginia",
    brief:
      "Virginia, where history meets innovation, invites software engineers to explore a world of rich cultural heritage and cutting-edge technology. The Commonwealth is brimming with attractions that offer a unique blend of the past and the future.",
    list: [
      "Explore the rich history of Colonial Williamsburg.",
      "Hike the scenic trails of Shenandoah National Park.",
      "Immerse yourself in the arts and culture of Richmond.",
      "Tour the historic Monticello, home of Thomas Jefferson.",
      "Experience the vibrant tech scene in Northern Virginia.",
    ],
    button: {
      href: "https://www.visittheusa.com/state/virginia",
      text: "Discover more",
    },
  },
  statList: [
    { label: "Population", stat: "8,683,619", icon: <IoIosPeople /> },
    { label: "GDP", stat: "$649 Billion", icon: <RiMoneyDollarCircleLine /> },
    { label: "Area", stat: "42,775 SQ. MI.", icon: <TbRulerMeasure /> },
    { label: "State Ranking", stat: "13th", icon: <BsTrophyFill /> },
    { label: "Capital", stat: "Richmond", icon: <TbBuildingCastle /> },
  ],
  hero: {
    img: {
      src: "Virginia-road-sign.jpg",
      altText: "",
    },
  },
  intro:
    "Welcome to the Commonwealth of Virginia, where the echoes of history inspire a future driven by innovation. Nestled on the East Coast, Virginia is a state of contrasts, where a rich tapestry of history meets a thriving tech ecosystem.\n\nRichmond, the capital city, is steeped in history, having played a pivotal role in the American Civil War. The cobblestone streets, historic homes, and monuments narrate the stories of a bygone era. However, just a stone's throw away, in Northern Virginia, you'll find the bustling tech hubs, where the future is being forged.\n\nVirginia is more than a state; it's a living connection between tradition and innovation. It's a place where you can work on cutting-edge projects by day and explore historic sites that have shaped the nation by night. It's a destination where software engineers can code their future in a setting that cherishes its past.",
  geo: {
    title: "Virginia's Geographic Essence",
    text: "Virginia's geography is a masterpiece of diversity, providing software engineers with an inspiring backdrop for their work. The state's natural beauty spans from the sandy beaches of Virginia Beach to the serene valleys of the Blue Ridge Mountains. Shenandoah National Park, with its breathtaking vistas and extensive network of trails, offers the perfect escape for tech professionals seeking adventure and tranquility.\n\nStrategically located on the East Coast, Virginia provides easy access to major cities like Washington, D.C., and a well-developed transportation infrastructure. This accessibility makes it an ideal hub for business, networking, and exploration. Whether you're drawn to the shoreline, the mountains, or the urban centers, Virginia's geography has something to offer everyone.",
    img: {
      src: "va-1.jpg",
      altText: "",
    },
    button: {
      href: "https://www.doe.virginia.gov/teaching-learning-assessment/k-12-standards-instruction/history-and-social-science/virginia-s-first-people-past-and-present/geography",
      text: "Discover more",
    },
  },
  demo: {
    title: "A Tapestry of Demographics",
    text: "Virginia's demographic landscape is a dynamic mosaic of cultures and backgrounds. With a population of over 8 million people, the state embraces a wide spectrum of ethnicities, religions, and traditions. As a software engineer in Virginia, you'll find yourself part of a diverse community that values different perspectives and experiences.\n\nIn Northern Virginia, where the tech scene flourishes, you'll encounter professionals from all around the world. This diversity fosters an atmosphere of inclusion and collaboration, where the exchange of ideas and the celebration of unique talents drive innovation.\n\nIt is a place where software engineers can connect with a global network of peers while making their own unique contributions to the ever-evolving tech landscape. It's a welcoming environment that embraces diversity and offers opportunities for growth and advancement.",
    img: {
      src: "va-2.jpg",
      altText: "",
    },
    button: {
      href: "https://datausa.io/profile/geo/virginia#demographics",
      text: "Discover more",
    },
  },
  eco: {
    title: "An Economic Powerhouse",
    text: "Virginia's economic prowess is a powerful draw for software engineers. The state consistently ranks among the top economies in the nation, driven by diverse industries that provide ample opportunities for tech professionals to excel. While the historical significance of the state is undeniable, it is also a contemporary economic powerhouse.\n\nMajor sectors such as technology, agriculture, defense, manufacturing, and finance form the backbone of Virginia's economy. Northern Virginia, in particular, stands out as a technology and innovation hub. It's home to tech giants, government agencies, and a burgeoning startup scene.\n\nIn Virginia, software engineers can tap into a wealth of opportunities, both established and emerging. Whether you're an entrepreneur with a tech startup vision or a professional seeking to advance your career, Virginia offers the resources and support needed to propel you towards your goals.",
    img: {
      src: "va-3.webp",
      altText: "",
    },
    button: {
      href: "https://datausa.io/profile/geo/virginia#economy",
      text: "Discover more",
    },
  },
  officialsList: [
    {
      title: "Governor",
      name: "Glenn Youngkin",
      href: "https://www.governor.virginia.gov",
      img: "/youngkin_glenn_governor_portrait_2023.jpg",
      url: "https://www.governor.virginia.gov/media/governorvirginiagov/governor-of-virginia/images/youngkin_glenn_governor_portrait_2023.jpg",
    },
    {
      title: "Lt. Governor",
      name: "Winsome Earle-Sears",
      href: "https://www.ltgov.virginia.gov",
      img: "/Lt-Gov.jpg",
      url: "https://www.ltgov.virginia.gov/media/governorvirginiagov/lieutenant-governor/about/images/Lt-Gov.jpg",
    },
    {
      title: "Attorney General",
      name: "Jason S. Miyares",
      href: "https://www.oag.state.va.us",
      img: "/Miyares-headshot-1.jpg",
      url: "https://www.oag.state.va.us/images/Miyares-headshot-1.jpg",
    },
  ],
  outro:
    "Virginia, where history and innovation converge, is more than a destination; it's an invitation to code your future in a place that cherishes its heritage while embracing the possibilities of tomorrow. It's a state that values diversity, fosters economic prosperity, and offers geographic beauty that inspires and invigorates. For software engineers and tech enthusiasts, Virginia is a canvas upon which you can shape your vision, a hub where your ideas can flourish, and a community where your skills are celebrated. Your coding journey begins in the Commonwealth, where history is preserved and the future is being written. Come and code your future in Virginia, where innovation knows no bounds.",
  question: {
    title: "Have a question?",
    text: "Have more questions about Virginia or its cities? We're here to help! Feel free to ask anything you'd like to know, whether it's about the history, attractions, tech scene, or any other aspect of the Commonwealth. We're eager to assist you in discovering all that Virginia has to offer.",
  },
};
