import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  shape: "circle" | "triangle" | "square" | "hexagon";
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const particleCount = Math.min(30, Math.floor(window.innerWidth / 50));
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 20 + 10,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      opacity: Math.random() * 0.3 + 0.1,
      shape: ["circle", "triangle", "square", "hexagon"][Math.floor(Math.random() * 4)] as Particle["shape"],
    }));

    const drawShape = (particle: Particle) => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);
      ctx.globalAlpha = particle.opacity;
      ctx.strokeStyle = "hsl(187, 100%, 50%)";
      ctx.lineWidth = 1;

      switch (particle.shape) {
        case "circle":
          ctx.beginPath();
          ctx.arc(0, 0, particle.size / 2, 0, Math.PI * 2);
          ctx.stroke();
          break;
        case "triangle":
          ctx.beginPath();
          ctx.moveTo(0, -particle.size / 2);
          ctx.lineTo(-particle.size / 2, particle.size / 2);
          ctx.lineTo(particle.size / 2, particle.size / 2);
          ctx.closePath();
          ctx.stroke();
          break;
        case "square":
          ctx.strokeRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
          break;
        case "hexagon":
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const x = (particle.size / 2) * Math.cos(angle);
            const y = (particle.size / 2) * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.stroke();
          break;
      }

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;

        // Wrap around screen
        if (particle.x < -particle.size) particle.x = canvas.width + particle.size;
        if (particle.x > canvas.width + particle.size) particle.x = -particle.size;
        if (particle.y < -particle.size) particle.y = canvas.height + particle.size;
        if (particle.y > canvas.height + particle.size) particle.y = -particle.size;

        drawShape(particle);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
