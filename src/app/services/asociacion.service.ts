import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Asociacion } from '../models/asociacion.models';


@Injectable({
    providedIn: 'root'
})
export class AsociacionService {

    private url: string = 'https://restserver-pacto.herokuapp.com';

    asoToken: string;

    constructor(private _http: HttpClient) { }

    leerToken() {
        if (localStorage.getItem('token')) {
            this.asoToken = localStorage.getItem('token')
        }
        return this.asoToken;
    }

    getAsociaciones() {
        const headers = new HttpHeaders({
            'token': this.leerToken()
        });
        
        return this._http.get(`${this.url}/asociacion`,{headers});
    }

    addAsociaciones(asociacion:Asociacion){
        const headers = new HttpHeaders({
            'token': this.leerToken()
        });
        const authData = {
            nombre_aso: asociacion.nombre_aso,
            certificado_aso: asociacion.certificado_aso,
            sector_aso: asociacion.sector_aso,
            barrio_aso: asociacion.barrio_aso,
            parroquia_aso: asociacion.parroquia_aso
        
           
        };
        return this._http.post(`${this.url}/asociacion`,authData, {headers});
    }

    updateUser(asociacion:Asociacion){
        const headers = new HttpHeaders({
            'token': this.leerToken()
        });

        const authData = {
            nombre_aso: asociacion.nombre_aso,
            certificado_aso: asociacion.certificado_aso,
            sector_aso: asociacion.sector_aso,
            barrio_aso: asociacion.barrio_aso,
            parroquia_aso: asociacion.parroquia_aso
        
        };
        
        return this._http.put(`${this.url}/usuario/${asociacion._id}`,authData,{headers});
    }

    deleteUser(asociacion:Asociacion){
        const headers = new HttpHeaders({
            'token': this.leerToken()
        });  
        return this._http.delete(`${this.url}/asociacion/${asociacion._id}`,{headers});
    }
}
