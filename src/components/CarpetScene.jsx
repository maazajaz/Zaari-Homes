import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Center } from '@react-three/drei';
import CarpetModel from './CarpetModel';

const CarpetScene = ({ autoRotate = false }) => {
  return (
    <Canvas
      // Set background back to normal
      className="w-full h-full bg-gray-100"
      shadows
      camera={{ position: [-3, 3.5, 5], fov: 65, near: 0.1, far: 1000 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.8} />
      <directionalLight
        position={[5, 10, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <spotLight
        position={[-5, 10, -5]}
        angle={0.3}
        penumbra={1}
        intensity={0.7}
        castShadow
      />

      {/* Center component to automatically center the carpet */}
      <Center position={[0, 0, 0]}>
        <CarpetModel position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1.2} />
      </Center>

      {/* Environment and Controls */}
      <Environment preset="apartment" />
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        autoRotate={autoRotate}
        autoRotateSpeed={0.5}
        minDistance={1}
        maxDistance={20}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
        target={[0, 0, 0]}
        makeDefault
      />
    </Canvas>
  );
};

export default CarpetScene;