import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import Link from "next/link";
import MenuToolpit from "../../../Global/MenuToolpit/MenuToolpit";
import MouseMoveContent from "../../../../UiEvents/MouseMoveCard";

const NavbarPrimaryDeskop = () => {
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          width: "100%",
          boxShadow: 0,
          transition: "all .2s linear",
          backgroundColor: "custom.navbar",
          backgroundImage: "none",
          display: {
            xs: "none",
            lg: "block",
          },
          p: 0,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <MouseMoveContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ fontSize: "1.5rem", letterSpacing: 1.5, fontWeight: 700 }}
              >
                <Link href={"/"}>Tu PruTec</Link>
              </Typography>
            </Box>
          </MouseMoveContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <MenuToolpit element={<></>} name="User name" sx={{ mr: 7 }} />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default NavbarPrimaryDeskop;
