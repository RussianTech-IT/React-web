import { Box } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to Admin Page" />
      </Box>

      {/* GRID & CHARTS */}
      <h1>Здесь что-то должно быть</h1>
      <h2>Панель для управления сайтом, контентом, который на нём находится, логи сайта реверс-прокси сервера nginx</h2>
    </Box>
  );
};

export default Dashboard;
