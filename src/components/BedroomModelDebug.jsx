import { useEffect, useState, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import bedroomModel from '../assets/latest_bedroom_compressed.glb?url';

// Debug component to visualize carpet corners
const CarpetDebugMarkers = ({ bounds }) => {
    if (!bounds) return null;

    const { min, max } = bounds;
    const y = 0.05; // Above carpet surface (will be offset by model position)

    // Corner positions
    const corners = [
        [min.x, y, min.z], // Back-left
        [max.x, y, min.z], // Back-right
        [min.x, y, max.z], // Front-left
        [max.x, y, max.z], // Front-right
    ];

    return (
        <group>
            {corners.map((pos, i) => (
                <mesh key={i} position={pos}>
                    <sphereGeometry args={[0.08, 16, 16]} />
                    <meshBasicMaterial color="red" />
                </mesh>
            ))}
            {/* Center marker */}
            <mesh position={[(min.x + max.x) / 2, y, (min.z + max.z) / 2]}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshBasicMaterial color="yellow" />
            </mesh>
        </group>
    );
};

const BedroomModelDebug = ({ customTextureUrl, showDebug = true, onCarpetBounds, ...props }) => {
    const { scene } = useGLTF(bedroomModel);
    const [carpetBounds, setCarpetBounds] = useState(null);
    const originalMaterialRef = useRef(null);
    const carpetMeshRef = useRef(null);

    // Initial setup - find carpet, save original material, calculate bounds
    useEffect(() => {
        scene.traverse((child) => {
            if (child.isLight) {
                child.visible = false;
                child.intensity = 0;
            }

            if (child.isMesh && (child.name.toLowerCase().includes('carpet') || child.name.toLowerCase().includes('rug'))) {
                carpetMeshRef.current = child;
                child.scale.set(1.3, 1, 1.3);

                // Save original material if not already saved
                if (!originalMaterialRef.current) {
                    originalMaterialRef.current = child.material.clone();
                }

                // Calculate bounding box
                child.geometry.computeBoundingBox();
                const bbox = child.geometry.boundingBox.clone();
                child.updateMatrixWorld(true);
                bbox.applyMatrix4(child.matrixWorld);

                // Also apply parent transforms (the model is positioned at [0, -1, 0])
                const modelOffset = new THREE.Vector3(0, -1, 0);
                bbox.min.add(modelOffset);
                bbox.max.add(modelOffset);

                setCarpetBounds(bbox);
                if (onCarpetBounds) {
                    onCarpetBounds(bbox);
                }
            }
        });
    }, [scene, onCarpetBounds]);

    // Handle custom texture changes
    useEffect(() => {
        const carpetMesh = carpetMeshRef.current;
        if (!carpetMesh) return;

        if (customTextureUrl) {
            const loader = new THREE.TextureLoader();
            loader.load(customTextureUrl, (texture) => {
                texture.flipY = false;
                texture.colorSpace = THREE.SRGBColorSpace;

                carpetMesh.material.map = texture;
                carpetMesh.material.needsUpdate = true;
            });
        } else if (originalMaterialRef.current) {
            // Reset to original material
            carpetMesh.material = originalMaterialRef.current.clone();
            carpetMesh.material.needsUpdate = true;
        }
    }, [customTextureUrl]);

    return (
        <group {...props}>
            <primitive object={scene} />
            {showDebug && carpetBounds && <CarpetDebugMarkers bounds={carpetBounds} />}
        </group>
    );
};

// Preload the model for faster initial render
useGLTF.preload(bedroomModel);

export default BedroomModelDebug;
