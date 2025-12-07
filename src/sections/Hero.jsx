import HackerRoom from "../components/HackerRoom.jsx";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import CanvasLoader from "../components/CanvasLoader.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Target from "../components/Target.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 480 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section
      className={`min-h-screen w-full flex flex-col relative`}
      id={`home`}
    >
      <div
        className={`w-full mx-auto flex flex-col sm:mt-32 mt-20 c-space gap-3 `}
      >
        <p
          className={`sm:text-3xl text-2xl text-center font-bold font-generalsans text-neutral-300 hover:text-white`}
        >
          Hi, I am Pratham <span className={`waving-hand`}>👋</span>
        </p>
        <p className={`hero_tag text-gray_gradient`}>
          Building Products & Brands
        </p>
      </div>
      <div className={`w-full h-full absolute inset-0`}>
        {/*<Leva />*/}
        <Canvas 
          className={`w-full h-full`}
          gl={{ preserveDrawingBuffer: true }}
          onCreated={({ gl }) => {
            gl.domElement.addEventListener('webglcontextlost', (e) => {
              e.preventDefault();
            });
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
                scale={sizes.deskScale}
              />
            </HeroCamera>

            <group>
              {/* <Target position={sizes.targetPosition} /> */}
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight intensity={1} position={[10, 10, 10]} />
          </Suspense>
        </Canvas>
      </div>
      <div className={`absolute bottom-6 w-full z-10 right-0 left-0 c-space`}>
        <a href="#about">
          <Button
            name={`Let's Work Together`}
            isBeam
            containerClass={`w-full sm:w-fit sm:min-w-96`}
          />
        </a>
      </div>
    </section>
  );
};
export default Hero;
