import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { ListSubpurpllitsComponent } from './list-subpurpllits/list-subpurpllits.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ListPostsComponent,
    ListSubpurpllitsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
