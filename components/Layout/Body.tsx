import { Container } from "@mui/material";
import { ReactNode } from "react";

interface IBodyDocumentProps {
  children: ReactNode;
}

const BodyDocument = ({ children }: IBodyDocumentProps) => {
  return (
    <Container maxWidth="xl" component="main">
      {children}
    </Container>
  );
};

export default BodyDocument;
