import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseDetailComponent} from './course/course-detail.component';
import { CourseService } from './course/course.service';
// import { UserService } from './user.service';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { LoginComponent } from './login.component';
import { AppRoutingModule } from './app-routing.module';

import { CourseCreateComponent } from './course/course-create.component';
import { AuthGuard } from './auth/_guards/index';
import { AuthenticationService, UserService } from './auth/_services';
import { LoginComponent } from './auth/login';
import { RegisterComponent } from './auth/register';
import { HomeComponent } from './home';
import { CourseJoinComponent } from './course/course-join.component';



@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseDetailComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CourseCreateComponent,
    CourseJoinComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [ CourseService, UserService,  AuthGuard, AuthenticationService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
