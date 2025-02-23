import React, { ReactNode, FC, CSSProperties } from "react";
import { Canvas, Dpr } from "@react-three/fiber";
import { Vector3, ACESFilmicToneMapping } from "three";
import { CameraProps } from "@/types/avatar";
import { hasWindow } from "@/services/avatar/Client.service";
import styles from "./BaseCanvas.module.scss";

interface BaseCanvasProps extends CameraProps {
  children?: ReactNode;
  fov?: number;
  style?: CSSProperties;
  dpr?: Dpr;
  className?: string;
}

const BASE_DPR = hasWindow ? window.devicePixelRatio : 1;

export const BaseCanvas: FC<BaseCanvasProps> = ({
  children = undefined,
  fov = 50,
  position = new Vector3(0, 0, 5),
  style,
  dpr = [BASE_DPR * 0.5, 2],
  className,
}) => (
  <Canvas
    key={fov}
    className={`${styles["base-canvas"]} ${className ?? ""}`}
    shadows="soft"
    gl={{
      preserveDrawingBuffer: true,
      alpha: true,
      toneMappingExposure: 1.6,
      toneMapping: ACESFilmicToneMapping,
    }}
    dpr={dpr}
    camera={{ fov, position }}
    resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }}
    style={{ ...style, background: "transparent" }}
  >
    {children}
  </Canvas>
);
