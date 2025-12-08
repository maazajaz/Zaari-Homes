import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import BedroomModel from './BedroomModel';
import ModelLoader from './ModelLoader';

const BedroomScene = ({ autoRotate = false, customTextureUrl }) => {
    return (
        <div className="relative w-full h-full">
            <ModelLoader />
            <Canvas
                className="w-full h-full absolute inset-0"
                shadows
                camera={{ position: [0, 1.3, 3.8], fov: 65 }}
                gl={{ preserveDrawingBuffer: true, antialias: true, toneMappingExposure: 0.6 }}
            >
                {/* Lights */}
                <ambientLight intensity={0.5} />
                <directionalLight
                    position={[-2, 5, 2]}
                    intensity={0.5}
                    castShadow
                    shadow-mapSize={2048}
                    shadow-bias={-0.0001}
                />

                {/* Environment - using 'city' for natural lighting */}
                <Environment preset="city" environmentIntensity={0.6} />

                {/* Model */}
                <BedroomModel scale={1} position={[0, -1, 0]} customTextureUrl={customTextureUrl} />

                {/* Shadows */}
                <ContactShadows position={[0, -1, 0]} opacity={0.4} scale={10} blur={2.5} far={4} color="#0a0a0a" />

                {/* Controls */}
                <OrbitControls
                    autoRotate={autoRotate}
                    autoRotateSpeed={0.5}
                    enableZoom={true}
                    enablePan={false}
                    minPolarAngle={0}
                    maxPolarAngle={Math.PI / 2}
                />
            </Canvas>
        </div>
    );
};

export default BedroomScene;
