import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionComponent } from './pages/gestion/gestion.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'gestion',
        component: GestionComponent
      },
      // RUTA ENVIO DE TERMINO DE BUSQUEDA
      {
        path: 'profile/:user',
        component: ProfileComponent,
      },
      // RUTA ENVIO DE PARAMETROS POR URL
      // {
      //   path: 'profile',
      //   component: ProfileComponent,
      // },
      {
        path: '**',
        redirectTo: 'gestion'
      }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GestionRoutingModule { }
