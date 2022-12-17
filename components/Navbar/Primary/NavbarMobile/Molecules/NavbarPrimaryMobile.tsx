import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import Link from "next/link";
import { FC, MouseEvent, useState } from "react";
import MenuHmw from "../../../../Menu/Molecules/MenuHmw";
import HmwButton from "../Atoms/HmwButton";

interface NavbarDeskopProps {
  window?: () => Window;
}

const NavbarPrimaryDeskop: FC<NavbarDeskopProps> = (props) => {
  const { window } = props;
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: window ? window() : undefined,
  });

  return (
    <>
      <AppBar
        sx={{
          width: "100%",
          boxShadow: 0,
          transition: "all .2s linear",
          backgroundColor: "custom.navbar",
          backgroundImage: "none",
          display: {
            xs: "block",
            lg: "none",
          },
          p: 0,
        }}
      >
        <Toolbar>
          <Grid container sx={{ py: trigger ? 0.5 : 2 }}>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ fontSize: "1.5rem", letterSpacing: 1.5, fontWeight: 700 }}
              >
                <Link href={"/"}>Tu PruTec</Link>
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                color: "white",
              }}
            >
              <HmwButton onClick={handleClick} open={menuOpen} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <MenuHmw onCloseFc={handleClose} anchorEl={anchorEl} open={menuOpen} />
    </>
  );
};

export default NavbarPrimaryDeskop;
