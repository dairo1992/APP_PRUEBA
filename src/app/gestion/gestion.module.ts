import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GestionRoutingModule } from './gestion-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    HomeComponent,
    GestionComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    GestionRoutingModule,
    FormsModule,
    MaterialModule,
    NgxPaginationModule,
    
  ]
})
export class GestionModule { }
