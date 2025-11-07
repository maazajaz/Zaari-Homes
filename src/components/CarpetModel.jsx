import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import carpetModel from '../assets/hotel_room_ege_carpets_lotus_wave_grey.glb?url';

const CarpetModel = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) => {
  const groupRef = useRef();
  
  // Load the GLB model
  const { scene } = useGLTF(carpetModel);

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      <primitive object={scene.clone()} castShadow receiveShadow />
    </group>
  );
};

// Preload the model for better performance
useGLTF.preload(carpetModel);

export default CarpetModel;
