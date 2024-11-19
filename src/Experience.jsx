import enutlogo from "./assets/enut_logo.svg";
import iqvialogo from "./assets/iqvia_logo.svg";
import olapslogo from "./assets/olaps_logo.svg";

export default function Experience() {
  const companies = [
    {
      id: 1,
      icon: <img size={200} src={enutlogo} className="h-48 w-96" />,
      period: "2023-Present",
      details:
        "Designed and prototyped interfaces, conducted usability testing, created task flows, and led UX research, including personas and journey mapping.",
      style: "shadow-[#86BC24]",
    },
    {
      id: 2,
      icon: <img size={80} src={iqvialogo} className="h-48 w-96" />,
      period: "2020-2023",
      details:
        "Collaborated with clients, conducted UX research, created personas, prototypes, style guides, and design solutions. Managed client interactions, resolved queries, ensured KPIs, and delivered innovative user-centric solutions.",
      style: "shadow-[#00E9B7]",
    },
    {
      id: 3,
      icon: <img size={80} src={olapslogo} className="h-48 w-96" />,
      period: "2018-2020",
      details:
        "Designed app screens, created style guides, conducted UX research, usability testing, improved designs in Figma, and enhanced task flows.",
      style: "shadow-[#0FE2BB]",
    },
  ];

  const expDiv = companies.map(({ id, icon, period, details, style }) => (
    <div
      key={id}
      className={`lg:flex lg:flex-start py-2 shadow-md text-center justify-center md:hover:scale-110 duration-500 rounded-xl hover:rounded-lg ${style}`}
    >
      <div className="md:w-1/4 mx-4 ">{icon}</div>
      <div className="md:w-2/3 mx-12 ">
        <h2 className="text-2xl font-heading mt-2">{period}</h2>
        <hr className="" />
        <br />
        <p className="pb-2 text-base text-green-50 text-left">{details}</p>
      </div>
    </div>
  ));
  return (
    <div
      id="Experience"
      className="w-full text-xl bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-lime-200 p-2 inline">
            Experience
          </p>
          <p className="py-6">A Snapshot of My Professional Journey</p>
        </div>
        <div className="w-full grid gap-8 py-2 ">{expDiv}</div>
      </div>
    </div>
  );
}
