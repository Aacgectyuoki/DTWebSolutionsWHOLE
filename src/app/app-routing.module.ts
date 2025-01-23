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
import { ReactTutorialsComponent } from './react-tutorials/react-tutorials.component';
import { CicdJenkinsComponent } from './jenkins_tutorials/cicd-jenkins/cicd-jenkins.component';
import { JavascriptBasicsComponent } from './javascript_tutorials/javascript-basics/javascript-basics.component';
import { NodejsComponent } from './javascript_tutorials/nodejs/nodejs.component';
import { SpringBootAnnotationExamplesComponent } from './spring-tutorials/spring-boot-annotation-examples/spring-boot-annotation-examples.component';
import { SpringBootApplicationArchitectureComponent } from './spring-tutorials/spring-boot-application-architecture/spring-boot-application-architecture.component';
import { VcTutorialsComponent } from './vc-tutorials/vc-tutorials.component';
import { AngularBasicsComponent } from './angular-tutorials/angular-basics/angular-basics.component';
import { AwsCategorizedAndDefinedComponent } from './aws-tutorials/aws-categorized-and-defined/aws-categorized-and-defined.component';
import { CommandlineBasicsComponent } from './commandline-tutorials/commandline-basics/commandline-basics.component';
import { MongoDbBasicsComponent } from './mongodb-tutorials/mongo-db-basics/mongo-db-basics.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resources', component: ResourcesComponent },
  // { path: 'one-on-one-services', component: OneOnOneServicesComponent },
  { path: 'about', component: AboutComponent },

  { path: 'java-tutorials/intro-to-java', component: IntroToJavaComponent },
  { path: 'java-tutorials/java-basics', component: JavaBasicsComponent },
  { path: 'react-tutorials', component: ReactTutorialsComponent },
  { path: 'postgresql-tutorials', component: PostgresqlTutorialsComponent },
  { path: 'spring-boot-application-architecture', component: SpringBootApplicationArchitectureComponent },
  { path: 'spring-boot-annotations', component: SpringBootAnnotationsComponent },
  { path: 'spring-boot-annotation-examples', component: SpringBootAnnotationExamplesComponent },
  { path: 'jenkins-tutorials/cicd-jenkins', component: CicdJenkinsComponent },
  { path: 'javascript-tutorials/javascript-basics', component: JavascriptBasicsComponent },
  { path: 'javascript-tutorials/nodejs', component: NodejsComponent },
  { path: 'vc-tutorials', component: VcTutorialsComponent },
  { path: 'angular-tutorials/angular-basics', component: AngularBasicsComponent },
  { path: 'aws-tutorials/aws-categorized-and-defined', component: AwsCategorizedAndDefinedComponent },
  { path: 'commandline-tutorials/commandline-basics', component: CommandlineBasicsComponent },
  { path: 'mongodb-tutorials/mongo-db-basics', component: MongoDbBasicsComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
