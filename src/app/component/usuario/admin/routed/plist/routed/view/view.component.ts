import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../../../../service/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { IUsuario } from '../../../../../../../model/usuario.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-viewcomp',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class ViewComponent implements OnInit {
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

}
