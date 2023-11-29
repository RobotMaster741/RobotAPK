import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    children: [
      {
        path: 'iniciar',
        loadChildren: () => import('./paginas/login/iniciar/iniciar.module').then(m => m.IniciarPageModule)
      },
      {
        path: 'recuperar',
        loadChildren: () => import('./paginas/login/recuperar/recuperar.module').then(m => m.RecuperarPageModule)
      },
      {
        path: 'registro',
        loadChildren: () => import('./paginas/login/registro/registro.module').then(m => m.RegistroPageModule)
      }
    ]
  },
  //Aqui esta la carpeta "Menu-principal" y dentro de esta le pegas las rutas de las carpetas
  {
    path: 'menu-principal',
    children: [
      {
        path: 'menu',
        loadChildren: () => import('./paginas/menu-principal/menu/menu.module').then(m => m.MenuPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./paginas/menu-principal/perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: 'registro-productos',
        loadChildren: () => import('./paginas/menu-principal/registro-productos/registro-productos.module').then(m => m.RegistroProductosPageModule)
      },
      {
        path: 'ver-detalles',
        loadChildren: () => import('./paginas/menu-principal/ver-detalles/ver-detalles.module').then(m => m.VerDetallesPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
