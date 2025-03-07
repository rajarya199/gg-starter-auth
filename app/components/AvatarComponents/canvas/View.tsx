"use client";

import { Three } from "@/helpers/components/Three";
import {
  OrbitControls,
  PerspectiveCamera,
  View as ViewImpl,
} from "@react-three/drei";
import { Suspense, forwardRef, useImperativeHandle, useRef } from "react";

export const Common = ({ color }: { color?: string }) => (
  <Suspense fallback={null}>
    {color && <color attach="background" args={[color]} />}
    <ambientLight />
    <pointLight position={[20, 30, 10]} intensity={5} decay={0.2} />
    <pointLight position={[-10, -10, -10]} color="white" decay={0.2} />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6.8]} />
  </Suspense>
);

const View = forwardRef(
  (
    {
      children,
      orbit,
      ...props
    }: { children: React.ReactNode; orbit: boolean },
    ref
  ) => {
    const localRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => localRef.current);

    return (
      <>
        <div ref={localRef} {...props} />
        <Three>
          <ViewImpl track={localRef as React.MutableRefObject<HTMLElement>}>
            {children}
            {orbit && <OrbitControls />}
          </ViewImpl>
        </Three>
      </>
    );
  }
);
View.displayName = "View";

export { View };
