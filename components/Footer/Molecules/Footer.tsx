import * as React from "react";
import { Box, Divider, Grid } from "@mui/material";
import useTheme from "../../../util/hooks/useTheme";
import Isotipo from "../Atoms/Isotipo";
import Copyright from "../Atoms/Copyright";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        scrollSnapAlign: "start",
        scrollSnapStop: "normal",
        backgroundColor: theme.palette.custom.footer,
        color: "white",
      }}
      component="footer"
    >
      <Divider
        sx={{ width: "100%", backgroundColor: "#00ddf9", padding: "1px" }}
      />
      <Grid
        container
        sx={{
          minHeight: {
            xs: 50,
            md: 100,
          },
        }}
      >
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Isotipo />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Copyright />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Isotipo />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
