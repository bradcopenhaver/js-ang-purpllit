import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSubpurpllitsComponent } from './list-subpurpllits/list-subpurpllits.component';
import {SubpurpllitComponent} from './subpurpllit/subpurpllit.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ListSubpurpllitsComponent
  },
  {
    path: 'subpurpllit/:id',
    component: SubpurpllitComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
