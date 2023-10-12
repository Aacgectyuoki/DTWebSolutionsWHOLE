import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { WebsitesDeployedComponent } from './websites-deployed/websites-deployed.component';
import { WebsitesUnderConstructionComponent } from './websites-under-construction/websites-under-construction.component';
import { OneOnOneServicesComponent } from './one-on-one-services/one-on-one-services.component';
import { ResourcesComponent } from './resources/resources.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WebsitesDeployedComponent,
    WebsitesUnderConstructionComponent,
    OneOnOneServicesComponent,
    ResourcesComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
