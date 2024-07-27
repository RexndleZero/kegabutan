import React from "react";
import githubIcon from "/public/github-icon.svg";
import linkedinIcon from "/public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let`s connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Butuh bantuan untuk codingan kalian? Jangan segan-segan untuk
          menghubungi saya, saya selalu ada kapanpun, dimanapun. Email saya
          selalu terbuka ._. saya akan berusaha untuk bisa membantu masalah
          codingan kalian.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={githubIcon} alt="github-icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={linkedinIcon} alt="linkedin-icon" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <form className="flex flex-col gap-6">
          <label
            htmlFor="email"
            className="text-white block text-sm font-medium"
          >
            Your email...
          </label>
          <input
            type="email"
            id="email"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Mem@gmail.com"
          />
        </form>
        <form className="flex flex-col gap-6">
          <label
            htmlFor="subject"
            className="text-white block text-sm font-medium"
          >
            Your subject...
          </label>
          <input
            type="text"
            id="subject"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Just saying hi!"
          />
        </form>
        <div className="flex flex-col gap-6">
          <label
            htmlFor="message"
            className="text-white block text-sm font-medium"
          >
            Your message...
          </label>
          <input
            type="text"
            id="message"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Message me anytime!"
          />
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-5 rounded-lg"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
