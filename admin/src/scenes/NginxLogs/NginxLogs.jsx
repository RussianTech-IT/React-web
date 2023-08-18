import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import './NginxLogs.css'

const NginxLogs = () => {
  const [logs, setLogs] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/api/nginxlogs', { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        setLogs(data)
        console.log(data)
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Box m="20px">
      <Header title="Логи" subtitle="Логи NGINX реверс-прокси сервера" />
      <div className="cmd-logs">
        {/* <h3>Access Log:</h3> */}
        <pre>{logs.access}</pre>
        {/* <h3>Admin Log:</h3> */}
        <pre>{logs.admin}</pre>
        {/* <h3>Error Log:</h3> */}
        <pre>{logs.error}</pre>
        {/* <h3>Site Log:</h3> */}
        <pre>{logs.site}</pre>
      </div>
    </Box>
  );
};

export default NginxLogs;