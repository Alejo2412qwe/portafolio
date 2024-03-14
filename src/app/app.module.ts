import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TecsComponent } from './tecs/tecs.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './proyectos/projects.component';
import { HeaderComponent } from './header/header.component';
import { LocationStrategy, HashLocationStrategy, DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TecsComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
