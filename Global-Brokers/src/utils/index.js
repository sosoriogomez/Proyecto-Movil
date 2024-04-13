export const infoPaises = [
  {
    id: 1,
    pais: 'Colombia',
    totalInversion: 1238132,
    accionPopular: 'Ecopetrol',
    numeroUsuarios: 20,
    backgroundColor: '#0D3D56',
  },
  {
    id: 2,
    pais: 'Chile',
    totalInversion: 1231231,
    accionPopular: 'Falabela',
    numeroUsuarios: 14,
    backgroundColor: 'Indigo',
  },
  {
    id: 3,
    pais: 'Argentina',
    totalInversion: 7745642,
    accionPopular: 'Mecado libre',
    numeroUsuarios: 12,
    backgroundColor: '#0D3D56',
  },
];

export const listBrokers = [
  {
    id: 1,
    nombreBroker: 'Happi',
    paisesOperativos: 'Chile',
    totalUsuarios: 23,
  },
  {
    id: 2,
    nombreBroker: 'Etoro',
    paisesOperativos: 'Colombia',
    totalUsuarios: 12,
  },
  {
    id: 3,
    nombreBroker: 'FxPro',
    paisesOperativos: 'Argentina',
    totalUsuarios: 8,
  },
];

export const infoBroker = [
  {
    id: 1,
    nombreBroker: 'Interactive Brokers',
    paisesOperativos: 'Colombia, Chile',
    totalUsuarios: 23,
    sede: 'One Pickwick Plaza, Greenwich, CT 06830 USA',
    usuariosDestacados: [
      {
        id: 1,
        nombre: 'Pablo Gomez',
        totalInversion: 22232,
        paisResidencia: 'Argentina',
      },
      {
        id: 2,
        nombre: 'Cristian Lopez',
        totalInversion: 2222,
        paisResidencia: 'Colombia',
      },
      {
        id: 2,
        nombre: 'Lucas Rodriguez',
        totalInversion: 2123,
        paisResidencia: 'Colombia',
      },
    ],
  },
];

infoPaises.forEach((item) => {
  item.totalInversion = item.totalInversion.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
});

infoBroker.forEach((item) => {
  item.usuariosDestacados.forEach((item) => {
    item.totalInversion = item.totalInversion.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  });
});
