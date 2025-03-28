import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import { useState } from "react";

const About = () => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard
      .writeText("bindalpratham1@gmail.com")
      .then((r) => console.log(r));
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };
  return (
    <section className={`c-space mt-20`} id={"about"}>
      <div
        className={`grid xl:grid-rows-6 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 h-full`}
      >
        <div className={`col-span-1 xl:row-span-3`}>
          <div className={`grid-container`}>
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className={`w-full h-fit sm:h-[276px] object-contain`}
            />
            <div>
              <p className={`grid-headtext`}>Hi, I am Pratham</p>
              <p className={`grid-subtext`}>
                I am a Software developer with a passion for creating innovative
                and user-friendly web applications.
              </p>
            </div>
          </div>
        </div>
        <div className={`col-span-1 xl:row-span-3`}>
          <div className={`grid-container`}>
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className={`w-full h-fit sm:h-[276px] object-contain`}
            />
            <div>
              <p className={`grid-headtext`}>Tech Stack</p>
              <p className={`grid-subtext`}>
                I have experience in a wide range of technologies, including
                React, ReactNative, Tailwind CSS, and more.
              </p>
            </div>
          </div>
        </div>
        <div className={`col-span-1 xl:row-span-4`}>
          <div className={`grid-container`}>
            <div
              className={`rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center`}
            >
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroungImaageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className={`grid-headtext`}>
                I work remotely across many timezones
              </p>
              <p className={`grid-subtext`}>
                I&#39;m based in India, with remote work available.
              </p>
              <Button
                name={"Contact Me"}
                isBeam
                containerClass={`w-full mt-10 `}
              />
            </div>
          </div>
        </div>
        <div className={`xl:col-span-2 xl:row-span-3`}>
          <div className={`grid-container`}>
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className={`w-full h-fit sm:h-[266px] object-contain`}
            />
            <div>
              <p className={`grid-headtext`}>My Passion For Coding</p>
              <p className={`grid-subtext`}>
                I love solving problems and building things through code. Coding
                isn&#39;t just my profession - it is passion.
              </p>
            </div>
          </div>
        </div>
        <div className={`xl:col-span-1 xl:row-span-2`}>
          <div className={`grid-container`}>
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className={`w-full h-fit sm:h-[276px] md:h-[126px] object-cover sm:object-top`}
            />
            <div className={`space-y-2`}>
              <p className={`grid-subtext text-center`}>Contact Me</p>
              <div className={`copy-container`} onClick={() => handleCopy()}>
                <img
                  src={isCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="copy"
                />
                <p
                  className={`lg:text-xl md:text-lg text-base font-medium text-gray_gradient hover:text-white transition-colors`}
                >
                  {isCopied ? "Copied!" : "bindalpratham1@gmail.com"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
