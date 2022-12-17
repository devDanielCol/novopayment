import { Avatar, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { useState } from "react";
import ConfirmLogOut from "../Atoms/ConfirmLogOut";

const SignIn = () => {
  const [close, setClose] = useState<boolean>(false);

  const handleLogOut = () => {
    setClose(!close);
  };

  return (
    <>
      <Box
        sx={{
          width: 150,
          minHeight: 100,
          p: 2,
        }}
      >
        <Link href="/profile">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              p: 0.5,
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            <Avatar />
            <Typography
              sx={{
                color: "black",
                ml: 1,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Perfil
            </Typography>
          </Box>
        </Link>
        <Box>
          <Button
            variant="contained"
            color="error"
            sx={{ p: 0, width: "100%", mt: 2 }}
            onClick={handleLogOut}
          >
            Salir
          </Button>
          <Typography
            sx={{ color: "black", fontSize: "10px", mt: "7px", lineHeight: 1 }}
          >
            Podras volver a iniciar sesion cuando quieras.
          </Typography>
        </Box>
      </Box>
      <ConfirmLogOut open={close} onClose={handleLogOut} />
    </>
  );
};

export default SignIn;
