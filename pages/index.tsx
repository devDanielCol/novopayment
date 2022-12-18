import { Box } from "@mui/material";
import Content from "../components/Layout/Content/Index";

export default function Home() {
  return (
    <Content title="NovoPayment">
      <Box
        sx={{
          width: "100%",
          minHeight: "80vh",
          backgroundImage: "url(/icons/bgContent.jpg)",
          backgroundSize: "content",
          backgroundRepeat: "repeat-x",
          backgroundColor: "#fff",
        }}
      ></Box>
    </Content>
  );
}
