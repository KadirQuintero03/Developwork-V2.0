export const environment = {
  production: false,

  //Loggearse en la aplicacion
  Login: 'https://zc4fjp74-3002.brs.devtunnels.ms/api/v1/user/login',

  //Registrar un usuario
  CreateUser: 'https://zc4fjp74-3002.brs.devtunnels.ms/api/v1/user',
  //Traer a los usuarios
  GetUsers: 'https://zc4fjp74-3002.brs.devtunnels.ms/api/v1/user/getUsers',
  //Actualizar un usuario para asignarle un equipo
  UpdateTeams: 'https://zc4fjp74-3002.brs.devtunnels.ms/api/v1/user/updateTeams',

  //Registrar un equipo
  CreateTeams: 'https://zc4fjp74-3002.brs.devtunnels.ms/api/v1/teams/createTeams',
  //Traer a los equipos
  GetTeams: 'https://zc4fjp74-3002.brs.devtunnels.ms/api/v1/teams',

  //Traer las prioridades de las ordenes
  OrderPrio: 'https://2fc68cmh-3001.use2.devtunnels.ms/api/v1/ordenes/prio',
  //Registrar una orden
  CreateOrden: 'https://2fc68cmh-3000.use2.devtunnels.ms/ordenes/realize',

  //Traer los roles y estados
  GetRolEstado: 'https://zc4fjp74-3002.brs.devtunnels.ms/api/v1/user/getAtri',
};
