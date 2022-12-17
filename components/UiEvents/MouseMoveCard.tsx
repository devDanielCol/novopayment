import { Box, SxProps } from "@mui/material";
import { FC, MouseEvent, ReactNode, useRef, useState } from "react";

interface onMoveEvent {
  height: number;
  width: number;
  left: number;
  top: number;
  pageX: number;
  pageY: number;
  centerX: number;
  centerY: number;
}

interface IMouseMoveContentProps {
  children?: ReactNode;
  sx?: SxProps;
  onMove?(event: onMoveEvent): void;
}

const MouseMoveContent: FC<IMouseMoveContentProps> = ({
  children,
  sx,
  onMove,
}) => {
  const ref = useRef<HTMLElement>();
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);

  const handleMouseMove = ({ pageX, pageY }: MouseEvent) => {
    const element = ref.current?.getBoundingClientRect();
    const height = element?.height || 0;
    const width = element?.width || 0;
    const left = element?.left || 0;
    const top = element?.top || 0;

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const dX = pageX - centerX;
    const dY = pageY - centerY;

    const porcentX = (dX / 360) * 100;
    const porcentY = (dY / 360) * 1;

    setRotateX(-porcentX);
    setRotateY(-porcentY);
    onMove &&
      onMove({ height, width, left, top, pageX, pageY, centerX, centerY });
  };

  const handleMouseOut = () => {
    setRotateX(1);
    setRotateY(1);
  };

  return (
    <Box ref={ref} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
      <Box
        sx={{
          ...sx,
          transition: "all 0.2s linear",
          zIndex: 10,
          transform: `perspective(900px) rotateY(${rotateX}deg) rotateX(${rotateY}deg)`,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MouseMoveContent;
