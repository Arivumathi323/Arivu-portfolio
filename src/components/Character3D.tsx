import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface Character3DProps {
  mousePosition: { x: number; y: number };
}

const Character3D = ({ mousePosition }: Character3DProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.getElapsedTime();

    // Breathing animation - subtle up/down
    groupRef.current.position.y = Math.sin(time * 2) * 0.05;

    // Mouse following - smooth rotation
    const targetRotationY = mousePosition.x * 0.3;
    const targetRotationX = -mousePosition.y * 0.2;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotationY,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotationX,
      0.05
    );

    // Waving animation for right arm
    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = Math.sin(time * 4) * 0.4 + 0.8;
      rightArmRef.current.rotation.x = Math.sin(time * 4 + 0.5) * 0.2;
    }

    // Subtle left arm movement
    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = Math.sin(time * 1.5) * 0.05 - 0.8;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Head */}
      <mesh position={[0, 1.6, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#f5d0c5" />
      </mesh>

      {/* Hair */}
      <group position={[0, 1.85, 0]}>
        <mesh position={[0, 0.1, 0]}>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial color="#5c4033" />
        </mesh>
        <mesh position={[-0.2, 0, 0.15]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#5c4033" />
        </mesh>
        <mesh position={[0.2, 0, 0.15]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#5c4033" />
        </mesh>
        <mesh position={[0, -0.05, 0.2]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#5c4033" />
        </mesh>
      </group>

      {/* Eyes */}
      <mesh position={[-0.12, 1.65, 0.35]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.12, 1.65, 0.35]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      {/* Pupils */}
      <mesh position={[-0.12, 1.65, 0.4]}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshStandardMaterial color="#2c1810" />
      </mesh>
      <mesh position={[0.12, 1.65, 0.4]}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshStandardMaterial color="#2c1810" />
      </mesh>

      {/* Smile */}
      <mesh position={[0, 1.48, 0.35]} rotation={[0.3, 0, 0]}>
        <torusGeometry args={[0.1, 0.02, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#d4736a" />
      </mesh>

      {/* Body - Blue T-shirt */}
      <mesh position={[0, 0.9, 0]}>
        <capsuleGeometry args={[0.35, 0.5, 8, 16]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>

      {/* Left Arm */}
      <group ref={leftArmRef} position={[-0.45, 1.1, 0]}>
        <mesh position={[-0.2, -0.15, 0]} rotation={[0, 0, -0.3]}>
          <capsuleGeometry args={[0.08, 0.35, 8, 16]} />
          <meshStandardMaterial color="#f5d0c5" />
        </mesh>
        {/* Left Hand */}
        <mesh position={[-0.35, -0.4, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#f5d0c5" />
        </mesh>
      </group>

      {/* Right Arm (Waving) */}
      <group ref={rightArmRef} position={[0.45, 1.1, 0]}>
        <mesh position={[0.2, 0.15, 0]} rotation={[0, 0, 0.3]}>
          <capsuleGeometry args={[0.08, 0.35, 8, 16]} />
          <meshStandardMaterial color="#f5d0c5" />
        </mesh>
        {/* Right Hand */}
        <mesh position={[0.35, 0.45, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#f5d0c5" />
        </mesh>
        {/* Fingers for waving hand */}
        <mesh position={[0.4, 0.55, 0]}>
          <capsuleGeometry args={[0.025, 0.08, 4, 8]} />
          <meshStandardMaterial color="#f5d0c5" />
        </mesh>
        <mesh position={[0.35, 0.58, 0.03]}>
          <capsuleGeometry args={[0.025, 0.08, 4, 8]} />
          <meshStandardMaterial color="#f5d0c5" />
        </mesh>
        <mesh position={[0.3, 0.55, 0]}>
          <capsuleGeometry args={[0.025, 0.08, 4, 8]} />
          <meshStandardMaterial color="#f5d0c5" />
        </mesh>
      </group>

      {/* Legs */}
      <mesh position={[-0.15, 0.2, 0]}>
        <capsuleGeometry args={[0.1, 0.4, 8, 16]} />
        <meshStandardMaterial color="#374151" />
      </mesh>
      <mesh position={[0.15, 0.2, 0]}>
        <capsuleGeometry args={[0.1, 0.4, 8, 16]} />
        <meshStandardMaterial color="#374151" />
      </mesh>

      {/* Shoes */}
      <mesh position={[-0.15, -0.15, 0.05]}>
        <boxGeometry args={[0.15, 0.1, 0.25]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>
      <mesh position={[0.15, -0.15, 0.05]}>
        <boxGeometry args={[0.15, 0.1, 0.25]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>
    </group>
  );
};

export default Character3D;
