import { Button, Typography } from "@mui/material";
import { FC, MouseEvent } from "react";

interface IHmwButtonProps {
  onClick?(event: MouseEvent<HTMLButtonElement>): void;
  open?: boolean;
}

const HmwButton: FC<IHmwButtonProps> = ({ onClick, open }) => {
  return (
    <Button onClick={onClick} sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        component="div"
        sx={{
          width: "30px",
          height: "2px",
          backgroundColor: "white",
          transform: open
            ? "rotate(-45deg) translateX(-1px) translateY(7px)"
            : "",
          transition: "all .2s linear",
        }}
      />
      <Typography
        component="div"
        sx={{
          mt: 0.5,
          width: "30px",
          height: "2px",
          opacity: open ? "0%" : "100%",
          backgroundColor: "white",
          transition: "all .2s linear",
        }}
      />
      <Typography
        component="div"
        sx={{
          mt: 0.5,
          width: "30px",
          height: "2px",
          backgroundColor: "white",
          transform: open
            ? "rotate(45deg) translateX(-1px) translateY(-7px)"
            : "",
          transition: "all .2s linear",
        }}
      />
    </Button>
  );
};

export default HmwButton;
