import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import member1 from "../../assets/image/member1.png";
import member2 from "../../assets/image/member2.png";
import member3 from "../../assets/image/member3.png";
import member4 from "../../assets/image/member4.png";

const MeetOurTeam = () => {
  const members = [
    {
      image: member1,
      name: "Mark",
      position: "Android App Developer",
    },
    {
      image: member2,
      name: "Jack",
      position: "Web App Developer",
    },
    {
      image: member3,
      name: "Tony",
      position: "Marketing Manager",
    },
    {
      image: member4,
      name: "Chris",
      position: "Graphics Designer",
    },
  ];

    return (
      <div className="w-9/12 mx-auto pt-16 lg:pt-28">
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-semibold text-primary">Meet Our Team Mate</h1>
          <p className="max-w-170 mx-auto text-neutral">
            This growth led us to create "Web Briks LLC." Now, we offer
            additional services, including virtual assistance and web design.
          </p>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-16 lg:pt-28">
          {members.map((member, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden"
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#FFA726]/80 to-[#FFA726]/15 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-baseline p-6">
                <div className="text-bottom-start text-white">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm">{member.position}</p>
                </div>
              </div>

              <div className="absolute z-10 -top-20 group-hover:top-1 left-5 transition-all duration-300 bg-white text-neutral p-2 flex flex-col gap-2 items-center rounded-2xl">
                <FaFacebookF />
                <FaInstagram />
                <FaLinkedinIn />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default MeetOurTeam;
