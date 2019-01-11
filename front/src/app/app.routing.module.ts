import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ListComponent } from './components/movies/list/list.component';
import { AddComponent } from './components/movies/add/add.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'movies',
    children: [
      { path: 'list', component: ListComponent },
      { path: 'add',component : AddComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
