import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home.component';
import { PersonListComponent } from './people/personlist/person-list.component';
import { PersonDetailComponent } from './people/persondetail/person-detail.component';
import { AddPersonComponent } from './people/addperson/add-person.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'people/add', component: AddPersonComponent },
  { path: 'people', component: PersonListComponent },
  { path: 'people/:id', component: PersonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
