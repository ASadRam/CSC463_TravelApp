import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'todo', component:AboutComponent},
  {path: 'xyz', component:XyzComponent},
  {path: 'about',component:AboutComponent},
  {path: '', redirectTo: '/todo', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
