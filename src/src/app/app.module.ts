import { NgModule } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DojazdComponent } from './dojazd/dojazd.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'uslugi',
    component: ServicesComponent
  },
  {
    path: 'kontakt',
    component: ContactComponent
  },
  {
    path: 'galeria',
    component: GalleryComponent
  },
  {
    path: 'dojazd',
    component: DojazdComponent
  },
]

@NgModule({
  imports: [
    BrowserModule,
BrowserAnimationsModule,    
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    CollapseModule.forRoot(),
    MaterialModule,
    AgmCoreModule,
  ],
  declarations: [AppComponent, HomeComponent, ServicesComponent, ContactComponent, NavComponent, GalleryComponent, DojazdComponent, HeaderComponent],
  bootstrap: [AppComponent],

})
export class AppModule { }
