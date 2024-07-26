"use client";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Chicken = () => {
  const chicken = useGLTF("/chicken/scene.gltf");

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
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
        />
        <primitive object={chicken.scene} scale={10} />
      </Canvas>
    </div>
  );
};
export default Chicken;
/*
     <div className="flex items-center justify-center">
        <Chicken />
      </div>
*/
