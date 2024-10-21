import { Injectable } from '@angular/core';
import { IUsuario } from '../model/usuario.interface';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { IPage } from '../model/model.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private oHttp: HttpClient) {}

  getPage(page: number, size: number): Observable<IPage<IUsuario>> {
    return this.oHttp.get<IPage<IUsuario>>(
      'http://localhost:8085' + '/usuario?page=' + page + '&size=' + size
    );
  }

  getUser(id: number): Observable<IUsuario> {
    return this.oHttp.get<IUsuario>('http://localhost:8085/usuario/' + id);
  }
  getReorderedPage(
    page: number,
    size: number,
    colum: string,
    orden: string
  ): Observable<IPage<IUsuario>> {
    return this.oHttp.get<IPage<IUsuario>>(
      'http://localhost:8085/usuario?page=' +page +'&size=' +size +'&sort=' +colum +',' +orden
    );
  }

  delete(id: number): Observable<IUsuario> {
    return this.oHttp.delete<IUsuario>('http://localhost:8085/usuario/' + id);
  }

  getPageFilter(filter: string): Observable<IPage<IUsuario>> {
    return this.oHttp.get<IPage<IUsuario>>(
      'http://localhost:8085/usuario?filter=' + filter
    );
  }
}
