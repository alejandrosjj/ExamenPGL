import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabInicialPage } from './tab-inicial.page';

const routes: Routes = [
  {
    path: 'tab-inicial',
    component: TabInicialPage,
    children: [
      {
        path: 'lista-empleados',
        loadChildren: () => import('../lista-empleados/lista-empleados.module').then(m => m.ListaEmpleadosPageModule)
      },
      {
        path: 'lista-productos',
        loadChildren: () => import('../lista-productos/lista-productos.module').then(m => m.ListaProductosPageModule)
      },

      {
        path: 'add-product',
        loadChildren: () => import('../add-product/add-product.module').then( m => m.AddProductPageModule)
      },

      {
        path: 'edit/:id',
        loadChildren: () => import('../add-product/add-product.module').then( m => m.AddProductPageModule)
      },

      {
        path: 'add-empleado',
        loadChildren: () => import('../add-empleado/add-empleado.module').then( m => m.AddEmpleadoPageModule)
      },

      {
        path: 'editEmpleado/:id',
        loadChildren: () => import('../add-empleado/add-empleado.module').then( m => m.AddEmpleadoPageModule)
      },

      {
        path: '',
        redirectTo: '/tab-inicial/lista-empleados',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '/tab-inicial/lista-empleados',
        pathMatch: 'full'
      }

      
    ]
  },
  {
    path: '',
    redirectTo: '/tab-inicial/lista-empleados',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabInicialPageRoutingModule {}
