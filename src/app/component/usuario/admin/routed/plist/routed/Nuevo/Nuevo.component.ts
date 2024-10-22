import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UsuarioService } from '../../../../../../../service/usuario.service';
import { IUsuario, NewIUsuario } from '../../../../../../../model/usuario.interface';
@Component({
  selector: 'app-Nuevo',
  templateUrl: './Nuevo.component.html',
  styleUrls: ['./Nuevo.component.css'],
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  standalone: true,
})
export class NuevoComponent implements OnInit {

  usuarioForm: FormGroup = new FormGroup({
    nombre: new FormControl( '', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    apellido1: new FormControl( '', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    apellido2: new FormControl(),
    email: new FormControl( '', [Validators.required, Validators.email]),
  });

  IUsuario: NewIUsuario = {
    nombre: '',
    apellido1: '',
    apellido2: '',
    email: '',
  };

  constructor(    private oUsuarioService: UsuarioService,) {}

  ngOnInit() {}

  onSubmit() {
    if (this.usuarioForm?.invalid) {
      alert ('Faltan campos por rellenar');
      return;
    }
    this.IUsuario = this.usuarioForm.value;
    this.oUsuarioService.create(this.IUsuario).subscribe({
      next: (data) => {
        alert('Usuario creado correctamente');
        location.href = '/admin/usuario/plist';},
      error: (err) => {
        console.log(err);
      },
    });
  }
}
