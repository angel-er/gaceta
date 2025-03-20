import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicHome from "#pages/Client/Home/Home.js";
import PageInit from "#pages/Client/PageInit/PageInit.js";

import { PATH_PAGE_PUBLIC } from "./statics";
import Error404 from "#components/Errors/404/404.js";
import Error500 from "#components/Errors/500/500.js";

import Mission from "#pages/Client/Mission/Mission.js";
import Vision from "#pages/Client/Vision/Vision.js";
import Procedures from "#pages/Client/Procedures/Procedures.js";
import Resolutions from "#pages/Client/Resolution/Resolution.js";

const RouterApp = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path={PATH_PAGE_PUBLIC.root} element={<PublicHome />}>
          <Route index element={<PageInit />} />
          <Route
            path={PATH_PAGE_PUBLIC.institution.mission}
            element={<Mission />}
          />
          <Route
            path={PATH_PAGE_PUBLIC.institution.vision}
            element={<Vision />}
          />
          <Route
            path={PATH_PAGE_PUBLIC.institution.procedures}
            element={<Procedures />}
          />
          <Route
            path={PATH_PAGE_PUBLIC.gazette.resolutions}
            element={<Resolutions />}
          />
          <Route
            path={PATH_PAGE_PUBLIC.gazette.municipalDecrees}
            element={<Procedures />}
          />
          <Route
            path={PATH_PAGE_PUBLIC.gazette.municipalLows}
            element={<Procedures />}
          />
          <Route
            path={PATH_PAGE_PUBLIC.gazette.municipalOrdinances}
            element={<Procedures />}
          />
          <Route
            path={PATH_PAGE_PUBLIC.gazette.municipalOrdinances}
            element={<Procedures />}
          />
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
