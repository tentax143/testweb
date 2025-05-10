import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingObjectsProps {
  count?: number;
  area?: number;
}

const FloatingObjects: React.FC<FloatingObjectsProps> = ({
  count = 10,
  area = 5
}) => {
  // Create references for each object
  const objectsRef = useRef<THREE.Mesh[]>([]);
  
  // Generate random shapes and positions
  const objectsData = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      // Random position within the specified area
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * area,
        (Math.random() - 0.5) * area,
        (Math.random() - 0.5) * area
      );
      
      // Generate random parameters for the objects
      const shapeType = Math.floor(Math.random() * 3); // 0: box, 1: sphere, 2: torus
      const size = 0.2 + Math.random() * 0.3;
      const speed = 0.2 + Math.random() * 0.5;
      const rotationAxis = new THREE.Vector3(
        Math.random() - 0.5,
        Math.random() - 0.5,
        Math.random() - 0.5
      ).normalize();
      
      // Random color from tech palette
      const colors = [
        "#6366f1", // Indigo
        "#4f46e5", // Purple
        "#2563eb", // Blue
        "#0ea5e9", // Sky
        "#14b8a6"  // Teal
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      return {
        id: i,
        position,
        shapeType,
        size,
        speed,
        rotationAxis,
        color
      };
    });
  }, [count, area]);
  
  // Animation loop
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    
    objectsRef.current.forEach((mesh, i) => {
      if (!mesh) return;
      
      const data = objectsData[i];
      
      // Calculate a unique oscillation for each object
      const oscillation = Math.sin(time * data.speed + i) * 0.1;
      
      // Apply oscillation to position
      mesh.position.x = data.position.x + oscillation;
      mesh.position.y = data.position.y + oscillation * 1.5;
      mesh.position.z = data.position.z + oscillation * 0.5;
      
      // Rotate object around its custom axis
      mesh.rotateOnAxis(data.rotationAxis, delta * data.speed);
    });
  });
  
  return (
    <group>
      {objectsData.map((data, i) => {
        // Generate different shapes based on shapeType
        let geometry;
        if (data.shapeType === 0) {
          geometry = <boxGeometry args={[data.size, data.size, data.size]} />;
        } else if (data.shapeType === 1) {
          geometry = <sphereGeometry args={[data.size / 2, 16, 16]} />;
        } else {
          geometry = <torusGeometry args={[data.size / 2, data.size / 6, 16, 32]} />;
        }
        
        return (
          <mesh
            key={data.id}
            ref={(el) => {
              if (el) objectsRef.current[i] = el;
            }}
            position={[data.position.x, data.position.y, data.position.z]}
          >
            {geometry}
            <meshStandardMaterial 
              color={data.color} 
              roughness={0.5} 
              metalness={0.8}
              emissive={data.color}
              emissiveIntensity={0.2}
            />
          </mesh>
        );
      })}
    </group>
  );
};

export default FloatingObjects;
