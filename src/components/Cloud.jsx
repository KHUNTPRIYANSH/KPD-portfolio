import * as THREE from "three";
import { React, useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, TrackballControls } from "@react-three/drei";

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    font: "/Inter-Bold.woff",
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);
  useFrame(({ camera }) => {
    ref.current.quaternion.copy(camera.quaternion);
    // Hover effect mate color aya badalvo
    ref.current.material.color.lerp(
      color.set(hovered ? "#e1af16" : "white"),
      0.1
    );
  });
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      onClick={() => console.log("clicked")}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}

function Cloud({ count, radius }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    // tare navi kai skill nakhvi hoi to aya
    /**
     * words count * 4 hova joie to golo sarkho banse
     */
    const tag = [
      "html",
      "css",
      "js",
      "python",
      "java",
      "tailwind",
      "c++",
      "c",
      "bootstrap",
      "web3",
      "solidity",
      "dsa",
      "flutter",
      "KPD",
      "expressJs",

      "nodeJs",
      "reactJs",
      "figma",
      "mongoose",
      "git",
      "github",
      "android",
      "ios",
      "firebase",
      "hack",
    ];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    let k = 0;
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++) {
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          tag[k],
        ]);
        k++;
      }
    return temp;
  }, [count, radius]);
  return words.map(([pos, word], index) => (
    <Word key={index} position={pos} children={word} />
  ));
}

const Clud = () => {
  return (
    <>
      <div className="cloud">
        <Canvas>
          <fog attach="fog" args={["#202025", 0, 80]} />
          {/**
           * Aa cloud generate krse
           * count etle ke sphere ma ketla bhag pdse
           * ane ek ek bhag ma count jetla words line ma aavse
           * radius thi to gola ni size vadhari sakis
           */}
          <Cloud count={5} radius={15} />
          <TrackballControls />
        </Canvas>
      </div>
    </>
  );
};

export default Clud;
