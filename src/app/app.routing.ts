import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSubpurpllitsComponent } from './list-subpurpllits/list-subpurpllits.component';
import {SubpurpllitComponent} from './subpurpllit/subpurpllit.component';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {NewPostComponent} from './new-post/new-post.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ListSubpurpllitsComponent
  },
  {
    path: 'subpurpllit/:id',
    component: SubpurpllitComponent
  },
  {
    path: 'post/:id',
    component: PostDetailComponent
  },
  {
    path: 'new_post/:subId',
    component: NewPostComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
