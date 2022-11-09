import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('./pages/tab-inicial/tab-inicial.module').then(m => m.TabInicialPageModule)
  },
  
  {
    path: 'add-product',
    loadChildren: () => import('./pages/add-product/add-product.module').then( m => m.AddProductPageModule)
  },

  {
    path: 'edit/:id',
    loadChildren: () => import('./pages/add-product/add-product.module').then( m => m.AddProductPageModule)
  },
  {
    path: 'add-empleado',
    loadChildren: () => import('./pages/add-empleado/add-empleado.module').then( m => m.AddEmpleadoPageModule)
  },
  {
    path: 'editEmpleado/:id',
    loadChildren: () => import('./pages/add-empleado/add-empleado.module').then( m => m.AddEmpleadoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

