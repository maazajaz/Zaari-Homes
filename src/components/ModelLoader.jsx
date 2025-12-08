import { useProgress } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';

const ModelLoader = () => {
    const { progress, active } = useProgress();

    return (
        <AnimatePresence>
            {active && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0f1c]" // Premium dark rich color
                >
                    {/* Background Texture/Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative z-10 flex flex-col items-center w-64"
                    >
                        {/* Title */}
                        <div className="mb-4 text-center">
                            <h3 className="text-xl font-light tracking-[0.2em] text-white/90 font-serif lowercase">
                                Zaari Homes
                            </h3>
                            <div className="w-8 h-[1px] bg-amber-500/50 mx-auto mt-2" />
                        </div>

                        {/* Text */}
                        <p className="mb-3 text-xs font-medium tracking-widest uppercase text-white/50">
                            Weaving 3D Model...
                        </p>

                        {/* Progress Bar Container */}
                        <div className="w-full h-[2px] bg-white/10 overflow-hidden relative">
                            {/* Animated Bar */}
                            <motion.div
                                className="h-full bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200"
                                style={{ width: `${progress}%` }}
                                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            />
                        </div>

                        {/* Percentage */}
                        <p className="mt-2 text-[10px] font-medium tracking-wider text-amber-500/80 font-mono">
                            {progress.toFixed(0)}%
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ModelLoader;
