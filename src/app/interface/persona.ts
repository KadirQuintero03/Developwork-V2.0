export class persona{
    id_user:string=''; //Maximo 11 caracteres
    nombre1:string=''; //Maximo 15 caracteres en BD
    nombre2:string=''; //Maximo 15 caracteres en BD
    apellido1:string=''; //Maximo 15 caracteres en BD
    apellido2:string=''; //Maximo 15 caracteres en BD
    correo:string=''; //Formato: usuario@dominio.com
    contra:string=''; //Se genera de manera random
    equipo?:string= ''
    estado:string = ''; //Activo o inactivo
    rol:string = ''; //Operario o administrativo

    id_equipo: string = '';
    nombre: string = ''; //Para traer el nombre del rol al modificar usuario
    id_usuario: string = ''; //Para traer la id del usuario al modificar usuario
}
