import gsap from "gsap";
import { heroVideo, smallHeroVideo, postureImg } from "../utils";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
    });

    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 2,
    });
  }, []);

  return (
    <section
      id="home"
      className="w-full nav-height bg-black relative flex items-center"
    >
      <div className="flex-center w-full h-5/6 flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            posture={postureImg}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        <div
          id="cta"
          className="flex flex-col items-center opacity-0 translate-y-20 max-md:mt-10"
        >
          <a href="#highlights" className="btn">
            Buy
          </a>
          <p>From $199/month or $999</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
