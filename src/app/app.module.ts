import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'
import { NgxPaginationModule } from 'ngx-pagination';


//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { ProductosComponent } from './components/productos/productos.component';
import { EntidadComponent } from './components/entidad/entidad.component';
import { CapacitacionComponent } from './components/capacitacion/capacitacion.component';
import { AsiscapacitacionComponent } from './components/asiscapacitacion/asiscapacitacion.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { DetallepedidoComponent } from './components/detallepedido/detallepedido.component';
import { PedidoadminComponent } from './components/pedidoadmin/pedidoadmin.component';
import { BodegaComponent } from './components/bodega/bodega.component';
import { ReunionComponent } from './components/reunion/reunion.component';
import { AsisreunionComponent } from './components/asisreunion/asisreunion.component';
import { MaquinarianComponent } from './components/maquinarian/maquinarian.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';
import { MaquinariaasoComponent } from './components/maquinariaaso/maquinariaaso.component';
import { MantenimientoasoComponent } from './components/mantenimientoaso/mantenimientoaso.component';

// Routes
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/shared/navbar/navbar.component';











@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    CapacitacionComponent,
    AsiscapacitacionComponent,
    ProductosComponent,
    EntidadComponent,
    NavbarComponent,
    PedidoComponent,
    DetallepedidoComponent,
    PedidoadminComponent,
    BodegaComponent,
    ReunionComponent,
    AsisreunionComponent,
    MaquinarianComponent,
    MantenimientoComponent,
    MaquinariaasoComponent,
    MantenimientoasoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
