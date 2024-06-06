import { equipo } from "./equipo";
import { estado } from "./estado";
import { rol } from "./rol";

export class persona{
    idUsuario:string=''; //Maximo 11 caracteres
    nombre1:string=''; //Maximo 15 caracteres en BD
    nombre2:string=''; //Maximo 15 caracteres en BD
    apellido1:string=''; //Maximo 15 caracteres en BD
    apellido2:string=''; //Maximo 15 caracteres en BD
    correo:string=''; //Formato: usuario@dominio.com
    contrasena:string=''; //Se genera de manera random
    idEquipo: equipo = new equipo();
    idEstado: estado = new estado(); //Activo o inactivo
    idRol: rol = new rol(); //Operario o administrativo
}
