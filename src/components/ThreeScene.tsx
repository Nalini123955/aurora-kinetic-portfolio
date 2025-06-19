
import { useRef, useMemo } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Extend the JSX namespace to include Three.js elements
extend({ 
  Mesh: THREE.Mesh,
  TorusKnotGeometry: THREE.TorusKnotGeometry,
  MeshBasicMaterial: THREE.MeshBasicMaterial,
  AmbientLight: THREE.AmbientLight,
  PointLight: THREE.PointLight
});

interface FloatingGeometryProps {
  mousePosition: { x: number; y: number };
}

const FloatingGeometry = ({ mousePosition }: FloatingGeometryProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.x = mousePosition.x * 0.5;
      meshRef.current.position.y = mousePosition.y * 0.5;
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <>
      {/* Floating wireframe geometry */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshBasicMaterial color="#8B5CF6" wireframe />
      </mesh>

      {/* Particle cloud */}
      <Points ref={pointsRef} positions={particlesPosition} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#06B6D4"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </>
  );
};

interface ThreeSceneProps {
  mousePosition: { x: number; y: number };
}

export const ThreeScene = ({ mousePosition }: ThreeSceneProps) => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <FloatingGeometry mousePosition={mousePosition} />
    </Canvas>
  );
};
