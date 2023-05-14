import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { JuguetesComponent } from './juguetes/juguetes.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contactenos',
    component: ContactenosComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactenosComponent,
    NosotrosComponent,
    HomeComponent,
    NavegacionComponent,
    JuguetesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
