import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { IconContext } from "react-icons";

const inter = Inter({ subsets: ["latin"] });

const handleButtonClick = (url: string) => {
  window.open(url, "_blank");
};

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col dark:bg-slate-900 items-center justify-between p-24 ${inter.className}`}>
      <div className="container mx-auto">
        <img
          className="rounded-full self-center shadow-2xl h-auto w-auto min-w-[150px] max-h-[300px]"
          src="https://i.imgur.com/KQbUUBn.png"
          alt="profile-image"
        />
        <div className="text-center mb-7 dark:text-slate-400 ">
          <h1 className="text-3xl font-semibold hover:font-bold tracking-wide hover:tracking-wider">
            Brandon Mendez
          </h1>
          <h2 className="text-xl font-medium hover:font-semibold tracking-wide hover:tracking-wider">
            Software Developer
          </h2>
          <p className="text-base font-normal hover:font-medium tracking-wide hover:tracking-wider">
            Artist, Music Enthusiast
          </p>
        </div>
        <div className="flex flex-col">
          <button onClick={() => handleButtonClick("https://github.com/bran-mendez")}>
            <FaGithub /> GitHub
          </button>
          <button
            onClick={() =>
              handleButtonClick("https://www.linkedin.com/in/brandon-mendez-10ab671a4/")
            }>
            <FaLinkedin /> LinkedIn
          </button>
          <button onClick={() => handleButtonClick("mailto:brandon.mendez20@gmail.com")}>
            <FaMailBulk /> Mail
          </button>
        </div>
      </div>
    </main>
  );
}
