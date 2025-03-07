// pages/Admin/Dashboard.jsx
import React, { useState } from "react";
import FileUploader from "../../components/FileUploader";
import api from "../../api/api";

const Dashboard = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      await api.post("/admin/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Archivo subido correctamente");
    } catch (error) {
      alert("Error al subir el archivo");
    }
  };

  return (
    <div>
      <h1>Panel de Administración</h1>
      <FileUploader onFileChange={(file) => setFile(file)} />
      <button onClick={handleFileUpload}>Subir archivo</button>
    </div>
  );
};

export default Dashboard;
