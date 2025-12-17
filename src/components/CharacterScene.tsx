import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import Character3D from "./Character3D";

const CharacterScene = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full h-full min-h-[400px] relative">
      <Canvas
        camera={{ position: [0, 1, 4], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <directionalLight position={[-3, 3, 2]} intensity={0.3} />
          <pointLight position={[0, 2, -2]} intensity={0.2} color="#00eaff" />

          {/* Character */}
          <Character3D mousePosition={mousePosition} />

          {/* Ground Shadow */}
          <ContactShadows
            position={[0, -0.7, 0]}
            opacity={0.4}
            scale={3}
            blur={2}
            far={2}
          />
        </Suspense>
      </Canvas>

      {/* Glow effect behind character */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
      </div>
    </div>
  );
};

export default CharacterScene;
