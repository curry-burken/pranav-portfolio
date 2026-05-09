/* eslint-disable @next/next/no-img-element */
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, CERTIFICATIONS } from "../../constants";

const Certifications = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".certifications-wrapper"),
        start: "100px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[2].ref}
      className="w-full relative select-none mt-44"
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <img
          src="/right-pattern.svg"
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        <div className="flex flex-col certifications-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              Certifications
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              My Certifications
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
              Certifications I&apos;ve obtained.{" "}
            </h2>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
              AWS
            </h3>
            <div className="flex items-center flex-wrap gap-6 staggered-reveal">
              {CERTIFICATIONS.aws.map((certifications) => (
                <Image
                  key={certifications}
                  src={`/certifications/${certifications}.svg`}
                  alt={certifications}
                  width={100}
                  height={100}
                />
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
              Azure
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu staggered-reveal">
              {CERTIFICATIONS.azure.map((certifications) => (
                <Image
                  key={certifications}
                  src={`/certifications/${certifications}.svg`}
                  alt={certifications}
                  width={100}
                  height={100}
                />
              ))}
            </div>
          </div>
          {/* <div className="flex flex-wrap mt-10">
            <div className="mr-16 xs:mr-20 mb-6 staggered-reveal">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">
                Google
              </h3>
              <div className="flex flex-wrap gap-6 transform-gpu">
                {CERTIFICATIONS.google.map((certifications) => (
                  <Image
                    key={certifications}
                    src={`/certifications/${certifications}.svg`}
                    alt={certifications}
                    width={100}
                    height={100}
                  />
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
