import { Typography } from "@mui/material";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{
        fontSize: {
          xs: "0.6rem",
          md: "0.8rem",
          fontWeight: 600,
          color: "inherit",
        },
      }}
    >
      {"© "}
      {new Date().getFullYear()}
      {" Novopayment Inc. All rights reserved."}
    </Typography>
  );
}

export default Copyright;
