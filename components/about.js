import React from "react";

export default function About() {
  return (
    <div className="mt-8" id="about-section">
      <div className="flex justify-between items-start mt-5">
        <div className="flex-1">
          <div className="flex flex-col items-start mt-10 pl-4">
            <p className="text-2xl font-extrabold font-mono mb-4">About Me</p>
            <p className="text-base font-light">
              Currently working as a Software Engineer in one of the top tech
              company in Indonesia with 2 years and counting in front and back
              end development experience. I love technology and always
              fascinated on how technology works. I will try my best to work as
              best as I can and deliver high quality product. So if you want me
              to join your team, feel free to contact me.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-center items-center">
            <img
              src="/picture1.png"
              alt="Programming Image"
              className="h-60 w-72"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
