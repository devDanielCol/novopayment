import { Typography, Box, SxProps, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FC, ReactNode, useState } from "react";

interface MenuCollapseProps {
  name: string;
  children: ReactNode;
  open?: boolean;
  sx?: SxProps;
  iconDistance?: string | number;
  icon?: boolean;
}

const MenuCollapse: FC<MenuCollapseProps> = ({
  name,
  children,
  open: defaultOpen,
  sx,
  iconDistance,
  icon,
}) => {
  const [open, setOpen] = useState<boolean>(defaultOpen as boolean);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          ml: 2,
          alignItems: "center",
          justifyContent: "center",
          color: "custom.navbartext",
          textAlign: "center",
          ...sx,
          px: 1.5,
          py: 1.5,
        }}
      >
        <Typography
          onClick={() => {
            setOpen(!open);
          }}
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
      <Collapse in={open} sx={{ p: 1 }}>
        {children}
      </Collapse>
    </Box>
  );
};

export default MenuCollapse;
