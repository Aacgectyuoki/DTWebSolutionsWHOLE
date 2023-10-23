import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { OneOnOneServicesComponent } from './one-on-one-services/one-on-one-services.component';
import { AboutComponent } from './about/about.component';
import { PostgresqlTutorialsComponent } from './postgresql-tutorials/postgresql-tutorials.component';
import { JavaBasicsComponent } from './java-tutorials/java-basics/java-basics.component';
import { SpringBootAnnotationsComponent } from './spring-tutorials/spring-boot-annotations/spring-boot-annotations.component';
import { IntroToJavaComponent } from './java-tutorials/intro-to-java/intro-to-java.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'one-on-one-services', component: OneOnOneServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'java-tutorials/intro-to-java/intro-to-java.component.html', component: IntroToJavaComponent },
  { path: 'java-tutorials/java-basics/java-basics.component.html', component: JavaBasicsComponent },
  { path: 'spring-tutorials/postgresql-tutorials/postgresql-tutorials.component.html', component: PostgresqlTutorialsComponent },
  { path: 'spring-boot-annotations/spring-boot-annotations.component.html', component: SpringBootAnnotationsComponent}
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
