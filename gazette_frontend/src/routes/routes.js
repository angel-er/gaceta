import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicHome from "#pages/Client/Home/Home.js";
import PageInit from "#pages/Client/PageInit/PageInit.js";

import Error404 from "#components/Errors/404/404.js";
import Error500 from "#components/Errors/500/500.js";
import About from "#components/About.js";
import Services from "#components/Services.js";

const RouterApp = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<PublicHome />}>
          <Route index element={<PageInit />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Route>

        {/* Otras rutas */}
        {/* <Route path="/panel-admin/login" element={<Login />} /> */}

        {/* Rutas privadas para el administrador */}
        {/* <Route element={<PrivateRoute />}>
          <Route path="/panel-admin/dashboard" element={<Dashboard />} />
        </Route> */}
        <Route path="/error-server" element={<Error500 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default RouterApp;
