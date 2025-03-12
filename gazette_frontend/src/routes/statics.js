function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS = {
  auth: "/",
  app: "/dashboard",
  docs: "/docs",
};

export const PATH_PAGE = {
  auth: {
    root: ROOTS.auth,
    login: path(ROOTS.auth, "login"),
    loginUnprotected: path(ROOTS.auth, "login-unprotected"),
    register: path(ROOTS.auth, "register"),
    registerUnprotected: path(ROOTS.auth, "register-unprotected"),
    resetPassword: path(ROOTS.auth, "reset-password"),
    verify: path(ROOTS.auth, "verify"),
  },
};

export const PATH_APP = {
  dashboard: ROOTS.app,
  home: path(ROOTS.app, "/home"),
  coverage: {
    listCoverage: path(ROOTS.app, "/cobertura"),
    coverageDetail: path(ROOTS.app, "/cobertura/detalle/:id"),
    editCoverage: path(ROOTS.app, "/cobertura/editar/:id"),
    newResponse: path(ROOTS.app, "/cobertura/nueva-respuesta"),
  },
  buildings: {
    listBuildings: path(ROOTS.app, "/edificios/listado"),
  },
  edificios: {
    root: path(ROOTS.app, "/edificios"),
    domicilios: path(ROOTS.app, "/edificios/domicilios"),
    hoteles: path(ROOTS.app, "/edificios/hoteles"),
    blockages: path(ROOTS.app, "/edificios/motivos-bloqueo"),
    blockageDetails: path(ROOTS.app, "/edificios/motivos-bloqueo/detalle/:id"),
    blockageCreate: path(ROOTS.app, "/edificios/motivos-bloqueo/nuevo"),
    blockageEdit: path(ROOTS.app, "/edificios/motivos-bloqueo/editar/:id"),
    listBuildings: path(ROOTS.app, "/edificios"),
    detail: path(ROOTS.app, "/edificios/detalle/:id"),
    detailById: path(ROOTS.app, "/edificios/detalle/"),
    edit: path(ROOTS.app, "/edificios/editar/:id"),
    editById: path(ROOTS.app, "/edificios/editar/"),
    new: path(ROOTS.app, "/edificios/nuevo"),
    contacts: path(ROOTS.app, "/edificios/referentes"),
    contactsDetails: path(ROOTS.app, "/edificios/referentes/detalle/:id"),
    contactsCreate: path(ROOTS.app, "/edificios/referentes/nuevo"),
    contactsEdit: path(ROOTS.app, "/edificios/referentes/editar/:id"),
  },
  manzanas: path(ROOTS.app, "/manzanas"),
  cto: path(ROOTS.app, "/cto"),
  ctoDetail: path(ROOTS.app, "/cto/:id"),
  locations: {
    list: path(ROOTS.app, "/locaciones"),
  },
  usuarios: {
    root: path(ROOTS.app, "/usuarios"),
    misUsuarios: path(ROOTS.app, "/usuarios/mis-usuarios"),
    userDetail: path(ROOTS.app, "/usuarios/mis-usuarios/:id"),
    roles: path(ROOTS.app, "/usuarios/roles"),
    editRole: path(ROOTS.app, "/usuarios/roles/:rol"),
    newRole: path(ROOTS.app, "/usuarios/roles/nuevo-rol"),
  },
  errors: path(ROOTS.app, "/error/:number"),
};
