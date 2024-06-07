import { equipo } from "./equipo";
import { estado } from "./estado";
import { rol } from "./rol";

export class persona{
    idUsuario:string='';
    nombre1:string='';
    nombre2:string='';
    apellido1:string='';
    apellido2:string='';
    correo:string='';
    contrasena:string='';
    idEquipo: equipo = new equipo();
    idEstado: estado = new estado();
    idRol: rol = new rol();
}
