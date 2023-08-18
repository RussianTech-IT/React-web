import { Box } from "@mui/material";
import Header from "../../components/Header";

const NginxLogs = () => {
  return (
    <Box m="20px">
      <Header title="Логи" subtitle="Логи и прочая информация для сайта" />
      <div>
        <h1>Здесь будут логи с nginx и прочая белиберда крч логи сайта</h1>
      </div>
    </Box>
  );
};

export default NginxLogs;