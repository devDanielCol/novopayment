import { Popover, Box } from "@mui/material";
import SignOut from "../../Navbar/Primary/NavbarDeskop/Atoms/SignOut/Molecules/SignOut";

interface IMenuHmwProps {
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  onCloseFc(): void;
}

const MenuHmw = ({ open, anchorEl, onCloseFc }: IMenuHmwProps) => {
  return (
    <Popover
      anchorEl={anchorEl}
      open={open}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{
        mt: 3,
        width: "100%",
        display: {
          md: "block",
          lg: "none",
        },
      }}
      disablePortal
      elevation={3}
      onClose={onCloseFc}
    >
      <Box
        sx={{
          width: {
            xs: "90vw",
            md: "60vw",
          },
          minHeight: 100,
          borderRadius: 3,
          p: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "100%", minHeight: 100 }}>
          <SignOut sx={{ width: "100%", color: "text.primary" }} />
        </Box>
      </Box>
    </Popover>
  );
};

export default MenuHmw;
