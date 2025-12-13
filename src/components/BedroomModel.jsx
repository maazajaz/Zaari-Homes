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

                // DEBUG: Calculate and log carpet bounding box in world coordinates
                child.geometry.computeBoundingBox();
                const bbox = child.geometry.boundingBox.clone();

                // Apply the mesh's world transform to get world coordinates
                child.updateMatrixWorld(true);
                bbox.applyMatrix4(child.matrixWorld);

                console.log('=== CARPET MESH DEBUG ===');
                console.log('Carpet name:', child.name);
                console.log('Carpet world position:', child.getWorldPosition(new THREE.Vector3()));
                console.log('Carpet bounding box (world coords):');
                console.log('  Min (back-left corner):', bbox.min);
                console.log('  Max (front-right corner):', bbox.max);
                console.log('  Width (X):', bbox.max.x - bbox.min.x);
                console.log('  Depth (Z):', bbox.max.z - bbox.min.z);
                console.log('  Center:', new THREE.Vector3().addVectors(bbox.min, bbox.max).multiplyScalar(0.5));
                console.log('=========================');
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
