import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#BAABBD] text-[#816F68] font-sans">
      <Header />

      {/* Hero div */}
      <div className="text-center py-16 px-4 bg-[#C9C9EE] shadow-md shadow-[#816F68]/20">
        <h1 className="text-5xl font-extrabold text-[#8D7471] mb-4">
          Let’s Connect
        </h1>
        <p className="text-lg text-[#9F838C] max-w-xl mx-auto">
          Have a story to share, a question to ask, or simply a greeting to
          send? We're listening, always.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid gap-8 md:grid-cols-3 px-6 py-12 w-11/12 md:w-4/5 mx-auto">
        <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
          <h2 className="text-xl font-bold text-[#8D7471] mb-2">📧 Email</h2>
          <p className="text-[#816F68]">uganmaharjan9@gmail.com</p>
        </div>
        <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
          <h2 className="text-xl font-bold text-[#8D7471] mb-2">📞 Call</h2>
          <p className="text-[#816F68]">+977 9803389703</p>
        </div>
        <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
          <h2 className="text-xl font-bold text-[#8D7471] mb-2">📍 Visit</h2>
          <p className="text-[#816F68]">Patan Dhoka Lalitpur 44600</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#9F838C] text-white py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Still wondering?</h2>
        <p className="mb-10">
          Reach out, and we’ll be there to greet you on the other side.
        </p>

        <form className="space-y-6 w-11/12 md:w-2/3 lg:w-1/2 mx-auto text-left">
          <div>
            <label className="block mb-2 text-white font-medium">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-white border border-[#9F838C] text-[#816F68] focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block mb-2 text-white font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-white border border-[#9F838C] text-[#816F68] focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-white font-medium">Message</label>
            <textarea
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-white border border-[#9F838C] text-[#816F68] focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Share your thoughts..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-[#9F838C] font-semibold py-3 rounded-lg hover:bg-[#C9C9EE] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
