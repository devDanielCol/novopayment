import {
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
  Box,
  SxProps,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "@emotion/styled";
import { FC, ReactNode, useState } from "react";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "transparent",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: "100%",
    padding: 0,
    margin: 0,
  },
}));

interface IMenuToolpitProps {
  name: string;
  children: ReactNode;
  open?: boolean;
  sx?: SxProps;
  iconDistance?: string | number;
  icon?: boolean;
  underline?: boolean;
  placement?: "right-start";
}

const MenuToolpit: FC<IMenuToolpitProps> = ({
  name,
  children,
  open: defaultOpen,
  sx,
  iconDistance,
  icon,
  placement,
}) => {
  const [open, setOpen] = useState<boolean>(defaultOpen as boolean);

  return (
    <LightTooltip
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      title={children}
      placement={placement ? placement : "bottom-start"}
    >
      <Box
        sx={{
          display: "flex",
          ml: 2,
          alignItems: "center",
          justifyContent: "center",
          color: "custom.navbartext",
          borderBottom: open
            ? "solid #1500a1 3.5px"
            : "solid transparent 3.5px",
          textAlign: "center",
          ...sx,
          px: 1.5,
          py: 1.5,
        }}
      >
        <Typography
          sx={{
            fontWeight: 300,
            alignItems: "center",
            transition: "all .2s linear",
            lineHeight: 1,
            color: "inherit",
            mr: iconDistance ? iconDistance : 2.8,
            fontSize: "0.9rem",
            textTransform: "inherit",
            textAlign: "inherit",
            m: 0,
          }}
          component="span"
        >
          {name}
        </Typography>
        {icon && (
          <ExpandMoreIcon
            className="icon__expand-more"
            sx={{
              opacity: open ? "100%" : "100%",
              transition: "all .2s linear",
              transform: open ? "translateY(3px)" : "translateY(0px)",
              color: "custom.navbartext",
            }}
          />
        )}
      </Box>
    </LightTooltip>
  );
};

export default MenuToolpit;
