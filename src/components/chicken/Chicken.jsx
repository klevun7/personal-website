"use client";
import { Suspense } from 'react';
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import dynamic from 'next/dynamic';

const Model = dynamic(() => import('./Model'), { suspense: true });


const Chicken = () => {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <Canvas
        frameloop="demand"
        camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}
        style={{
          width: "400px",
          height: "400px",
          position: "absolute",
          top: "50%",
          right: "100px",
          transform: "translateY(-50%)",
        }}
      >
        <Suspense fallback={null}>
          <Model />
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            enablePan={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Chicken;