import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { VehiculoModule } from './vehiculo/vehiculo.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    VehiculoModule,
    AppRoutingModule,    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
