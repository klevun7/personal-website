import { useGLTF } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("/chicken/scene.gltf");
  return <primitive object={scene} scale={10} />;
};

export default Model;

useGLTF.preload("/chicken/scene.gltf");