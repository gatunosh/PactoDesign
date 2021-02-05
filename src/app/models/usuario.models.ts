export class UsuarioModel {
    _id: string;
    nombre: string;
    apellido: string;
    tlfc: string;
    email: string;
    password: string;
    tlfm: string;
    hectareas: number;
    sector: string;
    barrio: string;
    parroquia: string;
    estado: boolean;
    role: string;
    id_asociacion: [{
        id_asociacion: string;
    }]
}


export interface Usuario {
    _id: string;
    nombre:string;
    apellido:string;
    tlfc:string;
    email:string;
    password:string; 
    tlfm:string;
    hectareas:number;
    sector:string;
    barrio:string;
    parroquia:string;
    estado:boolean;
    role:string;
    id_asociacion: [{
        id_asociacion: string;
    }]
}
