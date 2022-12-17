import {
  Dialog,
  DialogContent,
  Typography,
  DialogActions,
  Button,
} from "@mui/material";
import { FC } from "react";

interface ConfirmLogOutProps {
  open: boolean;
  onClose(): void;
}

const ConfirmLogOut: FC<ConfirmLogOutProps> = ({ onClose, open }) => {
  const handleSignOut = () => {
    console.log("not-auth");
  };

  return (
    <Dialog open={open} maxWidth="xs" onClose={onClose}>
      <DialogContent
        sx={{
          px: 3,
          pt: 3,
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          borderRadius: "20px",
        }}
      >
        <Typography sx={{ fontSize: "1.5rem" }}>¿Estas seguro?</Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", pb: 3, px: 3 }}>
        <Button
          variant="text"
          color="success"
          onClick={onClose}
          sx={{
            p: "4px",
          }}
        >
          No
        </Button>
        <Button
          variant="text"
          color="error"
          onClick={handleSignOut}
          sx={{ p: "4px" }}
        >
          Si
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmLogOut;
