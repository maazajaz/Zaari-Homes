import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import bedroomModel from '../assets/latest_bedroom.glb?url';

const BedroomModel = ({ customTextureUrl, ...props }) => {
    const groupRef = useRef();

    // Load the GLB model
    const { scene } = useGLTF(bedroomModel);

    const originalMaterialRef = useRef(null);

    // Use TextureLoader explicitly to avoid conditional hook rules
    useEffect(() => {
        // Traverse logic to find the carpet mesh and remove embedded lights
        let carpetMesh = null;
        scene.traverse((child) => {
            // Remove any embedded lights from the model itself
            if (child.isLight) {
                // console.log('Removing embedded light:', child.name);
                child.visible = false;
                child.intensity = 0;
            }

            if (child.isMesh && (child.name.toLowerCase().includes('carpet') || child.name.toLowerCase().includes('rug'))) {
                carpetMesh = child;
                // Scale up the carpet as requested
                child.scale.set(1.3, 1, 1.3);

                // Save original material if not already saved
                if (!originalMaterialRef.current) {
                    originalMaterialRef.current = child.material.clone();
                }
            }
        });

        if (carpetMesh) {
            if (customTextureUrl) {
                const loader = new THREE.TextureLoader();
                loader.load(customTextureUrl, (texture) => {
                    // Fix texture settings to match GLTF
                    texture.flipY = false;
                    texture.colorSpace = THREE.SRGBColorSpace;

                    carpetMesh.material.map = texture;
                    carpetMesh.material.needsUpdate = true;
                });
            } else if (originalMaterialRef.current) {
                // Reset to original material
                carpetMesh.material = originalMaterialRef.current;
                carpetMesh.material.needsUpdate = true;
            }
        }
    }, [scene, customTextureUrl]);

    return <primitive object={scene} ref={groupRef} {...props} />;
};

useGLTF.preload(bedroomModel);

export default BedroomModel;
