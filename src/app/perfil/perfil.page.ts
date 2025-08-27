import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public usuario: any = {};
  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    this.usuario = JSON.parse(localStorage.getItem("ambepUser"));

  }

  openAlterarSenha(): void {

    this.router.navigateByUrl('alterar-senha');

  }
}
