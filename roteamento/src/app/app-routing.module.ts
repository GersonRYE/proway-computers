import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { PaginaProtegidaComponent } from './pagina-protegida/pagina-protegida.component';
import { PaginasComParametrosComponent } from './paginas-com-parametros/paginas-com-parametros.component';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';

const routes: Routes = [
  {path: "", redirectTo: "primeira-pagina", pathMatch: "full"},
  {path: "primeira-pagina", component: PrimeiraPaginaComponent},
  {path: "segunda-pagina", component: SegundaPaginaComponent},
  {path: "pagina-com-parametros/:id", component: PaginasComParametrosComponent},
  // a pagina abaixo esta protegida, nao pode acessar
  {path: "pagina-protegida", component: PaginaProtegidaComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
