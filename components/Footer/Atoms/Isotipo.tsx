import { Box } from "@mui/system";
import Image from "next/image";

const Isotipo = () => {
  return (
    <Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Image alt="isotipo" src="/icons/isotipo.svg" width={100} height={60} />
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Image alt="isotipo" src="/icons/isotipo.svg" width={70} height={50} />
      </Box>
    </Box>
  );
};

export default Isotipo;
