import { Popover, Box } from "@mui/material";
import useTheme from "../../../util/hooks/useTheme";
import ThemeButton from "../../ThemeProvider/ThemeBtn/ThemeBtn";

interface IMenuHmwProps {
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  onCloseFc(): void;
}

const MenuHmw = ({ open, anchorEl, onCloseFc }: IMenuHmwProps) => {
  const theme = useTheme();

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
          minHeight: 500,
          borderRadius: 3,
          p: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "100%", minHeight: 400 }}></Box>
        <Box
          sx={{
            mt: 2,
            height: "fit-content",
            borderRadius: 2.5,
            p: 0.1,
          }}
        >
          <Box
            sx={{
              borderRadius: 2.5,
              p: 2,
              textAlign: "center",
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <ThemeButton />
          </Box>
        </Box>
      </Box>
    </Popover>
  );
};

export default MenuHmw;
