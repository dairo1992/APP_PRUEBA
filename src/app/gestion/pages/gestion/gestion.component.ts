import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../../services/gestion.service';
import Swal from 'sweetalert2'
import { Item, Resp, User } from 'src/app/interfaces/response.interface';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  pages: number = 1;
  formSearch = "";
  listItems: Item[] = [];
  // icon = faEye;
  messageError = "";

  constructor(
    private router: Router,
    private GestionService: GestionService
  ) { }

  ngOnInit(): void {
  }

  Search(): void {
    if (this.formSearch != '') {
      if (this.formSearch.length > 4) {
        if (this.formSearch.includes("doublevpartners")) {
          Swal.fire(
            'MENSAJE!',
            'Palabra Bloqueada.',
            'error'
          )
        } else {
          Swal.fire({ title: 'Cargando...', allowOutsideClick: false });
          Swal.showLoading(null);
          this.GestionService.listUsers(this.formSearch).subscribe((resp: Resp) => {
            this.limpiar();
            Swal.close();
            if (resp.total_count > 0) {
              // Hay datos
            } else {
              Swal.fire(
                'MENSAJE!',
                'No se encontraron conincidencias.',
                'error'
              )
            }
            this.listItems = resp.items;
            console.log(resp)
          })
        }
      } else {
        this.messageError = "El termino de busqueda no puede ser menor a 4 digitos";
        setTimeout(() => {
          this.messageError = '';
        }, 3000);
      }
    } else {
      this.messageError = "El termino de busqueda no puede estar vacio";
      setTimeout(() => {
        this.messageError = '';
      }, 3000);
    }
  }

  limpiar(): void {
    this.formSearch = "";
    this.listItems = [];
    this.messageError = "";
  }

  userProfile(user: string): void {
    if (user != '') {
      // ENVIANDO TERMINO DE BUSQUEDA
      this.router.navigate([`/home/profile/${user}`]);
      // ENVIANDO OBJETO POR URL
      // this.GestionService.getUserProfile(user).then((resp) => {
      //   if (resp != '') {
      //     this.router.navigate(['/home/profile'], { queryParams: { user: JSON.stringify(resp) } });
      //   }
      // })
    }
  }

}
