export class persona{
    id_user:string=''; //Maximo 11 caracteres
    nombre1:string=''; //Maximo 15 caracteres en BD
    nombre2:string=''; //Maximo 15 caracteres en BD
    apellido1:string=''; //Maximo 15 caracteres en BD
    apellido2:string=''; //Maximo 15 caracteres en BD
    correo:string=''; //Formato: usuario@dominio.com
    contra:string=''; //Se genera de manera random
    // equipo?:string= ''
    estado:string = ''; //Activo o inactivo
    rol:string = ''; //Operario o administrativo
}
