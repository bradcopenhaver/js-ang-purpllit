import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSubpurpllitsComponent } from './list-subpurpllits/list-subpurpllits.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ListSubpurpllitsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
