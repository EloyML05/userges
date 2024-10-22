import { Routes } from '@angular/router';
import { UsuarioAdminRoutedComponent } from './component/usuario/admin/routed/plist/usuario.admin.routed.component.component';
import { RemoveComponent } from './component/usuario/admin/routed/plist/routed/remove/remove.component';
import { ViewComponent } from './component/usuario/admin/routed/plist/routed/view/view.component';
import { UpdateComponent } from './component/usuario/admin/routed/plist/routed/edit/Update.component';
import { NuevoComponent } from './component/usuario/admin/routed/plist/routed/Nuevo/Nuevo.component';


export const routes: Routes = [
  { path: 'admin/usuario/plist', component: UsuarioAdminRoutedComponent },
  { path: 'admin/usuario/remove/:id', component: RemoveComponent },
  { path: 'admin/usuario/edit/:id', component: UpdateComponent },
  { path: 'admin/usuario/view/:id', component: ViewComponent },
  { path: 'admin/usuario/new', component: NuevoComponent },




];
