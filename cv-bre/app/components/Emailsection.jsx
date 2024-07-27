import React from "react";
import githubIcon from "/public/github-icon.svg";
import linkedinIcon from "/public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Emailsection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 ">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let`s connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md ">
          {" "}
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
      <div>
        <form className="flex flex-col gap-4">
          <label htmlFor="email" type="email" className="text-white">
            Your email...
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="Mem@gmail.com"
          />
        </form>
      </div>
    </section>
  );
};

export default Emailsection;
