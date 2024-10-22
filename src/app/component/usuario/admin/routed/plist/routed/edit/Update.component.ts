import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../../../../service/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { IUsuario } from '../../../../../../../model/usuario.interface';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-Update',
  templateUrl: './Update.component.html',
  styleUrls: ['./Update.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
})
export class UpdateComponent implements OnInit {
  id: number = 0;
  IUsuario: IUsuario = {
    id: 0,
    nombre: '',
    apellido1: '',
    apellido2: '',
    email: '',
  };

  profileForm: FormGroup = new FormGroup({
    id: new FormControl(),
    nombre: new FormControl(),
    apellido1: new FormControl(),
    apellido2: new FormControl(),
    email: new FormControl(),
  });

  constructor(
    private oUsuarioService: UsuarioService,
    private oActivatedRoute: ActivatedRoute
  ) {
    this.id = this.oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.oUsuarioService.getUser(this.id).subscribe({
      next: (data) => {
        this.IUsuario = data;
        this.profileForm = new FormGroup({
          id: new FormControl(this.IUsuario?.id, [Validators.required]),
          nombre: new FormControl(this.IUsuario?.nombre, [Validators.required]),
          apellido1: new FormControl(this.IUsuario?.apellido1, [
            Validators.required,
          ]),
          apellido2: new FormControl(this.IUsuario?.apellido2),
          email: new FormControl(this.IUsuario?.email, [Validators.required, Validators.email]),
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onSubmit() {
    if (this.profileForm?.invalid) {
      alert ('Faltan campos por rellenar');
      return;

    }
    this.IUsuario.id = this.profileForm?.value.id;
    this.IUsuario.nombre = this.profileForm?.value.nombre;
    this.IUsuario.apellido1 = this.profileForm?.value.apellido1;
    this.IUsuario.apellido2 = this.profileForm?.value.apellido2;
    this.IUsuario.email = this.profileForm?.value.email;

    this.update();
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
    });
  }
}
