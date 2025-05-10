import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Torus } from "@react-three/drei";
import * as THREE from "three";

interface OrbitModelProps {
  position?: [number, number, number];
  scale?: number;
  speed?: number;
  color?: string;
}

const OrbitModel: React.FC<OrbitModelProps> = ({
  position = [0, 0, 0],
  scale = 1,
  speed = 1,
  color = "#4f46e5"
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const innerOrbitRef = useRef<THREE.Mesh>(null);
  const outerOrbitRef = useRef<THREE.Mesh>(null);
  const satellite1Ref = useRef<THREE.Mesh>(null);
  const satellite2Ref = useRef<THREE.Mesh>(null);
  
  // Animation loop
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    
    // Rotate the entire group
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1 * speed;
    }
    
    // Rotate the orbit rings
    if (innerOrbitRef.current) {
      innerOrbitRef.current.rotation.z += delta * 0.2 * speed;
      innerOrbitRef.current.rotation.x += delta * 0.1 * speed;
    }
    
    if (outerOrbitRef.current) {
      outerOrbitRef.current.rotation.z -= delta * 0.15 * speed;
      outerOrbitRef.current.rotation.x += delta * 0.15 * speed;
    }
    
    // Move satellites along orbits
    if (satellite1Ref.current) {
      satellite1Ref.current.position.x = Math.cos(time * speed) * 1.5 * scale;
      satellite1Ref.current.position.z = Math.sin(time * speed) * 1.5 * scale;
    }
    
    if (satellite2Ref.current) {
      satellite2Ref.current.position.x = Math.cos(time * speed * 0.7 + Math.PI) * 2.5 * scale;
      satellite2Ref.current.position.z = Math.sin(time * speed * 0.7 + Math.PI) * 2.5 * scale;
    }
  });
  
  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Core sphere */}
      <Sphere args={[0.5, 32, 32]}>
        <meshStandardMaterial 
          color={color}
          metalness={0.8}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Sphere>
      
      {/* Inner orbit ring */}
      <Torus ref={innerOrbitRef} args={[1.5, 0.03, 16, 100]}>
        <meshStandardMaterial 
          color="#ffffff"
          transparent
          opacity={0.5}
          emissive="#ffffff"
          emissiveIntensity={0.3}
        />
      </Torus>
      
      {/* Outer orbit ring */}
      <Torus ref={outerOrbitRef} args={[2.5, 0.02, 16, 100]}>
        <meshStandardMaterial 
          color="#ffffff"
          transparent
          opacity={0.3}
          emissive="#ffffff"
          emissiveIntensity={0.2}
        />
      </Torus>
      
      {/* Inner satellite */}
      <Sphere ref={satellite1Ref} args={[0.15, 16, 16]} position={[1.5, 0, 0]}>
        <meshStandardMaterial 
          color="#14b8a6"
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>
      
      {/* Outer satellite */}
      <Sphere ref={satellite2Ref} args={[0.2, 16, 16]} position={[2.5, 0, 0]}>
        <meshStandardMaterial 
          color="#6366f1"
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>
    </group>
  );
};

export default OrbitModel;
