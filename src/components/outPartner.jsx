import React from "react";
import PartnerOne from "@/assets/partner_1.png";
import PartnerTwo from "@/assets/partner_2.png";
import PartnerThree from "@/assets/partner_3.png";
import PartnerFour from "@/assets/partner_4.png";
import PartnerFive from "@/assets/partner_5.png";

const OurPartners = () => {
  const logos = [
    PartnerOne,
    PartnerTwo,
    PartnerThree,
    PartnerFour,
    PartnerFive,
  ];

  return (
    // <div className="h-screen bg-gray-300 flex items-center justify-center">
    <section className="text-center my-10">
      <div className=" mx-auto  relative overflow-hidden w-3/5 rounded-lg shadow-md">
        <div className="flex items-center gap-10 animate-scroll whitespace-nowrap">
          {logos.concat(logos).map((src, index) => (
            <img
              key={index}
              src={src}
              alt="partner logo"
              className="w-40 inline-block mix-blend-multiply"
            />
          ))}
        </div>
      </div>
    </section>
    // </div>
  );
};

export default OurPartners;
