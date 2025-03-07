// pages/Client/Information.jsx
import React, { useEffect, useState } from "react";
import api from "../../api/api";

const Information = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await api.get("/files");
        setFiles(response.data);
      } catch (error) {
        console.error("Error al obtener los archivos:", error);
      }
    };
    fetchFiles();
  }, []);

  const handleDownload = async (filename) => {
    try {
      const response = await api.get(`/files/download/${filename}`, {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error al descargar el archivo:", error);
    }
  };

  return (
    <div>
      <h1>Información para Clientes</h1>
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            {file.name}{" "}
            <button onClick={() => handleDownload(file.name)}>Descargar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Information;
