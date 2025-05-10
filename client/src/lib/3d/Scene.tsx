import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, useAspect, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import FloatingObjects from "./FloatingObjects";
import TechSphere from "./TechSphere";
import Particles from "./Particles";

interface SceneProps {
  interactive?: boolean;
  intensity?: number;
  cameraPosition?: [number, number, number];
  showSphere?: boolean;
  showFloatingObjects?: boolean;
  showParticles?: boolean;
  className?: string;
}

// Camera controller component
function CameraController() {
  const { camera } = useThree();
  const controlsRef = useRef<any>(null);
  
  useEffect(() => {
    if (controlsRef.current) {
      // Initial camera adjustments
      camera.lookAt(0, 0, 0);
    }
  }, [camera]);

  return (
    <OrbitControls 
      ref={controlsRef} 
      enableZoom={false}
      enablePan={false}
      rotateSpeed={0.5}
      maxPolarAngle={Math.PI / 1.8}
      minPolarAngle={Math.PI / 2.5}
    />
  );
}

// Main scene component
const Scene: React.FC<SceneProps> = ({
  interactive = false,
  intensity = 1,
  cameraPosition = [0, 0, 5],
  showSphere = true,
  showFloatingObjects = true,
  showParticles = true,
  className
}) => {
  return (
    <div className={`canvas-container ${interactive ? "interactive" : ""} ${className}`}>
      <Canvas
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: true
        }}
        dpr={window.devicePixelRatio > 2 ? 2 : window.devicePixelRatio}
      >
        <PerspectiveCamera makeDefault position={cameraPosition} fov={75} near={0.1} far={1000} />
        
        {/* Lights */}
        <ambientLight intensity={0.5 * intensity} />
        <directionalLight position={[10, 10, 5]} intensity={1 * intensity} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={0.5 * intensity} color="#4e13e8" />
        
        {/* Controls if interactive */}
        {interactive && <CameraController />}
        
        {/* 3D elements */}
        {showSphere && <TechSphere position={[0, 0, 0]} size={1.5} />}
        {showFloatingObjects && <FloatingObjects count={6} area={3} />}
        {showParticles && <Particles count={100} />}
      </Canvas>
    </div>
  );
};

export default Scene;
