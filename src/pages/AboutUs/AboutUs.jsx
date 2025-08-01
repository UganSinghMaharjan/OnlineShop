import React from "react";

const AboutUs = () => {
  return (
    <div className="h-auto bg-gradient-to-b from-[#816F68] via-[#9F838C] to-[#C9C9EE] text-white flex flex-col items-center px-6 py-10">
      <h1 className="text-5xl font-bold mb-4 text-center text-[#C9C9EE] drop-shadow-lg">
        About PandaWagon
      </h1>

      <p className="max-w-3xl text-lg text-center mb-6 text-[#F5F5F5]">
        Born from a love for convenience and community,{" "}
        <span className="font-semibold text-[#BAABBD]">PandaWagon</span> started
        with a simple dream: making shopping seamless, personal, and joyful. We
        believe in more than just transactions—we believe in trust, quality, and
        care.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full mt-8">
        <div className="bg-[#8D7471] p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold mb-1 text-[#C9C9EE]">
            Our Mission
          </h2>
          <p>
            To bridge the gap between people and products, delivering joy with
            every package and support with every click.
          </p>
        </div>

        <div className="bg-[#9F838C] p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold mb-1 text-[#C9C9EE]">
            Our Vision
          </h2>
          <p>
            To become a household name in online shopping, where every customer
            feels heard, valued, and inspired.
          </p>
        </div>
      </div>

      <div className="mt-10 bg-[#BAABBD] text-black p-6 rounded-2xl max-w-4xl text-center shadow-lg">
        <h3 className="text-2xl font-bold mb-2">Join Our Journey</h3>
        <p className="mb-3">
          Whether you're here to shop, explore, or just passing by—we're
          grateful to have you. PandaWagon is built for you, by people like you.
        </p>
        <p className="italic text-sm">“Where convenience meets care.”</p>
      </div>
    </div>
  );
};

export default AboutUs;
