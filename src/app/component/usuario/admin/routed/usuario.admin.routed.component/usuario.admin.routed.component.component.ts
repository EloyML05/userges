import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../../service/usuario.service';
import { IUsuario } from '../../../../../model/usuario.interface';
import { CommonModule } from '@angular/common';
import { IPage } from '../../../../../model/model.interface';
import { FormsModule } from '@angular/forms';
import { BotoneraService } from '../../../../../service/botonera.service';

@Component({
  selector: 'app-usuario.admin.routed',
  templateUrl: './usuario.admin.routed.component.component.html',
  styleUrls: ['./usuario.admin.routed.component.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class UsuarioAdminRoutedComponent implements OnInit {
  lUsuarios: IUsuario[] = [];
  page: number = 1;
  maxPage: number = 0;
  clicked: boolean = false;

  botonera: string[] = [];

  constructor(
    private oUsuarioService: UsuarioService,
    private oBotoneraService: BotoneraService
  ) {}

  ngOnInit() {
    this.getPage();
  }

  getPage() {
    this.oUsuarioService.getPage(this.page - 1, 10).subscribe({
      next: (arrUsuario: IPage<IUsuario>) => {
        this.lUsuarios = arrUsuario.content;
        this.maxPage = arrUsuario.totalPages;
        this.botonera = [];
        this.botonera = this.oBotoneraService.getbotonera(this.maxPage,this.page);
        this.clicked=false;

      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  editar(oUsuario: IUsuario) {
    console.log('Editar', oUsuario);
  }

  eliminar(oUsuario: IUsuario) {
    console.log('Borrar', oUsuario);
  }

reordenar(colum: string){
let orden = '';
if (this.clicked == false) {
  orden = 'asc';
  this.clicked = true;
}else{
  orden = 'desc';
  this.clicked = false;

}




  this.oUsuarioService.getReorderedPage(this.page-1,10,colum,orden).subscribe({
    next: (arrUsuario: IPage<IUsuario>) => {
      this.lUsuarios = arrUsuario.content;
      this.maxPage = arrUsuario.totalPages;
      this.botonera = [];
      this.botonera = this.oBotoneraService.getbotonera(this.maxPage,this.page);
    },
    error: (err) => {
      console.log(err);
    },
  });
}

  goToPage(boton: number) {
    this.page = boton;
    this.getPage();
  }

  goNext() {
    this.page++;
    this.getPage();
  }

  goPrev() {
    this.page--;
    this.getPage();
  }
}
