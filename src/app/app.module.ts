import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home.component';
import { NavComponent } from './nav-menu/nav-component';
import { AppRoutingModule } from './app-routing.module';
import { PersonListComponent } from './people/personlist/person-list.component';
import { PersonService } from '../services/personservice';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { PersonDetailComponent } from './people/persondetail/person-detail.component';
import { FormsModule } from '@angular/forms';
import { AddPersonComponent } from './people/addperson/add-person.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavComponent,
    PersonListComponent,
    PersonDetailComponent,
    AddPersonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
