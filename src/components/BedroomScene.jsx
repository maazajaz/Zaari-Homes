import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import BedroomModelDebug from './BedroomModelDebug';
import ModelLoader from './ModelLoader';
import CarpetAnnotations from './CarpetAnnotations';

const BedroomScene = ({ autoRotate = false, customTextureUrl, showAnnotations = true }) => {
    const [carpetBounds, setCarpetBounds] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile on mount and resize
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Closer camera for mobile (more zoomed in)
    const cameraPosition = isMobile ? [2, 0, 3.6] : [0, 1.3, 4];

    return (
        <div className="relative w-full h-full">
            <ModelLoader />
            <Canvas
                className="w-full h-full absolute inset-0"
                shadows
                camera={{ position: cameraPosition, fov: 65 }}
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

                {/* Model - showDebug=false hides debug markers */}
                <BedroomModelDebug
                    scale={1}
                    position={[0, -1, 0]}
                    customTextureUrl={customTextureUrl}
                    showDebug={false}
                    onCarpetBounds={setCarpetBounds}
                />

                {/* Carpet Annotations with dynamic positions */}
                {showAnnotations && <CarpetAnnotations carpetBounds={carpetBounds} />}

                <ContactShadows position={[0, -1, 0]} opacity={0.4} scale={10} blur={2.5} far={4} color="#0a0a0a" />

                {/* Controls - makeDefault allows other components to access it via useThree */}
                <OrbitControls
                    makeDefault
                    autoRotate={autoRotate}
                    autoRotateSpeed={0.5}
                    enableZoom={true}
                    enablePan={false}
                    // Polar angle (up/down) limits - same for both
                    minPolarAngle={Math.PI / 2.8}  // ~64 degrees from top
                    maxPolarAngle={Math.PI / 2.2}  // Slightly above horizontal
                    // Azimuth angle (left/right) limits - same for both
                    minAzimuthAngle={-Math.PI / 4}  // -45 degrees
                    maxAzimuthAngle={Math.PI / 4}   // +45 degrees
                    // Zoom limits
                    minDistance={2}      // Can zoom in close
                    maxDistance={3.6}    // Current view is max (can't zoom out more)
                />
            </Canvas>
        </div>
    );
};

export default BedroomScene;

