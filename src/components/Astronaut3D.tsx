import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const AstronautModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const armRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (armRef.current) {
      armRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 3) * 0.3 + 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1}>
      <group ref={groupRef} scale={1.2}>
        {/* Helmet */}
        <mesh position={[0, 1.8, 0]}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial color="#e0e0e0" metalness={0.3} roughness={0.4} />
        </mesh>
        
        {/* Visor */}
        <mesh position={[0, 1.8, 0.35]}>
          <sphereGeometry args={[0.45, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#00eaff" metalness={0.8} roughness={0.1} transparent opacity={0.7} />
        </mesh>

        {/* Helmet ring */}
        <mesh position={[0, 1.35, 0]}>
          <torusGeometry args={[0.45, 0.08, 16, 32]} />
          <meshStandardMaterial color="#888888" metalness={0.6} roughness={0.3} />
        </mesh>

        {/* Body */}
        <mesh position={[0, 0.5, 0]}>
          <capsuleGeometry args={[0.5, 0.8, 8, 16]} />
          <meshStandardMaterial color="#f5f5f5" metalness={0.1} roughness={0.6} />
        </mesh>

        {/* Backpack */}
        <mesh position={[0, 0.5, -0.45]}>
          <boxGeometry args={[0.6, 0.9, 0.3]} />
          <meshStandardMaterial color="#cccccc" metalness={0.2} roughness={0.5} />
        </mesh>

        {/* Left Arm */}
        <group position={[-0.7, 0.7, 0]}>
          <mesh>
            <capsuleGeometry args={[0.15, 0.5, 8, 16]} />
            <meshStandardMaterial color="#f5f5f5" metalness={0.1} roughness={0.6} />
          </mesh>
        </group>

        {/* Right Arm - Waving */}
        <group ref={armRef} position={[0.7, 0.9, 0]}>
          <mesh position={[0.2, 0.3, 0]} rotation={[0, 0, 0.8]}>
            <capsuleGeometry args={[0.15, 0.5, 8, 16]} />
            <meshStandardMaterial color="#f5f5f5" metalness={0.1} roughness={0.6} />
          </mesh>
          {/* Glove/Hand */}
          <mesh position={[0.45, 0.55, 0]}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial color="#00eaff" metalness={0.3} roughness={0.4} emissive="#00eaff" emissiveIntensity={0.3} />
          </mesh>
        </group>

        {/* Left Leg */}
        <mesh position={[-0.25, -0.5, 0]}>
          <capsuleGeometry args={[0.18, 0.6, 8, 16]} />
          <meshStandardMaterial color="#f5f5f5" metalness={0.1} roughness={0.6} />
        </mesh>

        {/* Right Leg */}
        <mesh position={[0.25, -0.5, 0]}>
          <capsuleGeometry args={[0.18, 0.6, 8, 16]} />
          <meshStandardMaterial color="#f5f5f5" metalness={0.1} roughness={0.6} />
        </mesh>

        {/* Boots */}
        <mesh position={[-0.25, -1.0, 0.05]}>
          <boxGeometry args={[0.25, 0.2, 0.35]} />
          <meshStandardMaterial color="#333333" metalness={0.3} roughness={0.5} />
        </mesh>
        <mesh position={[0.25, -1.0, 0.05]}>
          <boxGeometry args={[0.25, 0.2, 0.35]} />
          <meshStandardMaterial color="#333333" metalness={0.3} roughness={0.5} />
        </mesh>

        {/* Chest detail */}
        <mesh position={[0, 0.7, 0.45]}>
          <boxGeometry args={[0.3, 0.15, 0.1]} />
          <meshStandardMaterial color="#00eaff" metalness={0.5} roughness={0.3} emissive="#00eaff" emissiveIntensity={0.5} />
        </mesh>
      </group>
    </Float>
  );
};

const Astronaut3D = () => {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-5, 3, 0]} intensity={0.5} color="#00eaff" />
        <pointLight position={[5, -3, 0]} intensity={0.3} color="#00eaff" />
        <AstronautModel />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
};

export default Astronaut3D;
