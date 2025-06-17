import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Typed from "typed.js";
import gsap from "gsap";
import Button from "../Button/Button";
import Profiles from "../Profiles/Profiles";
import styles from "./Hero.module.scss";
import { MENULINKS, TYPED_STRINGS } from "../../constants";

const options = {
  strings: TYPED_STRINGS,
  typeSpeed: 50,
  startDelay: 1500,
  backSpeed: 50,
  backDelay: 8000,
  loop: true,
};

const Hero = () => {
  const [lottie, setLottie] = useState(null);

  const sectionRef = useRef(null);
  const typedElementRef = useRef(null);
  const lottieRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "none" } })
        .to(sectionRef.current, { opacity: 1, duration: 2 })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const typed = new Typed(typedElementRef.current, options);
    return () => typed.destroy();
  }, []);

  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && lottieRef.current) {
      const animation = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../public/lottie/lottie.json"),
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[0].ref}
      className={`w-full flex flex-col-reverse lg:flex-row justify-between items-center py-8 2xl:container mx-auto xl:px-20 md:px-12 px-4 min-h-screen relative mb-24 ${styles.hero}`}
      style={{ opacity: 0 }}
    >
      <style global jsx>{`
        .typed-cursor {
          font-size: 2rem;
        }
      `}</style>

      <div className="flex flex-col pt-20 md:pt-0 select-none max-w-xl">
        <h5 className={`${styles.intro} font-mono font-medium text-indigo-light staggered-reveal`}>
          Hi, my name is
        </h5>
        <h1 className={`${styles.heroName} text-white text-5xl sm:text-6xl font-semibold`}>
          <span className={`relative ${styles.emphasize} staggered-reveal`}>Pranav</span>
          <span className="staggered-reveal"> Niranjan</span>
        </h1>
        <p>
          <span
            ref={typedElementRef}
            className="staggered-reveal text-2xl sm:text-3xl text-gray-light-3 font-mono leading-relaxed"
          />
        </p>
        <div className="staggered-reveal">
          <Profiles />
        </div>
        <div className="staggered-reveal pt-4">
          <Button
            href=""
            classes="link"
            type="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </Button>
        </div>
      </div>

      <div className={`${styles.lottieContainer} staggered-reveal`} ref={lottieRef} />
    </section>
  );
};

export default Hero;
