import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { WebsitesDeployedComponent } from './websites-deployed/websites-deployed.component';
import { WebsitesUnderConstructionComponent } from './websites-under-construction/websites-under-construction.component';
import { OneOnOneServicesComponent } from './one-on-one-services/one-on-one-services.component';
import { ResourcesComponent } from './resources/resources.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { FooterComponent } from './footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { JavaBasicsComponent } from './java-tutorials/java-basics/java-basics.component';
import { OopConceptsComponent } from './java-tutorials/oop-concepts/oop-concepts.component';
import { JavaCollectionsComponent } from './java-tutorials/java-collections/java-collections.component';
import { VcTutorialsComponent } from './vc-tutorials/vc-tutorials.component';
import { PostgresqlTutorialsComponent } from './postgresql-tutorials/postgresql-tutorials.component';
import { SpringBootAnnotationExamplesComponent } from './spring-tutorials/spring-boot-annotation-examples/spring-boot-annotation-examples.component';
import { SpringBootAnnotationsComponent } from './spring-tutorials/spring-boot-annotations/spring-boot-annotations.component';
import { SpringBootApplicationArchitectureComponent } from './spring-tutorials/spring-boot-application-architecture/spring-boot-application-architecture.component';
import { IntroToJavaComponent } from './java-tutorials/intro-to-java/intro-to-java.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WebsitesDeployedComponent,
    WebsitesUnderConstructionComponent,
    OneOnOneServicesComponent,
    ResourcesComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    JavaBasicsComponent,
    OopConceptsComponent,
    JavaCollectionsComponent,
    VcTutorialsComponent,
    PostgresqlTutorialsComponent,
    SpringBootAnnotationExamplesComponent,
    SpringBootAnnotationsComponent,
    SpringBootApplicationArchitectureComponent,
    IntroToJavaComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
