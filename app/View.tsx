"use client"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Racks from "./Racks";

const View = () => {
  return (
    <div className="flex justify-center flex-col w-full h-full bg-transparent p-6">
      <div className="flex flex-col items-center w-full h-full rounded-xl bg-slate-600 pt-4 p-2">
        <h1>3d View</h1>
        <div className="flex flex-col items-center w-full h-full rounded-xl bg-transparent pt-4 p-2">
          <Canvas shadows camera={{ position: [0, 30, 0], fov: 30 }}>
            <ambientLight intensity={0.7} />
            <spotLight intensity={0.8} angle={0.1} penumbra={6} position={[10, 15, 10]} castShadow />
            <Suspense fallback={null}>
              <Racks />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default View