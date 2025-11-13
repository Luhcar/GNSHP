import React from "react";

const Contacts = () => {
  return (
    <div className="flex bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen items-center justify-center px-4 py-15">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-10 w-full max-w-5xl ">
        <h1 className="text-3xl font-bold text-center text-white font-poppins mb-10">
          Get In Touch With
          <span className="font-inter text-red-400"> GNSHP</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Information  */}
          <div className="text-white space-y-6">
            <div>
              <h2 className="font-semibold text-2xl">Contact Info</h2>
              <p className="text-gray-300">
                Have a question or need support? We're here to help you with
                your electronics journey.
              </p>
            </div>
            <div>
              <p>
                <strong>📍 Address:</strong> 123 Electronics St, Style City, NY
                10001
              </p>
              <p>
                <strong>📧 Email: </strong> support@gnshp.com
              </p>
              <p>
                <strong>📞 Phone: </strong> (123) 456-7890
              </p>
            </div>
          </div>
          <form className="text-white space-y-6">
            <label className="block mb-1">Your Name</label>
            <input
              type="text"
              className="bg-transparent border border-gray-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
            <label className="block mb-1">Your Email</label>
            <input
              type="email"
              className="bg-transparent border border-gray-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="john@example.com"
            />
            <p className="block mb-1">Your Message</p>
            <textarea
              className="bg-white/20 border border-white/30 rounded-xl px-4 py-2 w-full h-30 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Type your message..."
            ></textarea>
            <button className="w-full bg-linear-to-r from-red-500 to-purple-500 text-white font-semibold py-2 rounded-xl hover:opacity-90 transition-all duration-300 cursor-pointer">
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
