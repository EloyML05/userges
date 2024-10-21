import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../../../../../service/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { IUsuario } from '../../../../../../model/usuario.interface';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css'],
  standalone: true,
  imports: [CommonModule ,FormsModule]
  
})
export class RemoveComponent implements OnInit {

id: number = 0;
IUsuario: IUsuario = {
  id: 0,
  nombre: '',
  apellido1: '',
  apellido2: '',
  email: '',
};

  constructor( private oUsuarioService: UsuarioService, private oActivatedRoute: ActivatedRoute) { 
    this.id = this.oActivatedRoute.snapshot.params['id'];

    this.oUsuarioService.getUser(this.id).subscribe({
      next: (data) => {
        this.IUsuario = data;
      },
      error: (err) => {
        console.log(err);
      },
    })

  }

  ngOnInit() {
  }

  eliminar() {
    this.oUsuarioService.delete(this.id).subscribe({
      next: () => {
        alert('Usuario eliminado correctamente');
        location.href = '/admin/usuario/plist';
      },
      error: (err) => {
        console.log(err);
      },
    })
  }
}
