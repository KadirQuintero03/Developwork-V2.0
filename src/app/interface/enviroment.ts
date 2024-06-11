const url: string = 'https://zc4fjp74-3002.brs.devtunnels.ms/';

export const environment = {
  production: false,

  //Loggearse en la aplicacion
  Login: `${url}api/v1/user/login`,

  //Registrar un usuario
  CreateUser: `${url}api/v1/user`,
    //Actualizar un usuario para asignarle un equipo
    UpdateUser: `${url}api/v1/user/updateUser`,
  //Traer a los usuarios
  GetUsers: `${url}api/v1/user/getUsers`,

  //Registrar un equipo
  CreateTeams: `${url}api/v1/teams/createTeams`,
  // Actualizar a un equipo
  UpdateTeams: `${url}api/v1/teams/updateTeams`,
  //Traer a los equipos
  GetTeams: `${url}api/v1/teams`,

  //Traer los roles y estados
  GetRolEstado: `${url}api/v1/user/getAtri`,

  //Traer las prioridades de las ordenes
  OrderPrio: 'https://2fc68cmh-3001.use2.devtunnels.ms/api/v1/ordenes/prio',
  //Realizar orden una orden
  CreateOrden: 'https://zc4fjp74-3000.brs.devtunnels.ms/ordenes/realize',
  //Hacer peticion de la orden
  PetOrden: 'https://zc4fjp74-3000.brs.devtunnels.ms/ordenes/soli'
};
