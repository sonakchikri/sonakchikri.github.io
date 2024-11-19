import healthcareImg from "./assets/healthcare_app.svg";
import resturantImg from "./assets/resturant_cover.svg";
import hrDashboardImg from "./assets/hr_dashboard.svg";
import learningwebsiteImg from "./assets/learning_website.svg";
import gateappImg from "./assets/gate_app.svg";
import megabusImg from "./assets/mega_bus.png";
import countrymartImg from "./assets/mart_app.svg";
import musicplayerImg from "./assets/mart_app.svg";

export default function Projects() {
  const projectDetails = [
    {
      id: 1,
      icon: <br size={80} className="text-red-500" />,
      title: "HEALTHCARE APP",
      style: "shadow-red-900",
      link: "https://www.behance.net/gallery/212392099/Healthcare-App",
      imgSrc: healthcareImg,
    },
    {
      id: 2,
      icon: <br size={80} className="text-blue-500" />,
      title: "RESTURANT APP",
      style: "shadow-[#AAC9AF]",
      link: "https://www.behance.net/gallery/207044773/Restaurant-app",
      imgSrc: resturantImg,
    },
    {
      id: 3,
      icon: <br size={80} className="text-yellow-500" />,
      title: "HR DASHBOARD",
      style: "shadow-[#8D60FB]",
      link: "https://github.com/divyaprakashdp/expense-tracker-app",
      imgSrc: hrDashboardImg,
    },
    {
      id: 4,
      icon: <br size={80} className="text-blue-500" />,
      title: "LEARNING WEBSITE",
      style: "shadow-[#C8434A]",
      link: "https://www.behance.net/gallery/205018277/Learning-Website",
      imgSrc: learningwebsiteImg,
    },
    {
      id: 5,
      icon: <br size={80} className="text-yellow-500" />,
      title: "GATE APP",
      style: "shadow-[#8D60FB]",
      link: "https://www.behance.net/gallery/205011431/Lav-gate-App",
      imgSrc: gateappImg,
    },
    {
      id: 6,
      icon: <br size={80} className="text-yellow-500" />,
      title: "BUS APP",
      style: "shadow-[#8D60FB]",
      link: "https://www.behance.net/gallery/204848149/Mega-Bus-App",
      imgSrc: megabusImg,
    },
    {
      id: 7,
      icon: <br size={80} className="text-yellow-500" />,
      title: "MART APP",
      style: "shadow-[#8D60FB]",
      link: "https://www.behance.net/gallery/204843911/Country-Mart-App",
      imgSrc: countrymartImg,
    },
    {
      id: 8,
      icon: <br size={80} className="text-yellow-500" />,
      title: "MUSIC PLAYER",
      style: "shadow-[#8D60FB]",
      link: "https://www.behance.net/gallery/204839315/Music-player",
      imgSrc: musicplayerImg,
    }
    
  ];

  const projectDetailsDiv = projectDetails.map(
    ({ id, title, style, link, imgSrc }) => (
      <div
        key={id}
        className={`py-2 shadow-md text-center justify-center hover:scale-110 duration-500 rounded-xl hover:rounded-lg ${style}`}
      >
        <div>
          <p className="mt-2">{title}</p>
        </div>

        <div className="w-100 mx-4 my-4 ">
          <img src={imgSrc} className="rounded:lg" />
        </div>
        <div className="text-sm">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="mr-4 hover:text-blue-500"
          >
            {/* CODE */}
          </a>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500"
          >
            Demo
          </a>
        </div>
      </div>
    )
  );
  return (
    <div
      id="Projects"
      className="w-full text-xl uppercase bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-lime-200 p-2 inline">
            Projects
          </p>
          <p className="py-6">Here are few of my side projects</p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-8 px-12">
          {projectDetailsDiv}
        </div>
      </div>
    </div>
  );
}
