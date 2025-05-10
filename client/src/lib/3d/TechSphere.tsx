import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface TechSphereProps {
  position?: [number, number, number];
  size?: number;
  color?: string;
  distortFactor?: number;
  speed?: number;
}

const TechSphere: React.FC<TechSphereProps> = ({
  position = [0, 0, 0],
  size = 1,
  color = "#4e13e8",
  distortFactor = 0.3,
  speed = 0.5
}) => {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  // Create a gradient texture for the sphere
  const sphereTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const context = canvas.getContext('2d');
    
    if (context) {
      // Create gradient
      const gradient = context.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      );
      
      gradient.addColorStop(0, '#6366f1');
      gradient.addColorStop(0.7, color);
      gradient.addColorStop(1, '#121629');
      
      // Fill with gradient
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, [color]);
  
  useFrame((state, delta) => {
    if (sphereRef.current) {
      // Rotate the sphere slightly each frame
      sphereRef.current.rotation.y += delta * speed * 0.2;
      sphereRef.current.rotation.z += delta * speed * 0.1;
      
      // Apply subtle breathing effect
      const time = state.clock.getElapsedTime();
      const breathingFactor = 1 + Math.sin(time * 0.5) * 0.03;
      sphereRef.current.scale.set(breathingFactor, breathingFactor, breathingFactor);
    }
  });
  
  return (
    <group position={[position[0], position[1], position[2]]}>
      {/* Core sphere with distort material */}
      <Sphere ref={sphereRef} args={[size, 64, 64]}>
        <MeshDistortMaterial
          distort={distortFactor}
          speed={1}
          roughness={0.4}
          metalness={0.8}
          color={color}
          map={sphereTexture}
        />
      </Sphere>
      
      {/* Outer glow - achieved with a larger transparent sphere */}
      <Sphere args={[size * 1.2, 32, 32]}>
        <meshBasicMaterial 
          color={color} 
          transparent={true} 
          opacity={0.1} 
          side={THREE.BackSide} 
        />
      </Sphere>
    </group>
  );
};

export default TechSphere;
