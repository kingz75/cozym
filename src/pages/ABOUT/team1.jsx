import { useState, useEffect, useRef } from "react";
import Kazeem from "../../assets/images/kazeem.png";
import Chidinma from "../../assets/images/chidinma.png";
import Abiodun from "../../assets/images/abiodun.png";
import Joseph from "../../assets/images/joseph.png";

const team = [
  {
    name: "KAZEEM YUSUFF",
    role: "MANAGING DIRECTOR/CEO",
    image: Kazeem,
    shortBio: `
Engr. Kazeem Yusuff is an experienced engineering professional with over two decades of experience spanning mechanical engineering, construction, and project management. Renowned for his technical depth, strategic leadership, and consistent delivery of complex projects, he has built an outstanding reputation within Nigeria’s oil, gas, and industrial sectors.

Throughout his career, Engr. Yusuff has overseen large-scale engineering and construction works, including equipment installations, storage tank construction, flow station development, and the design of processing facilities in strict compliance with global quality and safety standards.
`,
    fullBio: `
His expertise has been shaped through key roles in reputable international and indigenous organizations such as ILF Engineers and OBAX Worldwide, where he served as Deputy Engineering Manager, Lead Engineering Manager, and Senior Mechanical Engineer. He has successfully executed major projects for high-profile clients, including NNPC, NPDC, ExxonMobil, South Atlantic Petroleum, CHI Limited, SCOA Foods, Dangote Oil Refinery, and several others earning recognition for his exceptional technical contributions and leadership.

Engr. Kazeem holds a Bachelor’s degree and a National Diploma in Mechanical Engineering from the University of Lagos and Federal Polytechnic, Ogun State, respectively. He also possesses advanced certifications in International Gas Business Management, Gas Distribution Engineering, and Strategic Project Management from institutions in the United States. In addition, he holds an MBA from Hult Business School, Boston, Massachusetts, USA.

He is affiliated with leading professional bodies, including the American Society of Mechanical Engineers (ASME), Institution of Mechanical Engineers (IMECHE), Project Management Institute (PMI), and the Nigerian Society of Engineers (NSE).

As the Managing Director/CEO of Cozym Limited, Engr. Yusuff leverages his extensive technical expertise and strategic vision to drive innovation, operational excellence, and sustainable growth. He continues to mentor and inspire young engineers while contributing significantly to advancements within the engineering and energy sectors.
`,
  },

  {
    name: "CHIDINMA UKAH",
    role: "GENERAL MANAGER",
    image: Chidinma,
    shortBio: `
Ukah Chidinma is a results-driven finance and business management professional with over a decade of progressive experience across real estate, engineering, healthcare, and oil & gas servicing. She currently serves as the General Manager of Cozym Limited, where she provides strategic leadership across finance, operations, business development, compliance, and corporate governance.

Chidinma holds a B.Sc. in Education Economics from Abia State University, an M.Sc. in Economics from the University of Lagos, and an MBA from the University of East London. She is also an active member of the Institute of Chartered Accountants of Nigeria (ICAN), and has built deep expertise in corporate finance, financial analysis, risk management, supply chain management, budgeting, internal controls, cost optimization, and project financial management.`,
    fullBio: `
Throughout her career, she has led and structured complex financial operations, developed cost-efficient frameworks for project execution, improved liquidity positions, strengthened financial reporting systems, and enhanced compliance with statutory and regulatory requirements. Her experience supporting executive leadership has enabled her to drive sustainable financial growth, strengthen business processes, and lead organizational transformation initiatives.

Known for her analytical rigor and operational excellence, Chidinma consistently identifies financial and operational inefficiencies, designs data-driven solutions, and implements strategic controls that improve profitability and accountability. She brings a corporate-finance mindset to every role balancing risk, strategy, and value creation for long-term business sustainability.

A strong advocate of teamwork and collaborative leadership, she fosters an inclusive work culture where transparency, communication, and performance are prioritized. Her commitment to continuous improvement, combined with her extensive industry exposure, makes her a dynamic leader and a key contributor to Cozym’s strategic direction.`,
  },

  {
    name: "ABIODUN OYEDELE",
    role: "PROJECT MANAGER / CIVIL ENGINEERING",
    image: Abiodun,
    shortBio: `
A result-driven Civil Engineer with half a decade of professional experience in structural design, construction supervision, and project management across residential and commercial building projects.

Adeptly skilled in delivering end-to-end project lifecycle execution from planning, design, budgeting, coordination, monitoring, quality control and closing. His core expertise spans project management, reinforced concrete design, structural analysis and detailing. Strengthened by hands-on experience managing multidisciplinary teams, ensuring regulatory compliance and maintaining cost and schedule performance. Known for his attention to detail, technical competence, and ability to translate engineering drawings into practical and high-quality construction outcomes.`,
    fullBio: `
He holds a National Diploma (ND) and a Higher National Diploma (HND) in Civil Engineering, obtained in 2016 and 2020, respectively, from Moshood Abiola Polytechnic, Abeokuta. Mr Oyedele Abiodun is currently pursuing a Bachelor of Engineering (B.Eng.) at the Federal University, Oye-Ekiti, Ekiti State. 

His research focused on the effects of different curing methods on the density and compressive strength of steel fibre reinforced concrete, the impact of source ownership and storage characteristics on residential water demand systems, and currently on the workability and strength development of self-compacting concrete incorporating eco-friendly cement replacements. 

He has a growing interest in integrating AI-enabled predictive modelling into structural performance evaluations and project delivery optimization.`,
  },

  {
    name: "JOSEPH UDOMA",
    role: "BUSINESS SUPPORT MANAGER",
    image: Joseph,
    shortBio: `
Joseph Udoma is a dynamic and forward-thinking Human Resources Leader with over a decade of experience supporting high-performing organizations across the media and oil & gas sectors. He is adept at designing and executing HR strategies that align with corporate objectives, strengthen talent pipelines, and promote inclusive, performance-driven work cultures. He is an articulate, focused and experienced leader, piloted by visions that transcend career achievement, driven by set goals and determination to succeed. 

Recognized for his strong command of HR operations, policy development, compliance, and organizational transformation, Joseph has consistently demonstrated success in enhancing workforce productivity and streamlining HR processes to improve overall business efficiency.`,
    fullBio: `
...`,
  },
];

export default function ManagementSlider() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [autoSlide, setAutoSlide] = useState(true);
  const [displayedName, setDisplayedName] = useState(team[0].name);
  const [isInitial, setIsInitial] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  const person = team[index];

  /*
   INTERSECTION OBSERVER FOR SCROLL DETECTION
  */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (isInitial) {
            setIsInitial(false);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isInitial]);

  /*
   AUTO SLIDE (PAUSES IF expanded = true)
  */
  useEffect(() => {
    if (!autoSlide) return; // stop interval when autoSlide=false

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % team.length);
      setExpanded(false);
    }, 10000);

    return () => clearInterval(interval);
  }, [autoSlide]); // re-run only when autoSlide changes

  /*
   TYPEWRITER ANIMATION FOR NAME
  */
  useEffect(() => {
    if (!isVisible || isInitial) return;
    let currentName = "";
    setDisplayedName("");
    const fullName = person.name;
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullName.length) {
        currentName += fullName[i];
        setDisplayedName(currentName);
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 150); // adjust speed here

    return () => clearInterval(typeInterval);
  }, [index, isVisible, isInitial]);

  const toggleExpanded = () => {
    setExpanded((prev) => {
      const newState = !prev;
      setAutoSlide(!newState); // stop auto-slide when expanded
      return newState;
    });
  };

  return (
    <div
      ref={ref}
      className="w-full flex flex-col items-center py-8 sm:py-10 px-4"
    >
      {/* Title */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16 mt-4">
        <p className="text-[#FAA419] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-none">
          Our
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#002B45] leading-none">
          Management Team
        </h2>
      </div>

      {/* Slider */}
      <div className="relative w-full max-w-[1000px] flex justify-center">
        <div className="w-full flex flex-col items-center transition-all duration-700 ease-in-out">
          {/* OUTER RING */}
          <div>
            <div className="p-2 sm:p-4 rounded-full border-2 border-[#FAA419] flex items-center justify-center">
              <div className=" relative z-20 rounded-full overflow-hidden bg-white">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[300px] lg:h-[300px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="bg-[#ffffff] text-[#002B45] mt-[-80px] sm:mt-[-100px] lg:mt-[-120px] pt-[90px] sm:pt-[110px] lg:pt-[130px] pb-8 sm:pb-10 lg:pb-[50px] px-4 sm:px-8 md:px-12 lg:px-[60px] rounded-xl shadow-lg w-full max-w-4xl relative z-10">
            <h3 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-semibold">
              {displayedName}
            </h3>
            <p className="text-center font-semibold text-sm sm:text-base lg:text-[16px] text-[#FAA419] mb-4">
              {person.role}
            </p>

            <p className="text-sm sm:text-base md:text-lg lg:text-[24px] leading-relaxed lg:leading-[38px] whitespace-pre-line">
              {person.shortBio}
              {expanded && <span className="block mt-2">{person.fullBio}</span>}
            </p>

            <button
              onClick={toggleExpanded}
              className="mt-4 text-[#FAA419] underline text-sm sm:text-base md:text-lg lg:text-[24px]"
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          </div>
        </div>
      </div>

      {/* Pagination Pills */}
      <div className="flex gap-2 my-[50px]">
        {team.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              setExpanded(false);
              setAutoSlide(true); // resume auto slide on manual click
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === i ? "w-6 bg-[#f7a600]" : "w-2 bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
