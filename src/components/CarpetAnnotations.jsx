import { useState, useEffect } from 'react';
import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Function to generate annotations based on actual carpet bounds
const getAnnotationsFromBounds = (bounds) => {
    if (!bounds) {
        // Fallback positions if bounds not available yet
        return [];
    }

    const { min, max } = bounds;
    const y = -0.95; // On carpet surface (floor is at y=-1)
    const centerX = (min.x + max.x) / 2;
    const centerZ = (min.z + max.z) / 2;

    // Inset value to move markers slightly inward from edges
    const inset = 0.15;

    return [
        {
            id: 1,
            position: [min.x + inset, y, max.z - inset],  // Front-left corner (inset)
            title: 'Hand-Knotted',
            description: '400+ knots per sq inch',
        },
        {
            id: 2,
            position: [max.x - inset, y, max.z - inset],  // Front-right corner (inset)
            title: 'Silk Blend',
            description: 'Wool & silk mix',
        },
        {
            id: 3,
            position: [centerX, y, max.z - inset],  // Front center (inset from front edge)
            title: 'Natural Dyes',
            description: 'Eco-friendly colors',
        },
        {
            id: 4,
            position: [min.x + inset, y, min.z + inset],  // Back-left corner (inset)
            title: 'Traditional',
            description: 'Persian motifs',
        },
        {
            id: 5,
            position: [max.x - inset, y, min.z + inset],  // Back-right corner (inset)
            title: 'Pile Depth',
            description: '3D texture',
        }
    ];
};

const AnnotationMarker = ({ annotation, isActive, onClick, onClose, isMobile }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Sizes based on device
    const markerSize = isMobile ? 'w-4 h-4' : 'w-5 h-5';
    const fontSize = isMobile ? 'text-[8px]' : 'text-[10px]';
    const cardWidth = isMobile ? 'w-20' : 'w-28';
    const cardPadding = isMobile ? 'p-1' : 'p-1.5';
    const titleSize = isMobile ? 'text-[6px]' : 'text-[8px]';
    const descSize = isMobile ? 'text-[5px]' : 'text-[7px]';
    const tooltipSize = isMobile ? 'text-[8px] px-1.5 py-0.5' : 'text-[10px] px-2 py-1';
    const distanceFactor = isMobile ? 6 : 8;

    return (
        <Html
            position={annotation.position}
            center
            distanceFactor={distanceFactor}
            style={{ pointerEvents: 'auto' }}
        >
            <div className="relative">
                {/* Marker Button - responsive size */}
                <button
                    onClick={() => onClick(annotation)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`
            ${markerSize} rounded-full flex items-center justify-center
            transition-all duration-300 cursor-pointer
            ${isActive
                            ? 'bg-amber-500 scale-125 shadow-lg shadow-amber-500/50'
                            : isHovered
                                ? 'bg-amber-400 scale-110 shadow-md shadow-amber-400/40'
                                : 'bg-white/90 hover:bg-white shadow-md'
                        }
          `}
                    style={{
                        border: '1.5px solid rgba(0,0,0,0.2)',
                        backdropFilter: 'blur(4px)'
                    }}
                >
                    <span className={`font-bold ${fontSize} ${isActive ? 'text-white' : 'text-slate-700'}`}>
                        {annotation.id}
                    </span>
                </button>

                {/* Tooltip on hover (when not active) */}
                {isHovered && !isActive && !isMobile && (
                    <div className={`absolute left-6 top-1/2 -translate-y-1/2 bg-slate-900/95 text-white ${tooltipSize} rounded-lg whitespace-nowrap backdrop-blur-sm shadow-xl animate-fadeIn`}>
                        {annotation.title}
                    </div>
                )}

                {/* Info Panel when active */}
                {isActive && (
                    <div className={`absolute z-50 animate-slideIn ${isMobile
                            ? 'bottom-full left-1/2 -translate-x-1/2 mb-1'
                            : 'left-6 top-1/2 -translate-y-1/2'
                        }`}>
                        <div className={`bg-white/95 backdrop-blur-lg rounded-md shadow-lg border border-white/40 ${isMobile ? 'px-2 py-1' : 'p-1.5 w-28'
                            }`}>
                            <div className="flex items-center justify-between gap-1">
                                <h3 className={`font-bold text-slate-800 leading-tight whitespace-nowrap ${isMobile ? 'text-[7px]' : 'text-[8px]'
                                    }`}>
                                    {annotation.title}
                                </h3>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onClose();
                                    }}
                                    className="text-slate-400 hover:text-slate-700 flex-shrink-0"
                                >
                                    <svg className={`${isMobile ? 'w-2 h-2' : 'w-2.5 h-2.5'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            {!isMobile && (
                                <p className="text-slate-500 text-[7px] leading-tight mt-0.5">
                                    {annotation.description}
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </Html>
    );
};

const CarpetAnnotations = ({ onAnnotationSelect, carpetBounds }) => {
    const [activeAnnotation, setActiveAnnotation] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const { camera, controls } = useThree();

    // Detect mobile on mount and resize
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Get annotations based on actual carpet bounds
    const annotations = getAnnotationsFromBounds(carpetBounds);

    const handleAnnotationClick = (annotation) => {
        if (activeAnnotation?.id === annotation.id) {
            // Close if clicking the same annotation
            handleClose();
            return;
        }

        setActiveAnnotation(annotation);

        // Animate camera to zoom toward the annotation
        if (controls) {
            const [x, y, z] = annotation.position;
            // Target position: slightly above and in front of the annotation
            const targetPos = new THREE.Vector3(x * 0.7, 0.3, z + 1.5);
            const lookAtPos = new THREE.Vector3(x, y, z);

            const startPos = camera.position.clone();
            const startTarget = controls.target.clone();
            const duration = 800;
            const startTime = Date.now();

            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeProgress = 1 - Math.pow(1 - progress, 3);

                camera.position.lerpVectors(startPos, targetPos, easeProgress);
                controls.target.lerpVectors(startTarget, lookAtPos, easeProgress);
                controls.update();

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            animate();
        }
    };

    const handleClose = () => {
        setActiveAnnotation(null);

        // Reset camera to default position (use mobile position if on mobile)
        if (controls) {
            const defaultPos = isMobile ? new THREE.Vector3(2, 0, 3.4) : new THREE.Vector3(0, 1.3, 3.8);
            const defaultTarget = new THREE.Vector3(0, 0, 0);
            const startPos = camera.position.clone();
            const startTarget = controls.target.clone();
            const duration = 600;
            const startTime = Date.now();

            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeProgress = 1 - Math.pow(1 - progress, 3);

                camera.position.lerpVectors(startPos, defaultPos, easeProgress);
                controls.target.lerpVectors(startTarget, defaultTarget, easeProgress);
                controls.update();

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            animate();
        }
    };

    // Don't render if no bounds available yet
    if (!carpetBounds || annotations.length === 0) {
        return null;
    }

    return (
        <group>
            {annotations.map((annotation) => (
                <AnnotationMarker
                    key={annotation.id}
                    annotation={annotation}
                    isActive={activeAnnotation?.id === annotation.id}
                    onClick={handleAnnotationClick}
                    onClose={handleClose}
                    isMobile={isMobile}
                />
            ))}
        </group>
    );
};

export default CarpetAnnotations;
