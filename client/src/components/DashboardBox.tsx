import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { Theme } from "@mui/material/styles";

const DashboardBox = styled(Box)(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.background.default, // or theme.palette.background.paper
  borderRadius: "1rem",
  boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)",
}));

export default DashboardBox;
