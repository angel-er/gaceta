// pages/Client/Information.jsx
import React, { useEffect, useState } from "react";
// import api from "../../api/api";
import Navbar from "#components/Navbar/Navbar.js";
import { Outlet } from "react-router-dom";
import Header from "#components/Header/Header.js";
import { HeaderStyles } from "./Home.styles";

const Information = ({ children }) => {
  const [files, setFiles] = useState([]);

  //   useEffect(() => {
  //     const fetchFiles = async () => {
  //       try {
  //         const response = await api.get("/files");
  //         setFiles(response.data);
  //       } catch (error) {
  //         console.error("Error al obtener los archivos:", error);
  //       }
  //     };
  //     fetchFiles();
  //   }, []);

  //   const handleDownload = async (filename) => {
  //     try {
  //   const response = await api.get(`/files/download/${filename}`, {
  //     responseType: "blob",
  //   });
  //   const url = window.URL.createObjectURL(new Blob([response.data]));
  //   const link = document.createElement("a");
  //   link.href = url;
  //   link.setAttribute("download", filename);
  //   document.body.appendChild(link);
  //   link.click();
  //   link.remove();
  //     } catch (error) {
  //       console.error("Error al descargar el archivo:", error);
  //     }
  //   };

  return (
    <div>
      <HeaderStyles>
        <Header />
        <Navbar />
      </HeaderStyles>
      <Outlet />
    </div>
  );
};

export default Information;
