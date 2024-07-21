import React from "react";
import Image from "next/image";

const Aboutsection = () => {
  return (
    <section classNames="text-white">
      <div classNames="md:grid mid:grid-cols-2 gap-8 item-center py-8 px-8 xl:gap-16 sm:py-16 xl:pl-16">
        <Image src="/image/image.png" alt="backend" width={500} height={500} />
        <div>
          <h2>About Me</h2>
          <p>
            I am an experienced backend developer with expertise in using
            MongoDB and XAMPP. I am proficient in JavaScript and Golang, and I
            have some knowledge of PHP. Currently, I am enhancing my skills by
            learning Next.js to develop more advanced web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutsection;
