import { Box } from "@mui/material";
import { ReactNode } from "react";

interface IBodyDocumentProps {
  children: ReactNode;
}

const BodyDocument = ({ children }: IBodyDocumentProps) => {
  return (
    <Box component="main" sx={{ p: 0 }}>
      {children}
    </Box>
  );
};

export default BodyDocument;
