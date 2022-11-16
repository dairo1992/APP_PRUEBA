import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { User } from 'src/app/interfaces/response.interface';
import { GestionService } from '../../services/gestion.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user!: User;
  sw: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private GestionService: GestionService,
  ) {
    // RECIBIDO TERMINO DE BUSQUEDA
    this.activatedRoute.params
    .pipe(
      switchMap(({ user }) => this.GestionService.getUserProfile(user))
    )
    .subscribe((user) => {
      this.user = user;
      this.sw = true;
    });
  }



  ngOnInit(): void {
    //ENVIANDO OBJETO POR URL
    // this.activatedRoute.queryParams
    //   .pipe(params => params)
    //   .subscribe(params => {
    //     this.user = JSON.parse(params['user']);
    //   }
    //   );
  }
}
