import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Mantenimiento, MantenimientoModel } from '../../models/mantenimiento.models';
import { MantenimientoService } from '../../services/mantenimiento.service';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styles: [
  ]
})
export class MantenimientoComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  mantenimiento: Mantenimiento[] = [];
  mantenimientosForm: FormGroup;
  mantenimiento1: MantenimientoModel = new MantenimientoModel();
  //usuarioUpdate: UsuarioModel = new UsuarioModel();

  constructor(
    private _mantenimientoService: MantenimientoService,
    private _builder: FormBuilder

  ) { this.mantenimientosForm = this._builder.group({
    fech_man_maq:[''],
    tipo_maq: ['',],
    des_man_maq: ['',],
    check_man_maq: ['',],
    costo_man_maq: ['',],
    marca_man_maq: ['',],
    km_man_maq: ['',],
    placa_man_maq: ['',],
    origen_man_maq: ['',],
  });

   }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: "//cdn.datatables.net/plug-ins/1.10.22/i18n/Spanish.json"
      }
    };
    this._mantenimientoService.getMantenimiento().subscribe((resp:any) => {
      this.mantenimiento = resp.mantenimiento;
      console.log(resp,'hola desde api');
      this.dtTrigger.next();
    });         
  }
  
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();

}
enviar(values){
  //this.maquinarias.nom_maq= values['nom_maq'];
  this.mantenimiento1.fech_man_maq = values['fech_man_maq'];
  this.mantenimiento1.tipo_maq = values['tipo_maq'];
  this.mantenimiento1.des_man_maq = values['des_man_maq'];
  this.mantenimiento1.check_man_maq = values['check_man_maq'];
  this.mantenimiento1.costo_man_maq = values['costo_man_maq'];
  this.mantenimiento1.marca_man_maq = values['marca_man_maq'];
  this.mantenimiento1.km_man_maq = values['km_man_maq'];
  this.mantenimiento1.placa_man_maq = values['placa_man_maq'];
  this.mantenimiento1.origen_man_maq = values['origen_man_maq'];

  this._mantenimientoService.addMantenimiento(this.mantenimiento1).subscribe((resp:any) => {
  this.mantenimiento = resp.mantenimiento;
    window.location.reload()
    
  }, (err) => {
  });
}
}