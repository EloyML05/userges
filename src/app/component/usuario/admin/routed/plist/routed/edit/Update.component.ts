import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../../../../service/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { IUsuario } from '../../../../../../../model/usuario.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-Update',
  templateUrl: './Update.component.html',
  styleUrls: ['./Update.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class UpdateComponent implements OnInit {
id: number = 0
IUsuario: IUsuario = {
  id: 0,
  nombre: '',
  apellido1: '',
  apellido2: '',
  email: '',
}

  constructor( private oUsuarioService: UsuarioService, private oActivatedRoute: ActivatedRoute) { 
    this.id = this.oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {

    this.oUsuarioService.getUser(this.id).subscribe({
      next: (data) => {
        this.IUsuario = data;
      },
      error: (err) => {
        console.log(err);
      },
    })
  }

  update() {
    this.oUsuarioService.update(this.IUsuario).subscribe({
      next: () => {
        alert('Usuario actualizado correctamente');
        location.href = '/admin/usuario/plist';
      },
      error: (err) => {
        console.log(err);
      },
    })
  }

}
